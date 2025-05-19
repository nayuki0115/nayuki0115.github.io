import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  ...DefaultTheme,
  setup() {
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (target.tagName === 'IMG' && target.closest('.VPDoc')) {
        target.classList.toggle('zoomed');
      }
    });
  }
}