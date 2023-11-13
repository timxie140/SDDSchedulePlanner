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
}