class Courses {
  constructor() {
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
    const apiEndpoint = 'https://ruik5th.com/API/api.php';
    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      this.data = data; // Store the fetched data
      this.onDataReady(); // Call a method when data is ready
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  getCourseDataByMajor(major) {
      if (major in this.courseData) {
          return this.courseData[major];
      }else{
          return null;
      }   
  }

  getAllCourses() {
      return this.courseData;
  }

  static getInstance() {
    if (!Courses.instance) {
      Courses.instance = new Courses();
    }
    return Courses.instance;
  }
}