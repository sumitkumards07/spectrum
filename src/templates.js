import heroHighlight from './assets/figma/hero-highlight.svg'
import dotsDecor from './assets/figma/dots-decor.svg'

export const renderList = (items, render) => items.map(render).join('')

export const staggerDelay = (i) => `style="transition-delay: ${i * 100}ms"`

export const cornerFrameDecor = () =>
  `<span class="corner-frame__border"></span><img src="${heroHighlight}" alt="" class="corner-frame__dots" />`

export const cornerFrame = (text, className = '') =>
  `<span class="corner-frame ${className}">${cornerFrameDecor()}<span class="corner-frame__text">${text}</span></span>`

export const sectionTitle = (text, className = '') =>
  `<h2 class="section__title${className ? ` ${className}` : ''}">
    ${text}
    <img src="${dotsDecor}" alt="" class="section__dots" />
  </h2>`

export const ugcVideoCard = ({ src, poster }, index) =>
  `<div class="ugc-item video-card-${index + 1}">
    <video class="video-thumbnail" playsinline="" preload="metadata" poster="${poster}">
      <source src="${src}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>`

export const marqueeTrack = (items, copies = 3) =>
  renderList(items, (f) => `<img src="${f.image}" alt="${f.title}" class="portfolio-direct-image" />`).repeat(copies)
