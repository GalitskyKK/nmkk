const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', function () {
   const menuItems = document.querySelector('.menu-items');
      if (menuItems.classList.contains('menu-items_hide') && !menuItems.classList.contains('menu-items_hiding')) {
         menuItems.classList.remove('menu-items_hide');
         menuItems.classList.add('menu-items_hiding')
         window.setTimeout(() => {
            menuItems.classList.remove('menu-items_hiding');
         }, 150);
   }
   if (!menuItems.classList.contains('menu-items_hide') && !menuItems.classList.contains('menu-items_hiding')) {
      menuItems.classList.remove('menu-items_hide');
      menuItems.classList.add('menu-items_hiding')
      window.setTimeout(() => {
         menuItems.classList.add('menu-items_hide')
         menuItems.classList.remove('menu-items_hiding');
      }, 150);
   }

},
);

document.addEventListener('mouseup', function (e) {
   const toggle = document.getElementById('menu');
   var container = document.getElementById('menuToggle');

   if (!container.contains(e.target)) {
      toggle.classList.remove('menu-items_hide');
      toggle.classList.add('menu-items_hiding')
      window.setTimeout(() => {
         toggle.classList.add('menu-items_hide')
         toggle.classList.remove('menu-items_hiding');
      }, 150);
   }
});

const btnUp = {
   el: document.querySelector('.button-up'),
   show() {
      if (this.el.classList.contains('button-up_hide') && !this.el.classList.contains('button-up_hiding')) {
         this.el.classList.remove('button-up_hide');
         this.el.classList.add('button-up_hiding');
         window.setTimeout(() => {
            this.el.classList.remove('button-up_hiding');
         }, 300);
      }
   },
   hide() {
      if (!this.el.classList.contains('button-up_hide') && !this.el.classList.contains('button-up_hiding')) {
         this.el.classList.add('button-up_hiding');
         window.setTimeout(() => {
            this.el.classList.add('button-up_hide');
            this.el.classList.remove('button-up_hiding');
         }, 300);
      }
   },
   addEventListener() {
      // при прокрутке окна (window)
      window.addEventListener('scroll', () => {
         const scrollY = window.scrollY || document.documentElement.scrollTop;
         if (this.scrolling && scrollY > 0) {
            return;
         }
         this.scrolling = false;
         // если пользователь прокрутил страницу более чем на 200px
         if (scrollY > 400) {
            // сделаем кнопку .btn-up видимой
            this.show();
         } else {
            // иначе скроем кнопку .btn-up
            this.hide();
         }
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.button-up').onclick = () => {
         this.scrolling = true;
         this.hide();
         // переместиться в верхнюю часть страницы
         window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
         });
      }
   }
}

btnUp.addEventListener();