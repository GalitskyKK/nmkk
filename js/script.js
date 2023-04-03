// const menuToggle = document.querySelector('.menu-toggle');
// const menuItems = document.querySelector('.menu-items');

// menuToggle.addEventListener('click', () => {
//    menuItems.classList.toggle('show');
// });

const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', function () {
   const menuItems = document.querySelector('.menu-items');
   if (menuItems.style.display === 'block') {
      menuItems.style.display = 'none';
   } else {
      menuItems.style.display = 'block';
   }
});