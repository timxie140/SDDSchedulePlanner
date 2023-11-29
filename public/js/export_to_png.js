//Below is function for export to PNG
//remember to include both this file and html2canvas.js in the html file

function exportToPNG() {
    pageChange.toggleHidden('main-container', 'hide');
    pageChange.toggleHidden('search-result-container', 'hide');
    pageChange.toggleHidden('your-schedule-container', 'show');
    history.pushState({}, '', '/your-schedule');
    // Get the element you want to capture
    var scheduleElement = document.getElementById('whole-calender');

    // Use html2canvas to capture the element
    html2canvas(scheduleElement).then(function(canvas) {
        // Create an 'a' element to trigger download
        var a = document.createElement('a');

        // Set the download name for the image
        a.download = 'schedule.png';

        // Set the download link for the image data
        a.href = canvas.toDataURL();

        // Trigger a click event on the 'a' element
        // This will start the download process
        a.click();
    });
}