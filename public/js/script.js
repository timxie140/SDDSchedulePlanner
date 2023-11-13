/**
 * Class representing the main page.
 * Contains functions to load courses by major, select a major, 
 * remove a selected major and attach event listeners to major elements.
 */
class mainPage {
    constructor() {
        this.selectedMajor = '';
        this.coursesDiv = document.getElementById('courses');
        this.majorCourses = new Courses();
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
            return false;  // Exit the function early
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
     * Remove Currently Selected Major
     */
    removeSelectedMajor() {
        const majorEl = document.getElementById(this.selectedMajor);
        if (majorEl && majorEl.classList.contains('major-selected')){
            majorEl.classList.remove('major-selected');
            this.coursesDiv.innerHTML = '';
        }
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
}

/**
 * class for create a course object and extract it to a html element
 */
class Course {
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
        if (this.instructor_or_description === '') {
            this.instructor_or_description = 'TBA';
        }
        let course;
        if (this.courseTimes.length > 1) {
            if (Number.isInteger(this.courseTimes[0][1].start)) {
                this.courseTimes = timeConverter.formatDaysTime(this.courseTimes);
            }
            const timeDayString = this.courseTimes.map(time => `${time[0]} ${time[1].start} - ${time[1].end}`).join(', ');
            course = `<li id="${this.fullTitle}" onclick="addMultipleTimeEvent('${this.major}', '${this.CRN}', 
            '${this.fullTitle}', '${this.instructor_or_description}', 'academic')"><strong>${this.fullTitle}</strong><br>Instructor(s): ${this.instructor_or_description}<br><br>
            <span>Time: ${timeDayString}</span><br><br>Seat Remaining: ${this.rem}</li>`;
        }
        else if (this.courseTimes.length === 0) {
            course = `<li id="${this.fullTitle}" onclick="addEvent('${this.CRN}', 'none', 'none', 'none', '${this.fullTitle}', '${this.instructor_or_description}', 'academic', 'none', ${0})"><strong>${this.fullTitle}</strong><br>
            Instructor(s): ${this.instructor_or_description}<br><br><span>Time: TBA - TBA</span><br><br>Seat Remaining: ${this.rem}</li>`;
        }
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

class Search {
    constructor(fullListCourses) {
        //Course list for search
        this.CourseListForSearch = fullListCourses;
        //Variables for event listeners
        this.searchInput = document.getElementById('search-input');
        this.searchButton = document.getElementById('search-button');
        this.searchResults = document.getElementById('search-results');
        this.searchInput.addEventListener('focus', this.focusSearchInput.bind(this));
        this.searchInput.addEventListener('blur', this.blurSearchInput.bind(this));
        this.searchInput.addEventListener('keyup', this.pressEnterToSearch.bind(this));
        this.searchButton.addEventListener('click', this.handleClickOnSearch.bind(this));
    }

    /**
     * Handler for click on search button
     */
    handleClickOnSearch() {
        if (this.searchInput.value === '') {
            this.searchInput.focus();
            return;
        }
    
        let results = this.performSearch(this.searchInput.value);
    
        if (results.length === 0) {
            results = ['<li>No results found.</li>'];
        }
        results = results.sort();
        // Populate search-result-container with results
        this.searchResults.innerHTML = '<ul>' + results.join('') + '</ul>';
    
        // Hide main-container and display search-result-container
        pageChange.handleSearchContainerShowHide();
    }

    /**
     * function to perform search and return results
     * @param {string} query
     * @return {array} results
     */
    performSearch(query) {
        let results = [];
        //A full course list(key as CRN)
        let AllCoursesList = this.CourseListForSearch.getAllCourses();
        //Full key list for major
        let major_list = Object.keys(AllCoursesList);
        for (let i = 0; i < major_list.length; i++) {
            let major = major_list[i];
            //Major course container
            let CoursesPerMajor = this.CourseListForSearch.getCourseDataByMajor(major);
            //Full key list for courses in major
            let course_list = Object.keys(CoursesPerMajor);
            for (let j = 0; j < course_list.length; j++) {
                let course = parseInt(course_list[j], 10);
                let fullTitle = AllCoursesList[major][course].id + '-' + AllCoursesList[major][course].sec + ' ' + AllCoursesList[major][course].title;
                if (fullTitle.toLowerCase().includes(query.toLowerCase()) || course_list[j].includes(query.toLowerCase())) {

                    const singleCourse = new Course(course, CoursesPerMajor[course].daysTimes, CoursesPerMajor[course].sec, CoursesPerMajor[course].id, CoursesPerMajor[course].title, 
                        CoursesPerMajor[course].instructor, 'academic', 'none', CoursesPerMajor[course].daysTimes.length, CoursesPerMajor[course].rem);
                    
                    results.push(singleCourse.extractACourse());
                }
            }
        }
        document.getElementById("search-input").value = "";
        return results;
    }

    /**
     * Handler for focus on search input
     */
    focusSearchInput() {
        if (this.searchInput.value !== '') return; // Do nothing if there's already text in the input
        this.searchInput.style.width = '22vh';
        this.searchInput.style.border = '0.15vh solid #0a0a0a';
        this.searchInput.style.borderRadius = '0.4vh';
    }

    /**
     * Handler for blur on search input
     */
    blurSearchInput() {
        if (this.searchInput.value === '') {  
            this.searchInput.style.width = '0';
            this.searchInput.style.border = 'none';
        }
    }

    /**
     * Handler for press enter to search
     */
    pressEnterToSearch(event) {
        // Check if the key pressed was "Enter"
        if (event.key === 'Enter') {
            // Trigger the click event on the search button
            this.searchButton.click();
        }
    }
}
