const changeColorBtn = document.getElementById('change-color');
const showMessageBtn = document.getElementById('show-message');
const disableButtonsBtn = document.getElementById('disable-buttons');


changeColorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomColor();
});
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

showMessageBtn.addEventListener('click', () => {
    const popup = document.createElement('div');
    popup.id = 'message-popup';
    popup.textContent = "Happy Coding Guys!";
    document.body.appendChild(popup);
    setTimeout(() => {
      document.body.removeChild(popup);
    }, 2000); // Remove the popup after 2 seconds
  });

disableButtonsBtn.addEventListener('click', () => {
  changeColorBtn.disabled = true;
  showMessageBtn.disabled = true;
  disableButtonsBtn.disabled = true;
});



