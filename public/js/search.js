/**
 * Class to perform search and format search result
 * Handle animation for search bar
 */
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
                //compare each course with search query
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
