/**
 * class for storing all courses
 */
class Courses {
  static instance = null;

  constructor() {
    //if instance already exist return the instance
    if (Courses.instance) {
      return Courses.instance;
    }

    this.data = null; // Initially no data
    this.fetchData(); // Call the method to fetch data
  }

  /**
   * fetch the data from the server
   */
  async fetchData() {
    const apiEndpoint = 'https://www.ruik5th.com/API/api.php'; // Replace with your server URL
    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      this.data = data; // Store the fetched data
      this.onDataReady(); // Call a method when data is ready
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  /**
   * method to call when data is ready
   */
  onDataReady() {
    console.log('Data is ready!');
  }

  /**
   * Function to get course by major
   * @param {String} major - major of the course
   * @returns {Dictionary} - corresponding major's course data with CRN as key
   */
  getCourseDataByMajor(major) {
      if (major in this.courseData) {
          return this.courseData[major];
      }else{
          return null;
      }   
  }

  /**
   * Function to get all courses data
   * @returns {Dictionary} - all courses data with major/CRN as key
   */
  getAllCourses() {
      return this.courseData;
  }

  /**
   * Function to check if courses instance already exist
   * @returns {Courses} - instance of the class
   */
  static getInstance() {
    if (!Courses.instance) {
      Courses.instance = new Courses();
    }
    return Courses.instance;
  }
}
