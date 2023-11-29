/**
 * Class for managing notifications in the application.
 * Provides static methods to show various types of notifications.
 */
class notification {

    /**
     * Shows a notification of a specified type.
     * @param {string} type - The ID of the notification element to display.
     */
    static showNotification(type) {
        const notification = document.getElementById(type);
     
        notification.style.display = 'block'; // Show notification
    
        // Hide notification after a specified time
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000); // 3000ms = 3 seconds
    }
    
    /**
     * Shows a notification for adding a course.
     */
    static showCourseNotification() {
        notification.showNotification('add-course-notification');
    }
    
    /**
     * Shows a notification for adding a personal event.
     */
    static showPersonalEventNotification() {
        notification.showNotification('add-personal-event-notification');
    }
    
    /**
     * Shows a notification when the same course is added again.
     */
    static showSameCourseNotification() {
        notification.showNotification('same-course-notification');
    }
    
    /**
     * Shows a notification for a conflict in course scheduling.
     */
    static showConflictCourseNotification() {
        notification.showNotification('conflict-course-notification');
    }
    
    /**
     * Shows a notification when an event cannot be added due to a conflict.
     */
    static showNoAddEventDueToConflictNotification() {
        notification.showNotification('no-add-event-due-to-conflict-event-notification');
    }
    
    /**
     * Shows a notification when a conflict in the schedule is resolved.
     */
    static showConflictResolvedNotification() {
        notification.showNotification('conflict-resolved-notification');
    }
    
    /**
     * Shows a notification when the schedule is cleared.
     */
    static showScheduleClearedNotification() {
        notification.showNotification('schedule-cleared-notification');
    }
    
    /**
     * Shows a notification for multiple conflicts in the schedule.
     */
    static showMultipleConflictNotification() {
        notification.showNotification('multiple-conflict-notification');
    }
    
    /**
     * Shows a notification to encourage taking a break if the event time is unreasonable.
     */
    static showTakeRestNotification() {
        notification.showNotification('take-rest-notification');
    }
    
    /**
     * Shows a notification when an event cannot be added due to no available time slot.
     */
    static showNoAddEventDueToNoTimeSlotNotification() {
        notification.showNotification('no-add-event-due-to-no-time-slot-notification');
    }

    /**
     * Shows a notification when the same personal event is added again.
     */
    static showSamePersonalEventNotification() {
        notification.showNotification('same-personal-event-notification');
    }

    /**
     * Shows a notification when an attempt is made to mimic a course with a personal event.
     */
    static showNoMimicCourseNotification() {
        notification.showNotification('no-mimic-course-notification');
    }
}
