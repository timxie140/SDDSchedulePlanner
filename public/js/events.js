/**
 * Event Manager Class
 */
class EventManager {
    constructor() {
        this.events = {
            "Monday": [],
            "Tuesday": [],
            "Wednesday": [],
            "Thursday": [],
            "Friday": [],
            "Saturday": [],
            "Sunday": []
        };
    }

    addAlreadyCreatedEvent(newEvent) {
        this.events[newEvent.day].push(newEvent);
    }

    checkPersonalEventExist(newEvent) {
        let conflict = false;
        let other_event = "none";
        for (let day in this.events) {
            this.events[day].forEach(event => {
                console.log(event.title, newEvent.title);
                if (event.title === newEvent.title) {
                    if (newEvent.crn === event.crn) {
                        conflict = true;
                        other_event = 'same-personal-event';
                    }else if(newEvent.crn !== event.crn) {
                        conflict = true;
                        other_event = 'no-mimic-course';
                    }
                }
            });
        }
        return [conflict, other_event];
    }

    getDaylength(day) {
        return this.events[day].length;
    }

    getDay(day) {
        return this.events[day];
    }

    transferDataTo(targetInstance) {
        for (let day in this.events) {
            targetInstance.events[day] = [...this.events[day]];
        }
    }

    clearEvents() {
        for (let day in this.events) {
            this.events[day] = [];
        }
    }

    static get instance() {
        if (!this._instance) {
            this._instance = new EventManager();
        }
        return this._instance;
    }
}
//Initialize Event Manager and Courses
const eventManager = EventManager.instance;
const allCourses = new Courses();

reload_event = false;
let session_counter = 0;

/**
 * Check for conflict, then determine if add event
 * @returns {List} [conflict, other_event...]
 */
function checkForConflictAlreadyExist() {
    allEventsContainer = document.getElementById('all-events-for-schedule');
    allEvents = allEventsContainer.querySelectorAll('div');
    result = [false, 'none'];
    for(let i = 0; i < allEvents.length; i++) {
        if (allEvents[i].classList.contains('conflict-event')) {
            if (!result[0]){
                result[0] = true;
                result[1] = allEvents[i].getAttribute('data-crn');
            }
            else{
                result[0] = true;
                result.push(allEvents[i].getAttribute('data-crn'));
            }
        }
    }
    return result;
}

/**
 * Check if the event time is out of available time range
 * @param {String} startTime 
 * @param {String} endTime 
 * @returns {Boolean} true if the event time is out of available time range
 */
function checkForOutOfTimeRange(startTime, endTime) {
    if (startTime <= '06:00' || endTime >= '24:00') {
        return true;
    }
    return false;
}

/**
 * check if the event is already have other time slot put in
 * @param {String} CRN 
 * @returns {String} return the color if found same event/course, or return 'none'
 */
function checkSameEventColorChange(CRN) {
    allEventsContainer = document.getElementById('all-events-for-schedule');
    allEvents = allEventsContainer.querySelectorAll('div');
    for(let i = 0; i < allEvents.length; i++) {
        if (allEvents[i].getAttribute('data-crn') === CRN && allEvents[i].getAttribute('data-color') !== 'none') {
            return allEvents[i].getAttribute('data-color');
        }
    }
    return 'none';
}

/**
 * Deal with multiple time event, call addEvent function, then show notification
 * @param {String} major 
 * @param {Int} CRN 
 * @param {String} title 
 * @param {String} instructor_or_description 
 * @param {String} type 
 */
function addMultipleTimeEvent(major, CRN, title, instructor_or_description, type) {
    let rawEventTime = allCourses.getCourseDataByMajor(major)[CRN].daysTimes;
    let eventTime;
    if (Number.isInteger(rawEventTime[0][1].start)) {
        eventTime = timeConverter.formatDaysTime(rawEventTime);
    }else{
        eventTime = rawEventTime;
    }
    for (let time in eventTime) {
        let day = eventTime[time][0];
        let startTime = eventTime[time][1].start;
        let endTime = eventTime[time][1].end;
        let color = checkSameEventColorChange(CRN);
        let session = eventTime.length;
        
        addEvent(CRN, day, startTime, endTime, title, instructor_or_description, type, color, session, false);
    }
    notification.showCourseNotification();
}

/**
 * Main add event function, check for conflict, time out of range, same course is already added
 * Show corresponding notification, then set up configuration for event
 * @param {int} CRN 
 * @param {String} day 
 * @param {String} startTime 
 * @param {String} endTime 
 * @param {String} title 
 * @param {String} instructor_or_description 
 * @param {String} type 
 * @param {String} color 
 * @param {int} session 
 * @param {boolean} showNotification 
 */
function addEvent(CRN, day, startTime, endTime, title, instructor_or_description, type, color, session, showNotification = true) {
    //Check if event have available time slot
    if (day === 'none' || startTime === 'none' || endTime === 'none') {
        notification.showNoAddEventDueToNoTimeSlotNotification();
        return;
    }

    //if the event time is out of available time range, then return
    if (checkForOutOfTimeRange(startTime, endTime)) {
        notification.showTakeRestNotification();
        return;
    }

    //if already exist a conflict, then return
    conflict_result = checkForConflictAlreadyExist();
    if (conflict_result[0]) {
        if (type !== 'academic') {
            notification.showNoAddEventDueToConflictNotification();
            return;
        } else{
            let firstCourseInConflict = conflict_result[1];
            let secondCourseInConflict = 'none';
            for (let i = 1; i < conflict_result.length; i++) {
                if (firstCourseInConflict !== conflict_result[i] && secondCourseInConflict === 'none') {
                    secondCourseInConflict = conflict_result[i];
                }else if (CRN !== firstCourseInConflict && secondCourseInConflict !== 'none' && CRN !== secondCourseInConflict) {
                    notification.showNoAddEventDueToConflictNotification();
                    return;
                }
            }
            
        }
    }
    
    // Check if there is a conflict
    let newEvent = {crn:CRN, day:day, startTime: startTime, endTime: endTime, title: title, instructor_or_description: instructor_or_description, type: type, session: session};
    let [conflict, other_event] = checkForConflict(newEvent);
    const conflictEl = document.getElementById(other_event);
    
    if (!conflict) {
        eventManager.addAlreadyCreatedEvent(newEvent);
    }else if (conflict) {
        if ((other_event === title || other_event === CRN + '-' + day + '-' + startTime + '-' + endTime)){
            notification.showSameCourseNotification();
            return;
        }else if (other_event === "no-add") {
            notification.showMultipleConflictNotification();
            deleteMultipleTimeEvent(CRN);
            return;
        }else if(other_event === 'same-personal-event') {
            notification.showSamePersonalEventNotification();
            return;
        }else if(other_event === 'no-mimic-course') {
            notification.showNoMimicCourseNotification();
            return;
        }else{
            eventManager.addAlreadyCreatedEvent(newEvent);
            notification.showConflictCourseNotification();
        }
    }

    if (session_counter === session) {
        session_counter = 0;
    }

    const eventEl = document.createElement('div');
    
    const dayIndex = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].indexOf(day);

    startHour = parseInt(startTime.split(':')[0], 10);
    startMinutes = parseInt(startTime.split(':')[1], 10) / 60;
    endHour = parseInt(endTime.split(':')[0], 10);
    endMinutes = parseInt(endTime.split(':')[1], 10) / 60;


    height_percentage = ((endHour + endMinutes) - (startHour + startMinutes)) / 19 * 100;
    top_percentage = ((startHour + startMinutes)-6) / 19 * 100;

    //set styling for event seperate by conflict or not
    if (conflict) {
        conflictEl.style.backgroundColor = '';
        conflictEl.style.border = '';
        eventEl.classList.add('conflict-event');
        conflictEl.classList.add('conflict-event');

        eventEl.style.left = (dayIndex * (100 / 7)) + '%';
        eventEl.style.width = ((100 / 7) / 2) + '%';
        conflict_dayIndex = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].indexOf(conflictEl.getAttribute('data-day'));
        conflictEl.style.left = (conflict_dayIndex * (100 / 7)) + ((100 / 7) / 2) + '%';
        conflictEl.style.width = ((100 / 7) / 2) + '%';
        if (color === 'none') {
            eventEl.setAttribute('data-color', getEventColor());
        }
    }
    else {
        eventEl.style.left = (dayIndex * (100 / 7)) + '%';
        eventEl.style.width = (100 / 7) + '%';
        if (color === 'none') {
            let new_color = getEventColor();
            eventEl.style.backgroundColor = new_color;
            eventEl.style.border = '1px solid black';
            eventEl.setAttribute('data-color', new_color);
        }else{
            eventEl.style.backgroundColor = color;
            eventEl.style.border = '1px solid black';
            eventEl.setAttribute('data-color', color);
        }
    }
    eventEl.style.top = top_percentage + '%';
    eventEl.style.height = height_percentage + '%';
    
    //set all attibutes for information of event
    eventEl.setAttribute('data-day', day);
    eventEl.setAttribute('data-start-time', startTime);
    eventEl.setAttribute('data-end-time', endTime);
    eventEl.setAttribute('data-title', title);
    eventEl.setAttribute('data-instructor_or_description', instructor_or_description);
    eventEl.setAttribute('data-type', type);
    eventEl.setAttribute('data-crn', CRN);
    eventEl.setAttribute('data-session', session);
    eventEl.classList.add('event');

    if (type === 'academic') {
        eventEl.innerHTML = `<strong>${title}</strong><br>${instructor_or_description}<br>CRN: ${CRN}<br><span>Time: ${startTime} - ${endTime}</span>`;
        eventEl.setAttribute('id', CRN + '-' + day + '-' + startTime + '-' + endTime);
        if (showNotification) {
            notification.showCourseNotification();
        }
    }
    else if (type === 'personal') {
        eventEl.innerHTML = `<strong>${title}</strong><br>${instructor_or_description}<br><span>Time: ${startTime} - ${endTime}</span>`;
        eventEl.setAttribute('id', title);
        if (showNotification) {
            notification.showPersonalEventNotification();
        }
    }
    
    document.querySelector('.events').appendChild(eventEl);
    storeAndLoad.storeEventsToLocalStorage();
    session_counter++;
}


/**
 * Check for conflict in schedule
 * @param {Dictionary} event 
 * @returns {List} [conflict, other_event...
 */
function checkForConflict(event) {
    if (event.type !== 'personal' && eventManager.getDaylength(event.day) === 0) {
        return [false, "none"];
    }
    let conflict = false;
    let CRN = event.crn;
    let other_event = "none";
    let day = event.day;
    let startTime = event.startTime;
    let endTime = event.endTime;
    let title = event.title;
    let instructor_or_description = event.instructor_or_description;
    let type = event.type;
    let newEvent = {crn:CRN, startTime: startTime, endTime: endTime, title: title, instructor_or_description: instructor_or_description, type: type};
    let count = 0;
    if (type === 'personal') {
        let results = eventManager.checkPersonalEventExist(newEvent);
        if (results[0]) {
            conflict = true;
            other_event = results[1];
            return [conflict, other_event];
        }
    }

    eventManager.getDay(day).forEach(event => {
        if (event.title !== newEvent.title) {
            if (event.startTime < newEvent.endTime && newEvent.startTime < event.endTime) {
                conflict = true;
                if (event.type === 'academic'){
                    other_event = event.crn + '-' + event.day + '-' + event.startTime + '-' + event.endTime;
                }
                else{
                    other_event = event.title;
                }
                count++;
            }else if (event.startTime === newEvent.startTime && event.endTime === newEvent.endTime) {
                conflict = true;
                if (event.type === 'academic'){
                    other_event = event.crn + '-' + event.day + '-' + event.startTime + '-' + event.endTime;
                }
                else{
                    other_event = event.title;
                }
            }
        }else{
            if (newEvent.type !== 'personal' && event.crn === newEvent.crn && session_counter === event.session) {
                conflict = true;
                other_event = event.title;
            }else if (newEvent.crn === 'none' && event.crn === 'none') {
                conflict = true;
                other_event = 'same-personal-event';
            }else if(newEvent.crn === 'none' && event.crn !== 'none') {
                conflict = true;
                other_event = 'no-mimic-course';
            }
        }
    });

    if (count > 1) {
        conflict = true;
        other_event = "no-add";
    }
    return [conflict, other_event];
}