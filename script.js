window.addEventListener('DOMContentLoaded', (event) => {
    const image = document.getElementById('image');
    const popup1 = document.getElementById('popup1');
    const popup2 = document.getElementById('popup2');
    const popup3 = document.getElementById('popup3');
    const popup4 = document.getElementById('popup4');
  
    const points = [
      { x: 375, y: 285, popup: popup1 },
      { x: 980, y: 240, popup: popup1 },
    ];
  
    points.forEach((point, index) => {
      const highlight = document.createElement('div');
      highlight.classList.add('highlight');
      highlight.style.left = point.x + 'px';
      highlight.style.top = point.y + 'px';
  
      highlight.addEventListener('click', () => {
        closeAllPopups();
        point.popup.style.display = 'block';
      });
  
      image.parentNode.appendChild(highlight);
    });
  
    const popupLinks = document.getElementsByClassName('popup-link');
    for (let i = 0; i < popupLinks.length; i++) {
      popupLinks[i].addEventListener('click', (event) => {
        event.preventDefault();
        const targetPopupId = event.target.getAttribute('data-target');
        const targetPopup = document.getElementById(targetPopupId);
        closeAllPopups();
        targetPopup.style.display = 'block';
      });
    }
  
    const closeButtons = document.getElementsByClassName('close-button');
    for (let i = 0; i < closeButtons.length; i++) {
      closeButtons[i].addEventListener('click', () => {
        closeAllPopups();
      });
    }
  
    function closeAllPopups() {
      const popups = document.getElementsByClassName('popup');
      for (let i = 0; i < popups.length; i++) {
        popups[i].style.display = 'none';
      }
    }
  });
  
