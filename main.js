const menuIcon = document.querySelector('.menu-icon');
const menuItems = document.querySelector('.menu-items');

menuIcon.addEventListener('click', () => {
  menuItems.classList.toggle('active');
});

function myFunction(x) {
    x.classList.toggle("change");
  }