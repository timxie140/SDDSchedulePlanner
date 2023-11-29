/**
 * Class representing the main page.
 * Contains functions to load courses by major, select a major, 
 * remove a selected major, and search functionality.
 */
class mainPage {
    constructor() {
        this.selectedMajor = '';
        this.coursesDiv = document.getElementById('courses');
        this.searchResultsDiv = document.getElementById('search-results');
        this.majorCourses = Courses.getInstance();
        this.attachEventListenersToMajors();
    }

    /**
     * Attach event listeners to each major element.
     */
    attachEventListenersToMajors() {
        const majorElements = document.querySelectorAll('.major');
        majorElements.forEach(element => {
            element.addEventListener('click', this.handleClickOnMajor.bind(this));
        });
    }

    /**
     * Load courses based on the selected major.
     * @param {Event} event - The triggered event.
     */
    loadCoursesBymajor(event) {
        const majorId = event.target.id;
        //Find and highlight the clicked major
        let proceed = this.highLightClickedMajor(event.target);
        if (!proceed) {
            return; // Exit the function early
        }
        // Check if the major exists in our mapping
        if (this.majorCourses.getCourseDataByMajor(majorId)) {
            const coursesInMajor = this.majorCourses.getCourseDataByMajor(majorId);
            const CRN_list = Object.keys(coursesInMajor);
            this.coursesDiv.innerHTML = '<ul>';
            //use for loop, call extract course for each course, and add extracted course to the innerHTML
            for (let CRN of CRN_list) {
                const course = new Course(CRN, coursesInMajor[CRN].daysTimes, coursesInMajor[CRN].sec, coursesInMajor[CRN].id, coursesInMajor[CRN].title, 
                    coursesInMajor[CRN].instructor, 'academic', 'none', coursesInMajor[CRN].daysTimes.length, coursesInMajor[CRN].rem);
                this.coursesDiv.innerHTML += course.extractACourse();
            }
            this.coursesDiv.innerHTML += '</ul>';
        } else {
            this.coursesDiv.innerHTML = '<p class="no-course-notification">No courses available for this major.</p>';
        }
        this.sortList('courses');
    }

    /**
     * Highlight the clicked major element.
     * @param {Element} target - The clicked element.
     * @returns {boolean} - Whether the highlighting was successful.
     */
    highLightClickedMajor(target) {
        if (target.classList.contains('major-selected')) {
            // Clear the courses and deselect the major
            this.removeSelectedMajor();
            this.selectedMajor = '';
            return false;  // Exit the function early(not proceed signal)
        }
        //Add the 'major-selected' class to it
        else {
            this.removeSelectedMajor();
            target.classList.add('major-selected');
            this.selectedMajor = target.id;
            return true;
        }
    }

    /**
     * Handle click events on major elements.
     * @param {Event} event - The triggered event.
     */
    handleClickOnMajor(event) {
        this.loadCoursesBymajor(event);
    }

    /**
     * sort Course List by Alphabetical order
     * @param {String} listId - The list id in string.
     */
    sortList(listId) {
        // Select the ul element
        let ul = document.getElementById(listId);

        // Get the li elements as an array and sort them
        let sortedLis = Array.from(ul.children).sort((a, b) => {
            // Compare the text content of the list items
            return a.textContent.localeCompare(b.textContent);
        });

        // Remove the current li elements from the ul
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }

        // Append the sorted list items to the ul
        sortedLis.forEach(li => ul.appendChild(li));

    }

    /**
     * Remove Currently Selected Major
     */
    removeSelectedMajor() {
        const majorEl = document.getElementById(this.selectedMajor);
        if (majorEl && majorEl.classList.contains('major-selected')){
            majorEl.classList.remove('major-selected');
            this.coursesDiv.innerHTML = '';
        }
    }
}

/**
 * class for create a course object and extract it to a html element
 */
class Course {
    //constructor for course object, store everything a course needed
    constructor (CRN, courseTime, sec, id, title, instructor_or_description, type, color, session, rem, showNotification = true) {
        this.CRN = CRN;
        this.courseTimes = courseTime;
        this.sec = sec;
        this.major = id.substring(0, 4);
        this.id = id;
        this.title = title;
        this.fullTitle = id + '-' + sec + ' ' + title;
        this.instructor_or_description = instructor_or_description;
        this.type = type;
        this.color = color;
        this.session = session;
        this.rem = rem;
        this.showNotification = showNotification;
    }

    /**
     * function to take one course(by it's CRN) out and organize it in html
     * @returns {String} - The String Representing The Well Formated HTML Element.
     */
    extractACourse() {
        //if no instructor, set it to TBA
        if (this.instructor_or_description === '') {
            this.instructor_or_description = 'TBA';
        }
        let course;
        //if multiple time, then just record information, and let multiple time event handler(addMultipleTimeEvent()) to handle it, set corresponding innerHTML
        if (this.courseTimes.length > 1) {
            if (Number.isInteger(this.courseTimes[0][1].start)) {
                this.courseTimes = timeConverter.formatDaysTime(this.courseTimes);
            }
            const timeDayString = this.courseTimes.map(time => `${time[0]} ${time[1].start} - ${time[1].end}`).join(', ');
            course = `<li id="${this.fullTitle}" onclick="addMultipleTimeEvent('${this.major}', '${this.CRN}', 
            '${this.fullTitle}', '${this.instructor_or_description}', 'academic')"><strong>${this.fullTitle}</strong><br>Instructor(s): ${this.instructor_or_description}<br><br>
            <span>Time: ${timeDayString}</span><br><br>Seat Remaining: ${this.rem}</li>`;
        }
        //if no time, then set it to TBA, set corresponding innerHTML
        else if (this.courseTimes.length === 0) {
            course = `<li id="${this.fullTitle}" onclick="addEvent('${this.CRN}', 'none', 'none', 'none', '${this.fullTitle}', '${this.instructor_or_description}', 'academic', 'none', ${0})"><strong>${this.fullTitle}</strong><br>
            Instructor(s): ${this.instructor_or_description}<br><br><span>Time: TBA - TBA</span><br><br>Seat Remaining: ${this.rem}</li>`;
        }
        //if only one time, then record information and let addEvent() to handle it, set corresponding innerHTML
        else{
            if (this.courseTimes[0][0].length === 1) {
                this.courseTimes[0][0] = timeConverter.convertDaysToFull(this.courseTimes[0][0]);
            }
            course = `<li id="${this.fullTitle}" onclick="addEvent('${this.CRN}', '${this.courseTimes[0][0]}', 
            '${timeConverter.formatTime(this.courseTimes[0][1].start)}', '${timeConverter.formatTime(this.courseTimes[0][1].end)}', '${this.fullTitle}', '${this.instructor_or_description}', 'academic', 'none', ${0})"><strong>${this.fullTitle}</strong><br>
            Instructor(s): ${this.instructor_or_description}<br><br><span>Time: ${this.courseTimes[0][0]} ${timeConverter.formatTime(this.courseTimes[0][1].start)} - ${timeConverter.formatTime(this.courseTimes[0][1].end)}</span><br><br>Seat Remaining: ${this.rem}</li>`;
        }
        return course;
    }
}

/**
 * class for page switch, add event listener to main title, icon and your schedule tab
 */
class pageChange extends mainPage {
    constructor() {
        super();
        this.title = document.getElementById('main-title');
        this.title.addEventListener('click', this.handleClickOnMainTitleOrIcon.bind(this));
        this.icon = document.getElementById('main-icon');
        this.icon.addEventListener('click', this.handleClickOnMainTitleOrIcon.bind(this));
        this.yourSchedule = document.getElementById('your-schedule');
        this.yourSchedule.addEventListener('click', this.handleClickOnYourSchedule.bind(this));
        this.searchHandler = new Search(this.majorCourses);
        window.addEventListener('popstate', this.handlePopState.bind(this));
    }

    /**
     * function to handle main title and icon click
     */
    handleClickOnMainTitleOrIcon() {
        this.removeSelectedMajor();
        pageChange.toggleHidden('main-container', 'show');
        pageChange.toggleHidden('search-result-container', 'hide');
        pageChange.toggleHidden('your-schedule-container', 'hide');
        closeAddEventPanel();
        history.pushState({}, '', '/');
    }

    /**
     * function to handle your-schedule tab click
     */
    handleClickOnYourSchedule() {
        closeAddEventPanel();
        pageChange.toggleHidden('main-container', 'hide');
        pageChange.toggleHidden('search-result-container', 'hide');
        pageChange.toggleHidden('your-schedule-container', 'show');
        this.removeSelectedMajor();
        history.pushState({}, '', '/your-schedule');
        sessionStorage.setItem('navigated', 'true');
    }

    /**
     * Static handler for search container hide/show
     */
    static handleSearchContainerShowHide() {
        pageChange.toggleHidden('main-container', 'hide');
        pageChange.toggleHidden('search-result-container', 'show');
        pageChange.toggleHidden('your-schedule-container', 'hide');
        history.pushState({}, '', '/search');
        sessionStorage.setItem('navigated', 'true');
    }

    /**
     * function to handle popstate event
     */
    handlePopState() {
        if (window.location.pathname === '/') {
            this.handleClickOnMainTitleOrIcon();
        } else if (window.location.pathname === '/your-schedule') {
            this.handleClickOnYourSchedule();
        } else if (window.location.pathname === '/search') {
            pageChange.handleSearchContainerShowHide();
        }
    }

    /**
     * function to remove/add hidden to a div
     * @param {String} className - The class name of the div.
     * @param {String} option - The option to show or hide.
     */
    static toggleHidden(className, option) {
        const div = document.getElementsByClassName(className)[0];
        if (option === 'show') {
            div.classList.remove('hidden');
        }else{
            div.classList.add('hidden');
        }
    }
}

const pageChangeHandler = new pageChange();

/**
 * class with static timeConverter functions
 */
class timeConverter {
    /**
     * fucntion to convert "M" to "Monday", "T" to "Tuesday", etc.
     * @param {String} day - The day to convert in string(short version).
     * @returns {String} - The converted day.
     */
    static convertDaysToFull(day) {
        if (day === 'M') {
            return 'Monday';
        }
        else if (day === 'T') {
            return 'Tuesday';
        }
        else if (day === 'W') {
            return 'Wednesday';
        }
        else if (day === 'R') {
            return 'Thursday';
        }
        else if (day === 'F') {
            return 'Friday';
        }else {
            return 'TBA';
        }
    }

    /**
     * Function to convert time to 4 digits format
     * @param {Integer} time - The time in 300, 600, 1600 etc. format.
     * @returns {String} - The converted time in 03:00, 06:00, 16:00 etc. format.
     */
    static formatTime(time) {
        let str = String(time).padStart(4, '0');
        
        // Insert a colon before the last 2 characters
        return str.slice(0, -2) + ':' + str.slice(-2);
    }

    /**
     * 
     * @param {Dictionary} time - The time dictionary with day and time.
     * @returns {Dictionary} - The converted time dictionary with day and time.
     */
    static formatDaysTime(time) {
        for (let day in time) {
            time[day][0] = timeConverter.convertDaysToFull(time[day][0]); 
            time[day][1].start = timeConverter.formatTime(time[day][1].start);
            time[day][1].end = timeConverter.formatTime(time[day][1].end);
        }
        return time;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem('navigated')) {
        // Reset the URL to the main page
        history.replaceState(null, null, '/');
        
        // Clear the flag
        sessionStorage.removeItem('navigated');
    }
});





//Little eastern egg
let clickCount = 0;
let clickTimer = null;
const mainIcon = document.getElementById('main-icon');
const mainTitle = document.getElementById('main-title');
const rickRoll = document.getElementById('rickRoll');

mainIcon.addEventListener('click', () => {
    clickCount += 1;

    // Clear the existing timer and set a new one
    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => {
        clickCount = 0; // Reset click count after 4 seconds of inactivity
    }, 4000); // 4000 milliseconds = 4 seconds

    if (clickCount === 5) {
        // Show the Rick Roll GIF
        rickRoll.classList.remove('hidden');
        rickRoll.style.display = 'block';
        // Hide the GIF after 5 seconds
        setTimeout(() => {
            rickRoll.style.display = 'none';
            rickRoll.classList.add('hidden');
            clickCount = 0; // Reset click count
            clearTimeout(clickTimer); // Clear the timer
        }, 3500); // 5000 milliseconds = 5 seconds
    }
});

mainTitle.addEventListener('click', () => {
    clickCount += 1;

    // Clear the existing timer and set a new one
    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => {
        clickCount = 0; // Reset click count after 4 seconds of inactivity
    }, 4000); // 4000 milliseconds = 4 seconds

    if (clickCount === 5) {
        // Show the Rick Roll GIF
        rickRoll.classList.remove('hidden');
        rickRoll.style.display = 'block';
        // Hide the GIF after 5 seconds
        setTimeout(() => {
            rickRoll.style.display = 'none';
            rickRoll.classList.add('hidden');
            clickCount = 0; // Reset click count
            clearTimeout(clickTimer); // Clear the timer
        }, 3500); // 5000 milliseconds = 5 seconds
    }
});