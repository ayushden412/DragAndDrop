document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const container2 = document.querySelectorAll('.container')[1];
    const resetButton = document.getElementById('resetButton');
  
    let draggedItem = null;
  
    // Add event listeners to enable drag and drop
    items.forEach(item => {
      item.addEventListener('dragstart', dragStart);
      item.addEventListener('dragend', dragEnd);
    });
  
    container2.addEventListener('dragover', dragOver);
    container2.addEventListener('dragenter', dragEnter);
    container2.addEventListener('dragleave', dragLeave);
    container2.addEventListener('drop', drop);
  
    resetButton.addEventListener('click', reset);
  
    // Drag and drop functions
    function dragStart() {
      draggedItem = this;
      this.classList.add('dragging');
    }
  
    function dragEnd() {
      this.classList.remove('dragging');
      draggedItem = null;
    }
  
    function dragOver(e) {
      e.preventDefault();
    }
  
    function dragEnter(e) {
      e.preventDefault();
      this.classList.add('hovered');
    }
  
    function dragLeave() {
      this.classList.remove('hovered');
    }
  
    function drop() {
      this.classList.remove('hovered');
      this.appendChild(draggedItem);
      // Display success message or update UI
    }
  
    function reset() {
      container2.innerHTML = '';
      document.querySelectorAll('.container')[0].innerHTML = `
        <h2>Container 1</h2>
        <div class="item" draggable="true">Item 1</div>
        <div class="item" draggable="true">Item 2</div>
        <div class="item" draggable="true">Item 3</div>
      `;
      // Reset any other necessary variables or UI elements
    }
  });
  