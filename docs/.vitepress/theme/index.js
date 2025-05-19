import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  ...DefaultTheme,
  setup() {
    document.addEventListener('click', (e) => {
      const target = e.target;
      const zoomedImg = document.querySelector('.VPDoc img.zoomed') ;

      if (target.tagName === 'IMG' && target.closest('.VPDoc')) {
        if (target.classList.contains('zoomed')) {
          target.classList.remove('zoomed'); 
        } else {
          if (zoomedImg && zoomedImg !== target) {
            zoomedImg.classList.remove('zoomed');
          }
          target.classList.add('zoomed');
        }
      } else if (zoomedImg) {
        zoomedImg.classList.remove('zoomed');
      }
    });
  }
}