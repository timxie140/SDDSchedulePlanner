/**
 * Class to manage the custom context menu for events.
 */
class ContextMenuManager {
    constructor() {
        // Listen for the right-click event to show the custom context menu
        document.addEventListener('contextmenu', this.handleContextMenu.bind(this));
        // Listen for the left-click event to remove the context menu
        document.addEventListener('click', this.handleClickOutsideMenu.bind(this));
    }

    /**
     * Handles the right-click event to show the custom context menu.
     * @param {MouseEvent} e - The mouse event.
     */
    handleContextMenu(e) {
        const target = e.target;

        // Remove any existing custom context menu
        this.removeExistingMenu();

        if (target.classList.contains('event')) {
            e.preventDefault();

            // Create and display the custom context menu
            this.createContextMenu(e.pageX, e.pageY, () => {
                this.handleDeleteEvent(target);
            });
        }
    }

    /**
     * Removes any existing custom context menu.
     */
    removeExistingMenu() {
        const existingMenu = document.querySelector('.custom-context-menu');
        if (existingMenu) {
            existingMenu.remove();
        }
    }

    /**
     * Creates and appends the custom context menu to the body.
     * @param {number} x - The x-coordinate for the menu.
     * @param {number} y - The y-coordinate for the menu.
     * @param {Function} deleteCallback - The callback function to execute when the delete button is clicked.
     */
    createContextMenu(x, y, deleteCallback) {
        const contextMenuDiv = document.createElement('div');
        contextMenuDiv.classList.add('custom-context-menu');
        contextMenuDiv.innerHTML = '<button id="delete-event-button">Delete</button>';
        contextMenuDiv.style.position = 'fixed';
        contextMenuDiv.style.top = y + 'px';
        contextMenuDiv.style.left = x + 'px';

        setTimeout(() => {
            document.body.appendChild(contextMenuDiv);
            contextMenuDiv.querySelector('button').addEventListener('click', deleteCallback);
        }, 10);
    }

    /**
     * Handles the delete event logic.
     * @param {Element} target - The target event element to delete.
     */
    handleDeleteEvent(target) {
        if(target.classList.contains('conflict-event')){
            restoreEventStyling();   
        }else{
            const allEventsContainer = document.getElementById('all-events-for-schedule');
            const allEvents = allEventsContainer.querySelectorAll('div');

            for (let i = 0; i < allEvents.length; i++) {
                if (allEvents[i].getAttribute('data-crn') === target.getAttribute('data-crn') && allEvents[i].classList.contains('conflict-event')) {
                    restoreEventStyling();
                    break;
                }
            }
        }
        deleteMultipleTimeEvent(target.getAttribute('data-crn'));
        target.remove();
        this.removeExistingMenu();
        storeAndLoad.storeEventsToLocalStorage();
        storeAndLoad.reloadEventManager();
        setReloadEventFalse();
    }

    /**
     * Handles the left-click event to remove the context menu if clicked outside.
     * @param {MouseEvent} e - The mouse event.
     */
    handleClickOutsideMenu(e) {
        const contextMenu = document.querySelector('.custom-context-menu');

        if (contextMenu && !contextMenu.contains(e.target)) {
            contextMenu.remove();
        }
    }
}

// Instantiate ContextMenuManager
new ContextMenuManager();
