/**
 * Class to manage the custom context menu for events.
 */
class ContextMenuManager {
    constructor() {
        this.observers = [];
        document.addEventListener('contextmenu', this.handleContextMenu.bind(this));
        document.addEventListener('click', this.handleClickOutsideMenu.bind(this));
    }

    // Subscribe an observer
    subscribe(observerFunction) {
        this.observers.push(observerFunction);
    }

    // Unsubscribe an observer
    unsubscribe(observerFunction) {
        this.observers = this.observers.filter(observer => observer !== observerFunction);
    }

    // Notify all observers about the event deletion
    notifyObservers(data) {
        this.observers.forEach(observerFunction => observerFunction(data));
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
        // Notify observers (the actual deletion logic is handled by observers)
        this.notifyObservers(target);
        this.removeExistingMenu();
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

    /**
     * Ensures only one instance is created.
     * @returns {ContextMenuManager} - The instance of the ContextMenuManager.
     */
    static get instance() {
        // Create a new instance if one doesn't exist, 
        // otherwise return the existing one
        if (!this._instance) {
            this._instance = new ContextMenuManager();
        }
        return this._instance;
    }
}

// Instantiate ContextMenuManager
const contextMenuManager = ContextMenuManager.instance;

/**
 *  Function to handle the event deletion, this will call the observers
 * @param {Element} target - The target event element to delete.
 */
function onEventDeleted(target) {
    target.remove();
    deleteMultipleTimeEvent(target.getAttribute('data-crn'));
}

/**
 * Function to handle the UI restoration after the event deletion,
 * It has the logic to find which event to restore then call the observers
 * @param {Element} target 
 */
function onEventDeletedUIRestore(target) {
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
}

function onEventDeletedUpdateStorage() {
    storeAndLoad.storeEventsToLocalStorage();
    storeAndLoad.reloadEventManager();
    setReloadEventFalse();
}

// Subscribe the observer to the context menu manager
contextMenuManager.subscribe(onEventDeleted);
contextMenuManager.subscribe(onEventDeletedUIRestore);
contextMenuManager.subscribe(onEventDeletedUpdateStorage);
