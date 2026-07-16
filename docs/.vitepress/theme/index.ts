import DefaultTheme from 'vitepress/theme'
import { inBrowser, useRoute } from 'vitepress'
import { nextTick, onMounted, watch } from 'vue'
import './custom.css'

async function renderMermaidDiagrams() {
  await nextTick()

  const diagrams = document.querySelectorAll<HTMLElement>('.mermaid:not([data-processed])')
  if (!diagrams.length) return

  const { default: mermaid } = await import('mermaid')

  mermaid.initialize({
    startOnLoad: false,
    theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default',
  })

  await mermaid.run({ nodes: diagrams })
}

export default {
  ...DefaultTheme,

  setup() {
    if (!inBrowser) return

    const route = useRoute()

    onMounted(renderMermaidDiagrams)
    watch(() => route.path, renderMermaidDiagrams, { flush: 'post' })

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
