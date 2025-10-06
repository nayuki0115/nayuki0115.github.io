import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  ...DefaultTheme,

  // 先僅保留你的圖片點擊放大；不要載入 mermaid
  setup() {
    if (typeof window === 'undefined') return
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement | null
      const zoomedImg = document.querySelector<HTMLImageElement>('.VPDoc img.zoomed')

      if (target && target.tagName === 'IMG' && target.closest('.VPDoc')) {
        const img = target as HTMLImageElement
        if (img.classList.contains('zoomed')) {
          img.classList.remove('zoomed')
        } else {
          if (zoomedImg && zoomedImg !== img) zoomedImg.classList.remove('zoomed')
          img.classList.add('zoomed')
        }
      } else if (zoomedImg) {
        zoomedImg.classList.remove('zoomed')
      }
    })
  }
}
