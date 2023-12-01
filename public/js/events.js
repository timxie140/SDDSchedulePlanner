/**
 * EventManager Class
 * Manages events in a weekly schedule. Allows adding, checking, and transferring of events.
 */
class EventManager {
    constructor() {
        // Initialize a dictionary to store events for each day of the week
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

    /**
     * Adds a pre-created event to the relevant day's list.
     * @param {Object} newEvent - The event to be added.
     */
    addAlreadyCreatedEvent(newEvent) {
        // Push the new event into the array of the specified day
        this.events[newEvent.day].push(newEvent);
    }

    /**
     * Checks if a personal event already exists in the schedule.
     * @param {Object} newEvent - The event to check for.
     * @returns {[boolean, string]} - Returns a boolean indicating conflict and a string detailing the type of conflict.
     */
    checkPersonalEventExist(newEvent) {
        let conflict = false;
        let other_event = "none";
        // Iterate over each day to check for an existing event with the same title
        for (let day in this.events) {
            this.events[day].forEach(event => {
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

    /**
     * Retrieves the number of events for a specific day.
     * @param {string} day - The day to query.
     * @returns {number} - The number of events on that day.
     */
    getDaylength(day) {
        // Return the length of the event array for the specified day
        return this.events[day].length;
    }

    /**
     * Retrieves all events for a specific day.
     * @param {string} day - The day to query.
     * @returns {Object[]} - An array of events for that day.
     */
    getDay(day) {
        // Return the array of events for the specified day
        return this.events[day];
    }

    /**
     * Transfers all events data to another EventManager instance.
     * @param {EventManager} targetInstance - The instance to transfer data to.
     */
    transferDataTo(targetInstance) {
        // Iterate over each day to transfer events
        for (let day in this.events) {
            targetInstance.events[day] = [...this.events[day]];
        }
    }

    /**
     * Clears all events from the schedule.
     */
    clearEvents() {
        // Set the event array for each day to an empty array
        for (let day in this.events) {
            this.events[day] = [];
        }
    }

    /**
     * Ensures only one instance is created.
     * @returns {EventManager} - The instance of the EventManager.
     */
    static get instance() {
        // Create a new instance if one doesn't exist, 
        // otherwise return the existing one
        if (!this._instance) {
            this._instance = new EventManager();
        }
        return this._instance;
    }
}

// Global instance of EventManager
const eventManager = EventManager.instance;
// Flag for determining if events need to be reloaded
let reload_event = false;

// Instance of a Courses class storing all courses
const allCourses = Courses.getInstance();

// Counter for managing sessions
let session_counter = 0;

/**
 * Checks for existing conflicts in the schedule.
 * @returns {Array} - Array indicating if there is a conflict and the CRN of the conflicting events.
 */
function checkForConflictAlreadyExist() {
    //get all event list
    allEventsContainer = document.getElementById('all-events-for-schedule');
    allEvents = allEventsContainer.querySelectorAll('div');
    result = [false, 'none'];
    //for loop to search for conflict event, if found, push its crn in result array
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
 * Checks if the event time is out of the available time range.
 * @param {String} startTime - The start time of the event.
 * @param {String} endTime - The end time of the event.
 * @returns {Boolean} - Returns true if the event time is out of the available time range.
 */
function checkForOutOfTimeRange(startTime, endTime) {
    //if the event time is out of available time range, then show notification and abort adding
    if (startTime <= '06:00' || endTime >= '24:00') {
        return true;
    }
    return false;
}

/**
 * Checks if an event with the same CRN already exists and if it has a color assigned.
 * @param {String} CRN - The CRN of the event.
 * @returns {String} - Returns the color if found, or 'none'.
 */
function checkSameEventColorChange(CRN) {
    //get all event list
    allEventsContainer = document.getElementById('all-events-for-schedule');
    allEvents = allEventsContainer.querySelectorAll('div');
    //for loop to search for same event with same CRN, if found, then return its color
    //because they are same event just different time slots
    for(let i = 0; i < allEvents.length; i++) {
        if (allEvents[i].getAttribute('data-crn') === CRN && allEvents[i].getAttribute('data-color') !== 'none') {
            return allEvents[i].getAttribute('data-color');
        }
    }
    return 'none';
}

/**
 * Handles adding of multiple time events, calls addEvent function, then shows notification.
 * @param {String} major - Major associated with the course.
 * @param {Int} CRN - Course Registration Number.
 * @param {String} title - Title of the course.
 * @param {String} instructor_or_description - Instructor or description of the course.
 * @param {String} type - Type of the event.
 */
function addMultipleTimeEvent(major, CRN, title, instructor_or_description, type) {
    //get event time and format it
    let rawEventTime = allCourses.getCourseDataByMajor(major)[CRN].daysTimes;
    let eventTime;
    if (Number.isInteger(rawEventTime[0][1].start)) {
        eventTime = timeConverter.formatDaysTime(rawEventTime);
    }else{
        eventTime = rawEventTime;
    }
    //use for loop to add every time slots to the schedule by each calling addEvent function
    for (let time in eventTime) {
        let day = eventTime[time][0];
        let startTime = eventTime[time][1].start;
        let endTime = eventTime[time][1].end;
        let color = checkSameEventColorChange(CRN);
        let session = eventTime.length;
        
        addEvent(CRN, day, startTime, endTime, title, instructor_or_description, type, color, session, false);
    }
    //show notification
    notification.showCourseNotification();
}

/**
 * Main add event function. Checks for conflict, out of range time, and if the same course is already added.
 * Shows corresponding notification and sets up configuration for the event.
 * @param {int} CRN - Course Registration Number.
 * @param {String} day - The day of the event.
 * @param {String} startTime - The start time of the event.
 * @param {String} endTime - The end time of the event.
 * @param {String} title - The title of the event.
 * @param {String} instructor_or_description - Instructor or description of the event.
 * @param {String} type - The type of the event (academic/personal).
 * @param {String} color - The color for the event.
 * @param {int} session - Session count for the event.
 * @param {boolean} showNotification - Whether to show notification after adding the event.
 */
function addEvent(CRN, day, startTime, endTime, title, instructor_or_description, type, color, session, showNotification = true) {
    //Check if event have available time slot, if so abort adding and show notification
    if (day === 'none' || startTime === 'none' || endTime === 'none') {
        notification.showNoAddEventDueToNoTimeSlotNotification();
        return;
    }

    //if the event time is out of available time range, then show notification and abort adding
    if (checkForOutOfTimeRange(startTime, endTime)) {
        notification.showTakeRestNotification();
        return;
    }

    //check for already existing unresolved conflict
    conflict_result = checkForConflictAlreadyExist();
    if (conflict_result[0]) {
        //if it's a personal event, then abort adding and show notification(since personal event won't have multiple time slots)
        if (type !== 'academic') {
            notification.showNoAddEventDueToConflictNotification();
            return;
        } 
        //if it's a academic course, then it's possible that it has multiple time slots, 
        //and one/some of them are conflict, while other slots are not, and haven't finish adding
        else{
            let firstCourseInConflict = conflict_result[1];
            let secondCourseInConflict = 'none';
            for (let i = 1; i < conflict_result.length; i++) {
                //get first two event in conflict, if there appear a third one, 
                //then that's not allowed, but if there's only two, then it's possible that the adding isn't finished
                if (firstCourseInConflict !== conflict_result[i] && secondCourseInConflict === 'none') {
                    secondCourseInConflict = conflict_result[i];
                }
                //Third one appear, so abort adding and show notification
                else if (CRN !== firstCourseInConflict && secondCourseInConflict !== 'none' && CRN !== secondCourseInConflict) {
                    notification.showNoAddEventDueToConflictNotification();
                    return;
                }
            }
            
        }
    }
    
    // Check if there is a conflict
    let newEvent = {crn:CRN, day:day, startTime: startTime, endTime: endTime, title: title, instructor_or_description: instructor_or_description, type: type, session: session};
    let [conflict, other_event] = checkForConflict(newEvent);
    //get the element of the conflicting event
    const conflictEl = document.getElementById(other_event);
    //if so, according to different type of conflict, show different notification
    if (!conflict) {
        eventManager.addAlreadyCreatedEvent(newEvent);
    }else if (conflict) {
        //if same course is already in schedule, then abort adding and show notification
        if ((other_event === title || other_event === CRN + '-' + day + '-' + startTime + '-' + endTime)){
            notification.showSameCourseNotification();
            return;
        }

        //if the event conflict with multiple event, then abort adding and show notification
        else if (other_event === "no-add") {
            notification.showMultipleConflictNotification();
            deleteMultipleTimeEvent(CRN);
            return;
        }

        //if the personal event is already there, then abort adding and show notification
        else if(other_event === 'same-personal-event') {
            notification.showSamePersonalEventNotification();
            return;
        }

        //if the personal event is trying to use the same name as a course, then abort adding and show notification
        else if(other_event === 'no-mimic-course') {
            notification.showNoMimicCourseNotification();
            return;
        }

        //if normal conflict, show conflict notification and add the event to event manager
        else{
            eventManager.addAlreadyCreatedEvent(newEvent);
            notification.showConflictCourseNotification();
        }
    }

    //check if a multiple time slot event finish adding itself, if so, then reset session counter
    if (session_counter === session) {
        session_counter = 0;
    }
    //create a new event element
    const eventEl = document.createElement('div');

    //Get the index of the day
    const dayIndex = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].indexOf(day);

    //parse the time to hour and minutes
    startHour = parseInt(startTime.split(':')[0], 10);
    startMinutes = parseInt(startTime.split(':')[1], 10) / 60;
    endHour = parseInt(endTime.split(':')[0], 10);
    endMinutes = parseInt(endTime.split(':')[1], 10) / 60;

    //calculate the height and top percentage for event
    height_percentage = ((endHour + endMinutes) - (startHour + startMinutes)) / 19 * 100;
    top_percentage = ((startHour + startMinutes)-6) / 19 * 100;

    //set styling for event seperate by conflict or not
    if (conflict) {
        //if conflict, then set styling for conflict event
        conflictEl.style.backgroundColor = '';
        conflictEl.style.border = '';
        eventEl.classList.add('conflict-event');
        conflictEl.classList.add('conflict-event');
        //for both event/course, only assign half width and it will form a conflict event showing in schedule
        eventEl.style.left = (dayIndex * (100 / 7)) + '%';
        eventEl.style.width = ((100 / 7) / 2) + '%';
        conflict_dayIndex = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].indexOf(conflictEl.getAttribute('data-day'));
        conflictEl.style.left = (conflict_dayIndex * (100 / 7)) + ((100 / 7) / 2) + '%';
        conflictEl.style.width = ((100 / 7) / 2) + '%';
        if (color === 'none') {
            eventEl.setAttribute('data-color', getEventColor());
        }
    }
    //normal formatting and styling
    else {
        eventEl.style.left = (dayIndex * (100 / 7)) + '%';
        eventEl.style.width = (100 / 7) + '%';
        eventEl.style.border = '1px solid black';
        //if no color is assigned, obtain a new color
        if (color === 'none') {
            let new_color = getEventColor();
            eventEl.style.backgroundColor = new_color;
            eventEl.setAttribute('data-color', new_color);
        }
        //if a color is assigned, then use the color
        else{
            eventEl.style.backgroundColor = color;
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
    
    //According to different type of event, set different innerHTML and type specific attributes
    //show different notification
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
    
    //put event inside the schedule, then update localstorage
    document.querySelector('.events').appendChild(eventEl);
    storeAndLoad.storeEventsToLocalStorage();
    //increment session counter
    session_counter++;
}

/**
 * Restores the styling of events that were previously marked as conflicting.
 */
function restoreEventStyling() {
    //first get all event list
    allEventsContainer = document.getElementById('all-events-for-schedule');
    allEvents = allEventsContainer.querySelectorAll('div');
    //for each event inside the list, check if it is a conflict event, if so, then restore its styling
    allEvents.forEach(event => {
        if (event.classList.contains('conflict-event')) {
            let day = event.getAttribute('data-day');
            event.classList.remove('conflict-event');
            let dayIndex = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].indexOf(day);
            event.style.left = (dayIndex * (100 / 7)) + '%';
            event.style.width = (100 / 7) + '%';
            event.setAttribute('data-color', checkSameEventColorChange(event.getAttribute('data-crn')));
            event.style.backgroundColor = event.getAttribute('data-color');
            event.style.border = '1px solid black';
            notification.showConflictResolvedNotification();
        }
    });
}

/**
 * Deletes events that are associated with a specific CRN and have multiple time slots.
 * @param {string} CRN - The Course Registration Number of the events to delete.
 */
function deleteMultipleTimeEvent(CRN) {
    //Remove this event with multiple time slots using its same CRN
    //first get all event list
    allEventsContainer = document.getElementById('all-events-for-schedule');
    allEvents = allEventsContainer.querySelectorAll('div');
    //compare the CRN and delete the event
    for(let i = 0; i < allEvents.length; i++) {
        if (allEvents[i].getAttribute('data-crn') === CRN) {
            allEvents[i].remove();
        }
    }
    //update local storage about the schedule and reload event manager
    storeAndLoad.storeEventsToLocalStorage();
    storeAndLoad.reloadEventManager();
    setReloadEventFalse();
}

/**
 * Reloads the events list for the scheduler.
 * @param {Object} events - Events object to reload in the scheduler.
 */
function reloadEvents(events) {
    //if nothing is left in schedule, then just clear old schedule
    if (events.crn === 'none' && events.day === 'none' && events.startTime === 'none' && events.endTime === 'none' && events.title === 'none' && events.instructor_or_description === 'none' && events.type === 'none') {
        eventManager.clearEvents();
        return;
    }
    //if there's events left in schedule, then clear the schedule only for first entry
    if (!reload_event) {
        eventManager.clearEvents();
        reload_event = true;
    }
    //Afterwards, just add the received event to schedule
    eventManager.addAlreadyCreatedEvent(events);
}

/**
 * Sets the global flag for reloading events to false.
 */
function setReloadEventFalse() {
    reload_event = false;
}

/**
 * Opens the panel for adding a new event.
 */
function openAddEventPanel() {
    pageChange.toggleHidden('add-event-panel', 'show')
}

/**
 * Closes the panel for adding a new event and resets its form.
 */
function closeAddEventPanel() {
    resetAddEventForm();
    pageChange.toggleHidden('add-event-panel', 'hide')
}

/**
 * Clears the form fields in the add event panel.
 */
function resetAddEventForm() {
    // Reset event title
    document.getElementById('input-event-title').value = '';

    // Reset day dropdown
    document.getElementById('select-day').value = 'none';

    // Reset start and end time
    document.getElementById('input-event-start-time').value = '';
    document.getElementById('input-event-end-time').value = '';

    // Reset event description
    document.getElementById('input-event-description').value = '';
}

/**
 * Adds a personal event to the schedule.
 */
function addPersonalEvent() {
    const title = document.getElementById('input-event-title').value;
    const day = document.getElementById('select-day').value;
    const startTime = document.getElementById('input-event-start-time').value;
    const endTime = document.getElementById('input-event-end-time').value;
    const description = document.getElementById('input-event-description').value;
    
    // Call your addEvent function
    addEvent('none', day, startTime, endTime, title, description, 'personal', 'none', 1);

    // Close the panel after adding the event and reset values
    document.getElementById('add-event-button').disabled = true;
    closeAddEventPanel();
}


// Adding event listeners to the add event panel input fields
document.getElementById('input-event-title').addEventListener('input', checkPersonalEventValidity);
document.getElementById('select-day').addEventListener('select', checkPersonalEventValidity);
document.getElementById('input-event-start-time').addEventListener('input', checkPersonalEventValidity);
document.getElementById('input-event-end-time').addEventListener('input', checkPersonalEventValidity);
document.getElementById('input-event-description').addEventListener('input', checkPersonalEventValidity);

/**
 * Checks the validity of inputs for a personal event.
 */
function checkPersonalEventValidity() {
    const title = document.getElementById('input-event-title').value;
    const day = document.getElementById('select-day').value;
    const startTime = document.getElementById('input-event-start-time').value;
    const endTime = document.getElementById('input-event-end-time').value;
    const description = document.getElementById('input-event-description').value;

    // Check if all fields are filled
    if (title && day && startTime && endTime && description) {
        // Check if the start time is before the end time
        if (startTime < endTime) {
            // All checks passed
            document.getElementById('add-event-button').disabled = false;
        } else {
            // Start time is after end time
            document.getElementById('add-event-button').disabled = true;
        }
    } else {
        // Not all fields are filled
        document.getElementById('add-event-button').disabled = true;
    }
}

/**
 * Checks for conflicts in the schedule when adding a new event.
 * @param {Object} event - The new event to check for conflicts.
 * @returns {Array} - An array indicating if there is a conflict and the identifier of the conflicting event.
 */
function checkForConflict(event) {
    //if the given day is empty, then no conflict check will be needed
    if (event.type !== 'personal' && eventManager.getDaylength(event.day) === 0) {
        return [false, "none"];
    }
    //initialize variables to form a newEvent for checking
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
        //check for same personal event(same title)
        let results = eventManager.checkPersonalEventExist(newEvent);
        if (results[0]) {
            conflict = true;
            other_event = results[1];
            return [conflict, other_event];
        }
    }

    eachDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let counter = 0;
    //for loop to calculate if a event is added
    for (let i = 0; i < eachDay.length; i++) {
        for (let j = 0; j < eventManager.getDaylength(eachDay[i]); j++) {
            //if the event is added, then check for conflict
            if (eventManager.getDay(eachDay[i])[j].crn !== 'none' && eventManager.getDay(eachDay[i])[j].title === title) {
                counter += 1;
            }
        }
    }

    eventManager.getDay(day).forEach(event => {
        if (event.title !== newEvent.title) {
            if (event.startTime < newEvent.endTime && newEvent.startTime < event.endTime) {
                //check for part of time conflict
                conflict = true;
                //according to event type and return different identifier(title or combination of crn, day, startTime, endTime)
                if (event.type === 'academic'){
                    other_event = event.crn + '-' + event.day + '-' + event.startTime + '-' + event.endTime;
                }
                else{
                    other_event = event.title;
                }
                count++;
            }
            //check for same time conflict
            else if (event.startTime === newEvent.startTime && event.endTime === newEvent.endTime) {
                conflict = true;
                //according to event type and return different identifier(title or combination of crn, day, startTime, endTime)
                if (event.type === 'academic'){
                    other_event = event.crn + '-' + event.day + '-' + event.startTime + '-' + event.endTime;
                }
                else{
                    other_event = event.title;
                }
            }
        }else{
            //check for same course/event is added
            if (newEvent.type !== 'personal' && event.crn === newEvent.crn && ((session_counter === event.session) || (counter === event.session))) {
                conflict = true;
                other_event = event.title;
            }else if (newEvent.crn === 'none' && event.crn === 'none') {
                conflict = true;
                other_event = 'same-personal-event';
            }
            //prohibit mimicing existing course in schedule
            else if(newEvent.crn === 'none' && event.crn !== 'none') {
                conflict = true;
                other_event = 'no-mimic-course';
            }
        }
    });

    //if there are more than one conflict, then return multiple conflict, and no-add message
    if (count > 1) {
        conflict = true;
        other_event = "no-add";
    }
    return [conflict, other_event];
}

// This function shuffles the color array, to make random coloring.
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//Below is for assigning different coloring for differnt event type
const eventColors = [
    '#AED6F1', // Light blue
    '#FADBD8', // Light red
    '#D2B4DE', // Light purple
    '#A2D9CE', // Light green
    '#FDEBD0', // Light orange
    '#F6DDCC', // Light brown
    '#FCF3CF', // Light yellow
    '#D5F5E3', // Light mint green
    '#D6EAF8', // Light sky blue
    '#FAE5D3', // Light peach
    '#E8DAEF', // Light lavender
    '#FEF9E7', // Light beige
    '#D1F2EB', // Light teal
    '#D0ECE7', // Light aqua
    '#F5EEF8', // Light lilac
    '#F9E79F', // Light gold
    '#D7DBDD', // Light gray
    '#D5DBDB', // Light silver
    '#EBDEF0', // Light mauve
    '#F4ECF7', // Light rose
    '#EAF2F8', // Pale blue
    '#E6B0AA', // Pale red
    '#ABEBC6', // Pale green
    '#F5CBA7', // Pale orange
    '#CCD1D1', // Pale gray
    '#D4EFDF', // Pale mint
    '#F7DC6F', // Pale yellow
    '#D2B4DE', // Pale purple
    '#A3E4D7', // Pale aqua
    '#FAD7A0', // Pale amber
    '#F6CD61', // Light mustard
    '#D98880', // Soft pink
    '#85C1E9', // Soft sky blue
    '#F5B7B1', // Soft coral
    '#C39BD3', // Soft lavender
    '#7FB3D5', // Soft azure
    '#BB8FCE', // Soft amethyst
    '#76D7C4', // Soft turquoise
    '#F1948A', // Soft salmon
    '#E74C3C', // Soft tomato
    '#F0E68C', // Khaki
    '#E59866', // Clay
    '#48C9B0', // Medium turquoise
    '#F39C12', // Pumpkin
    '#D35400', // Cinnamon
    '#28B463', // Fern green
    '#3498DB', // Steel blue
    '#E57373', // Light rose
    '#81C784', // Soft leaf green
    '#BA4A00'  // Rust
];

shuffleArray(eventColors);

/**
 * Get a color for an event.
 */
function getEventColor() {
    let colorCounter = storeAndLoad.loadColorCounter();

    colorCounter = colorCounter + 1; // Cycle through the colors
    if (colorCounter >= eventColors.length) {
        colorCounter = 0;
    }
    storeAndLoad.storeColorCounter(colorCounter);

    const color = eventColors[colorCounter];
    return color;
}

/**
 * Clears the entire schedule of events.
 */
function clearSchedule(){
    // Remove all events from the DOM
    const eventsContainer = document.querySelector('.events');
    while (eventsContainer.firstChild) {
        eventsContainer.removeChild(eventsContainer.firstChild);
    }
    eventManager.clearEvents();
    // Update local storage with the empty schedule
    storeAndLoad.storeEventsToLocalStorage();
    notification.showScheduleClearedNotification();
}