/**
 * Class for storing and loading event data to and from local storage.
 * Handles operations related to persisting events across sessions.
 */
class storeAndLoad {

    /**
     * Stores the current event data into local storage.
     * Serializes the event data from the DOM into a JSON string.
     */
    static storeEventsToLocalStorage() {
        const events = document.querySelectorAll('.events > div');
        const eventDataArray = [];

        events.forEach(eventEl => {
            eventDataArray.push({
                day: eventEl.getAttribute('data-day'),
                startTime: eventEl.getAttribute('data-start-time'),
                endTime: eventEl.getAttribute('data-end-time'),
                title: eventEl.getAttribute('data-title'),
                instructor_or_description: eventEl.getAttribute('data-instructor_or_description'),
                type: eventEl.getAttribute('data-type'),
                color: eventEl.getAttribute('data-color'),
                crn : eventEl.getAttribute('data-crn'),
                session : eventEl.getAttribute('data-session')
            });
        });
        localStorage.setItem('userEvents', JSON.stringify(eventDataArray));
    }

    /**
     * Loads events from local storage and adds them to the scheduler.
     * Deserializes the event data from a JSON string and recreates events.
     */
    static loadEventsFromLocalStorage() {
        const storedEventData = JSON.parse(localStorage.getItem('userEvents') || '[]');

        storedEventData.forEach(eventData => {
            addEvent(eventData.crn, eventData.day, eventData.startTime, eventData.endTime, eventData.title, eventData.instructor_or_description, eventData.type, eventData.color, eventData.session, false);
        });
    }

    /**
     * Stores the current color selection counter into local storage.
     * @param {number} colorCounter - The current color counter value.
     */
    static storeColorCounter(colorCounter) {
        localStorage.setItem('colorCounter', colorCounter.toString());  // Convert number to string before storing
    }

    /**
     * Loads the color counter value from local storage.
     * @returns {number} - The color counter value.
     */
    static loadColorCounter() {
        let colorCounter = parseInt(localStorage.getItem('colorCounter')) || 0;  // Convert string to integer
        return colorCounter;
    }

    /**
     * Reloads the event manager with events from local storage.
     * Clears and then repopulates the event manager with stored events.
     */
    static reloadEventManager() {
        const storedEventData = JSON.parse(localStorage.getItem('userEvents') || '[]');
        //if no event remaining then just send clear schedule request
        if (storedEventData.length === 0) {
            reloadEvents({crn: 'none', day: 'none', startTime: 'none', endTime: 'none', title: 'none', instructor_or_description: 'none', type: 'none'});
        }
        storedEventData.forEach(eventData => {
            let event = {crn: eventData.crn, day: eventData.day, startTime: eventData.startTime, endTime: eventData.endTime, title: eventData.title, instructor_or_description: eventData.instructor_or_description, type: eventData.type, session: eventData.session};
            reloadEvents(event);
        });
    }
}
// Load events from local storage on page load
storeAndLoad.loadEventsFromLocalStorage();
