/**
 * Class to make an HTML element draggable.
 */
class DraggableElement {
  constructor(elmnt) {
    this.elmnt = elmnt;
    this.pos1 = 0;
    this.pos2 = 0;
    this.pos3 = 0;
    this.pos4 = 0;

    this.initDraggable();
  }

  /**
   * Initializes the draggable functionality.
   */
  initDraggable() {
    if (document.getElementById(this.elmnt.id + "Header")) {
      // If a header element is present, use it as the drag handle
      document.getElementById(this.elmnt.id + "Header").onmousedown = this.dragMouseDown.bind(this);
    } else {
      // Otherwise, the whole element can be used as the drag handle
      this.elmnt.onmousedown = this.dragMouseDown.bind(this);
    }
  }

  /**
   * Handles the mouse down event and prepares for dragging.
   * @param {MouseEvent} e - The mouse event.
   */
  dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // Get the initial mouse cursor position
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
    document.onmouseup = this.closeDragElement.bind(this);
    // Call function whenever the cursor moves
    document.onmousemove = this.elementDrag.bind(this);
  }

  /**
   * Handles the dragging of the element.
   * @param {MouseEvent} e - The mouse event.
   */
  elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // Calculate the new cursor position
    this.pos1 = this.pos3 - e.clientX;
    this.pos2 = this.pos4 - e.clientY;
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
    // Set the element's new position
    this.elmnt.style.top = (this.elmnt.offsetTop - this.pos2) + "px";
    this.elmnt.style.left = (this.elmnt.offsetLeft - this.pos1) + "px";
  }

  /**
   * Stops the dragging process.
   */
  closeDragElement() {
    // Stop moving when mouse button is released
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Instantiate DraggableElement for 'addEventPanel'
new DraggableElement(document.getElementById("addEventPanel"));
