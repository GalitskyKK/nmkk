const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', function () {
   const menuItems = document.querySelector('.menu-items');
   if (menuItems.style.display === 'block') {
      menuItems.style.display = 'none';
   } else {
      menuItems.style.display = 'block';
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