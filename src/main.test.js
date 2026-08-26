import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'

const intersectionObservers = []
const timeline = {
  from: vi.fn(() => timeline),
}
const mediaQueries = []

beforeAll(async () => {
  vi.useFakeTimers()

  globalThis.IntersectionObserver = class {
    constructor(callback, options) {
      this.callback = callback
      this.options = options
      this.observed = []
      intersectionObservers.push(this)
    }

    observe(element) {
      this.observed.push(element)
    }
  }

  Element.prototype.scrollTo = vi.fn()
  HTMLMediaElement.prototype.play = vi.fn(() => Promise.resolve())
  HTMLMediaElement.prototype.pause = vi.fn()

  globalThis.ScrollTrigger = {}
  globalThis.gsap = {
    registerPlugin: vi.fn(),
    to: vi.fn(),
    from: vi.fn(),
    timeline: vi.fn(() => timeline),
    matchMedia: vi.fn(() => ({
      add: vi.fn((query, callback) => {
        mediaQueries.push(query)
        callback()
      }),
    })),
  }

  document.body.innerHTML = '<div id="app"></div>'
  await import('./main.js')
  window.dispatchEvent(new Event('load'))
  await vi.advanceTimersByTimeAsync(500)
})

afterAll(() => {
  vi.useRealTimers()
})

describe('main page', () => {
  it('renders the main content and initializes integrations', () => {
    expect(document.querySelector('.navbar__logo img')?.getAttribute('alt')).toBe('Spectrum')
    expect(document.querySelectorAll('.project-card')).toHaveLength(4)
    expect(document.querySelectorAll('.pricing-card')).toHaveLength(3)
    expect(document.querySelectorAll('.faq-item-button')).toHaveLength(4)

    expect(intersectionObservers).toHaveLength(1)
    expect(intersectionObservers[0].options).toEqual({ threshold: 0.1 })
    expect(intersectionObservers[0].observed.length).toBeGreaterThan(0)
    expect(gsap.registerPlugin).toHaveBeenCalledWith(ScrollTrigger)
    expect(mediaQueries).toEqual(['(min-width: 769px)', '(max-width: 768px)'])
    expect(gsap.timeline).toHaveBeenCalledTimes(2)
  })

  it('opens and closes the mobile navigation', () => {
    const toggle = document.querySelector('.navbar__toggle')
    const panel = document.querySelector('.mobile-nav')

    toggle.click()

    expect(toggle.getAttribute('aria-expanded')).toBe('true')
    expect(panel.hidden).toBe(false)
    expect(document.body.classList.contains('menu-open')).toBe(true)

    panel.querySelector('a').click()

    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    expect(panel.hidden).toBe(true)
    expect(document.body.classList.contains('menu-open')).toBe(false)
  })

  it('activates team members with pointer and keyboard input', () => {
    const rows = [...document.querySelectorAll('[data-team-row]')]

    rows[0].click()
    expect(rows[0].classList.contains('team__row--active')).toBe(true)
    expect(rows[1].classList.contains('team__row--active')).toBe(false)

    const event = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true })
    rows[1].dispatchEvent(event)

    expect(event.defaultPrevented).toBe(true)
    expect(rows[1].classList.contains('team__row--active')).toBe(true)
    expect(rows[1].querySelector('.team__name').classList.contains('team__name--active')).toBe(true)
  })

  it('moves the testimonial carousel in both directions', () => {
    const cards = [...document.querySelectorAll('[data-card]')]
    const carousel = document.querySelector('[data-carousel]')

    document.querySelector('[data-carousel-next]').click()
    expect(cards[2].classList.contains('testimonial-card--active')).toBe(true)

    document.querySelector('[data-carousel-prev]').click()
    expect(cards[1].classList.contains('testimonial-card--active')).toBe(true)
    expect(carousel.scrollTo).toHaveBeenCalledTimes(2)
  })

  it('reveals intersecting elements', () => {
    const target = intersectionObservers[0].observed[0]
    const hiddenTarget = intersectionObservers[0].observed[1]

    intersectionObservers[0].callback([
      { isIntersecting: true, target },
      { isIntersecting: false, target: hiddenTarget },
    ])

    expect(target.classList.contains('is-visible')).toBe(true)
    expect(hiddenTarget.classList.contains('is-visible')).toBe(false)
  })

  it('expands and collapses FAQ answers', () => {
    const button = document.querySelector('.faq-item-button')
    const answer = button.nextElementSibling

    button.click()

    expect(button.getAttribute('aria-expanded')).toBe('true')
    expect(answer.style.maxHeight).toBe('0px')
    expect(answer.style.opacity).toBe('1')
    expect(answer.style.marginTop).toBe('16px')

    button.click()

    expect(button.getAttribute('aria-expanded')).toBe('false')
    expect(answer.style.maxHeight).toBe('0')
    expect(answer.style.opacity).toBe('0')
    expect(answer.style.marginTop).toBe('0px')
  })

  it('opens and closes UGC videos through every supported control', () => {
    const item = document.querySelector('.ugc-item')
    const popup = document.querySelector('.popUpForVideo')
    const popupVideo = popup.querySelector('video')
    const thumbnail = item.querySelector('video')

    item.click()
    expect(popup.classList.contains('active')).toBe(true)
    expect(popupVideo.src).toContain('04987ebaeecc41f0b95499ca88dbb27f.mp4')
    expect(popupVideo.play).toHaveBeenCalled()

    document.querySelector('.close-popup').click()
    expect(popup.classList.contains('active')).toBe(false)
    expect(popupVideo.pause).toHaveBeenCalled()
    expect(popupVideo.currentTime).toBe(0)

    item.click()
    popup.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(popup.classList.contains('active')).toBe(false)

    item.click()
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    expect(popup.classList.contains('active')).toBe(false)

    thumbnail.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }))
    thumbnail.dispatchEvent(new MouseEvent('mouseout', { bubbles: true }))
    expect(thumbnail.play).toHaveBeenCalled()
    expect(thumbnail.pause).toHaveBeenCalled()
    expect(thumbnail.currentTime).toBe(0)
  })

  it('reports when GSAP is unavailable at load time', async () => {
    const gsapMock = globalThis.gsap
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
    delete globalThis.gsap

    window.dispatchEvent(new Event('load'))
    await vi.advanceTimersByTimeAsync(500)

    expect(consoleError).toHaveBeenCalledWith('GSAP not loaded yet')

    globalThis.gsap = gsapMock
    consoleError.mockRestore()
  })
})
