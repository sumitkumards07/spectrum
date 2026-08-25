import './style.css'

import logo from './assets/figma/logo.png'
import heroCharacter from './assets/figma/hero-character.png'
import heroHighlight from './assets/figma/hero-highlight.svg'
import arrowRight from './assets/figma/arrow-right.svg'
import navLine from './assets/figma/nav-line.svg'
import dotsDecor from './assets/figma/dots-decor.svg'
import journeyLines from './assets/figma/journey-lines.svg'
import project1 from './assets/figma/codebattle.png'
import project2 from './assets/figma/ridenow.jpg'
import project3 from './assets/figma/assignflow.png'
import project4 from './assets/figma/aashna.jpg'
import project5 from './assets/figma/foodfinder.jpg'
import featured1 from './assets/figma/featured-1.png'
import featured2 from './assets/figma/featured-2.png'
import featured3 from './assets/figma/featured-3.png'
import featured4 from './assets/figma/featured-4.png'
import featured5 from './assets/figma/featured-5.png'
import featured6 from './assets/figma/featured-6.png'
import stars from './assets/figma/stars.svg'
import avatarCenter from './assets/figma/avatar-center.png'
import team1 from './assets/figma/team-1.png'
import team2 from './assets/figma/team-2.png'
import team3 from './assets/figma/team-3.png'
import team4 from './assets/figma/team-4.png'

const cornerFrame = (text, className = '') =>
  `<span class="corner-frame ${className}"><span class="corner-frame__border"></span><img src="${heroHighlight}" alt="" class="corner-frame__dots" /><span class="corner-frame__text">${text}</span></span>`

const placeholder =
  'Spectrum is an elite software development agency dedicated to engineering digital legacies for visionary founders. We specialize in transforming complex business challenges into scalable, high-performance digital solutions.'

const stats = [
  { value: '150+', label: ['Project', 'Completed'] },
  { value: '98%', label: ['Client', 'Satisfaction'] },
  { value: '5+', label: ['Years of', 'Experience'] },
  { value: '24/7', label: ['Support', 'Available'] },
]

const projects = [
  { image: project1, title: 'CodeBattle', category: 'Web App' },
  { image: project2, title: 'RideNow Booking', category: 'Mobile App' },
  { image: project3, title: 'Assign Flow', category: 'SaaS Dashboard' },
  { image: project4, title: 'Aashna Herbals', category: 'Web Platform' },
  { image: project5, title: 'FoodFinder', category: 'Mobile App' },
]

const featured = [
  { image: featured1, title: 'Web Development', dark: true },
  { image: featured2, title: 'Mobile Apps', dark: true, featured: true },
  { image: featured3, title: 'UI/UX Design', dark: false },
  { image: featured4, title: 'AI Integration', dark: false },
  { image: featured5, title: 'E-Commerce', dark: false },
  { image: featured6, title: 'Cloud & DevOps', dark: false },
]

const pricingPlans = [
  {
    title: 'MVP Launchpad',
    delivery: '4-6 weeks',
    price: '$999+',
    description: 'Ideal for lean teams or startups needing clean, fast design delivery for websites or branding assets.',
    features: ['Complete MVP development', 'Full Stack Development', 'Deployment and launch support', '14 day complementary support', 'PRD-based revisions included', 'Scaling assistance available'],
    popular: false,
    icon: '🚀'
  },
  {
    title: 'Product Sprint+',
    delivery: '6-10 weeks',
    price: '$2,999+',
    description: 'For founders who want a usable, credible product with polished core flows.',
    features: ['End-to-end MVP development', 'Production-ready codebase', 'Polished core user flows', '21 days post-launch support', 'Analytics & monitoring setup', 'Best for demos, users, and investors'],
    popular: true,
    icon: '⚡'
  },
  {
    title: 'Enterprise Solution',
    delivery: '12-16 weeks',
    price: '$5,999+',
    description: 'Built for teams scaling fast and shipping mission-critical products. A tailored partnership.',
    features: ['Dedicated product & engineering team', 'Custom UX, design system & architecture', 'Scalable cloud infrastructure', 'Enterprise-grade security & compliance', 'Priority support & SLA-backed delivery', 'Ongoing optimization & roadmap planning'],
    popular: false,
    icon: '🏢'
  }
]

const faqData = [
  { question: "What is your typical project timeline?", answer: "Our minimum engagement is typically 4-6 weeks for an MVP. Larger enterprise projects can take 12-16 weeks depending on scope and complexity." },
  { question: "Do you offer post-launch support?", answer: "Yes, all our plans include complementary post-launch support ranging from 14 to 30 days. We also offer SLA-backed ongoing maintenance." },
  { question: "How do you handle project management?", answer: "We use agile methodologies with weekly sprints. You will have a dedicated product manager and direct access to the engineering team." },
  { question: "Can you work with our existing codebase?", answer: "Absolutely. We often conduct an initial technical audit and then integrate with or refactor existing codebases to meet modern standards." }
]

const team = [
  { avatar: team1, name: 'Sarah Kim', role: 'UI/UX Designer', active: false },
  { avatar: team2, name: 'David Chen', role: 'Web Developer', active: false },
  { avatar: team3, name: 'Maya Patel', role: 'SEO Marketing', active: true },
  { avatar: team4, name: 'Alex Rivera', role: 'Brand Strategy', active: false },
]

const achievements = [
  { value: '50+', label: 'Awards Won' },
  { value: '200+', label: 'Happy Clients' },
  { value: '15+', label: 'Countries Served' },
  { value: '99%', label: 'Success Rate' },
]

const testimonialAvatars = [
  { src: team2, size: 29 },
  { src: team4, size: 36 },
  { src: team1, size: 42 },
  { src: team3, size: 49 },
  { src: avatarCenter, size: 56, active: true },
  { src: team3, size: 49 },
  { src: team1, size: 42 },
  { src: team4, size: 36 },
  { src: team2, size: 29 },
]

const testimonials = [
  {
    name: 'Daniel Carter',
    time: '1 Days ago',
    text: 'I started following the meal plans here and within a month, my energy levels doubled! The recipes are tasty, easy to cook, and perfect for my busy lifestyle.',
  },
  {
    name: 'Sarah Mitchell',
    time: '3 Days ago',
    text: 'Spectrum transformed our brand identity completely. Their team understood our vision and delivered beyond expectations. Highly recommend their design services.',
  },
  {
    name: 'James Wilson',
    time: '1 Week ago',
    text: 'Working with Spectrum on our web platform was seamless. They delivered a fast, beautiful site that our users love. Professional team from start to finish.',
  },
]

document.querySelector('#app').innerHTML = `
<div class="page">
  <div class="page__bg" aria-hidden="true"></div>

  <header class="navbar container">
    <a href="#" class="navbar__logo">
      <img src="${logo}" alt="Spectrum" width="152" height="64" />
    </a>
    <nav class="navbar__nav" aria-label="Main">
      <a href="#" class="navbar__link navbar__link--active">Home<img src="${navLine}" alt="" class="navbar__link-line" /></a>
      <a href="#services" class="navbar__link">Services</a>
      <a href="#portfolio" class="navbar__link">Portfilio</a>
      <a href="#about" class="navbar__link">About</a>
      <a href="#contact" class="navbar__link">Contact</a>
    </nav>
    <div class="navbar__actions">
      <a href="#contact" class="btn btn--primary navbar__cta">Get in Touch</a>
      <button type="button" class="navbar__toggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
  <div class="mobile-nav" hidden>
    <nav aria-label="Mobile">
      <a href="#">Home</a>
      <a href="#services">Services</a>
      <a href="#portfolio">Portfilio</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>

  <main>
    <section class="hero container">
      <div class="hero__content animate-on-scroll">
        <h1 class="hero__title">
          Turning Ideas Into
          ${cornerFrame('Digital Reality', 'hero__highlight-wrap')}
        </h1>
        <p class="hero__text">${placeholder}</p>
        <div class="hero__actions">
          <a href="#contact" class="btn btn--primary">Start a Project</a>
          <a href="#portfolio" class="btn btn--ghost">
            See Our Work
            <span class="btn__icon"><img src="${arrowRight}" alt="" width="14" height="14" /></span>
          </a>
        </div>
      </div>
      <div class="hero__visual">
        <img src="${heroCharacter}" alt="Celebrating team member" class="hero__character" />
      </div>
    </section>

    <section class="stats container" aria-label="Statistics">
      <img src="${dotsDecor}" alt="" class="stats__decor" />
      <div class="stats__grid">
        ${stats
          .map(
            (s, i) => `
          <div class="stats__item animate-on-scroll" style="transition-delay: ${i * 100}ms">
            <span class="stats__value">${s.value}</span>
            <span class="stats__label">
              <span>${s.label[0]}</span>
              <span>${s.label[1]}</span>
            </span>
          </div>`
          )
          .join('')}
      </div>
      <img src="${dotsDecor}" alt="" class="stats__decor stats__decor--flip" />
    </section>

    <section id="portfolio" class="section projects container">
      <div class="section__header">
        <div class="section__intro animate-on-scroll">
          <h2 class="section__title">
            Our Projects
            <img src="${dotsDecor}" alt="" class="section__dots" />
          </h2>
          <p class="section__desc">${placeholder}</p>
        </div>
        <a href="#" class="btn btn--secondary">Show All</a>
      </div>
      <div class="projects__grid">
        ${projects
          .map(
            (p) => `
          <article class="project-card animate-on-scroll">
            <img src="${p.image}" alt="${p.title}" class="project-card__image" />
            <div class="project-card__overlay"></div>
            <div class="project-card__info">
              <h3>${p.title}</h3>
              <p>${p.category}</p>
            </div>
          </article>`
          )
          .join('')}
      </div>
    </section>

    <section class="section featured">
      <div class="container">
        <div class="section__header">
          <div class="section__intro animate-on-scroll">
            <h2 class="section__title">
              Featured Projects
              <img src="${dotsDecor}" alt="" class="section__dots" />
            </h2>
            <p class="section__desc">${placeholder}</p>
          </div>
          <a href="#" class="btn btn--secondary">Show All</a>
        </div>
        <div class="featured__grid">
          ${featured
            .map(
              (f) => `
            <article class="featured-card animate-on-scroll ${f.featured ? 'featured-card--highlight' : ''} ${f.dark ? 'featured-card--dark' : ''}">
              <img src="${f.image}" alt="${f.title}" class="featured-card__image" />
              <div class="featured-card__body">
                <h3>${f.title}</h3>
                <p>Pizza ipsum dolor meat lovers buffalo.</p>
                <button type="button" class="featured-card__cta" aria-label="View project">
                  <img src="${arrowRight}" alt="" width="16" height="16" />
                </button>
              </div>
            </article>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section id="pricing" class="section pricing container">
      <div class="section__intro section__intro--solo animate-on-scroll">
        <h2 class="section__title">
          Our Pricing & Plans
          <img src="${dotsDecor}" alt="" class="section__dots" />
        </h2>
        <p class="section__desc">Transparent pricing for institutional-grade development.</p>
      </div>
      <div class="pricing__grid">
        ${pricingPlans
          .map(
            (plan, i) => `
          <div class="pricing-card animate-on-scroll ${plan.popular ? 'pricing-card--popular' : ''}" style="transition-delay: ${i * 100}ms">
            ${plan.popular ? '<div class="pricing-card__badge">Most Popular</div>' : ''}
            <div class="pricing-card__icon">${plan.icon}</div>
            <h3 class="pricing-card__title">${plan.title}</h3>
            <p class="pricing-card__desc">${plan.description}</p>
            <div class="pricing-card__meta">
              <span class="meta-label">Delivery</span>
              <span class="delivery-time"><strong>${plan.delivery}</strong></span>
            </div>
            <div class="pricing-card__price">
              <span class="price-val">${plan.price}</span>
            </div>
            <ul class="pricing-features">
              ${plan.features.map(f => `<li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> ${f}</li>`).join('')}
            </ul>
            <a href="#contact" class="btn ${plan.popular ? 'btn--secondary' : 'btn--ghost btn--outline'} btn-full">Get Started</a>
          </div>`
          )
          .join('')}
      </div>
    </section>

    <section class="section achievements container">
      <div class="achievements__header animate-on-scroll">
        <h2 class="section__title">
          Our Achievements
          <img src="${dotsDecor}" alt="" class="section__dots" />
        </h2>
        <p class="section__desc">${placeholder}</p>
      </div>
      <div class="achievements__grid">
        ${achievements
          .map(
            (a, i) => `
          <div class="achievements__item animate-on-scroll" style="transition-delay: ${i * 100}ms">
            <span class="achievements__value">${a.value}</span>
            <span class="achievements__label">${a.label}</span>
          </div>`
          )
          .join('')}
      </div>
    </section>

    <section class="section team">
      <div class="container">
        <h2 class="section__title animate-on-scroll">
          Our Team Members
          <img src="${dotsDecor}" alt="" class="section__dots" />
        </h2>
        <div class="team__list">
          ${team
            .map(
              (m) => `
            <div class="team__row animate-on-scroll ${m.active ? 'team__row--active' : ''}" role="button" tabindex="0" data-team-row>
              <div class="team__member">
                <img src="${m.avatar}" alt="${m.name}" class="team__avatar" />
                <span class="team__name corner-frame ${m.active ? 'team__name--active' : ''}">
                  <span class="corner-frame__border"></span>
                  <img src="${heroHighlight}" alt="" class="corner-frame__dots" />
                  <span class="corner-frame__text">${m.name}</span>
                </span>
              </div>
              <span class="team__role">${m.role}</span>
            </div>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="section testimonials">
      <div class="container">
        <h2 class="section__title animate-on-scroll">
          Experiences That Inspire
          <img src="${dotsDecor}" alt="" class="section__dots" />
        </h2>
        <div class="testimonials__avatars">
          ${testimonialAvatars
            .map(
              (a) => `
            <img
              src="${a.src}"
              alt=""
              class="testimonials__avatar ${a.active ? 'testimonials__avatar--active' : ''}"
              style="width:${a.size}px;height:${a.size}px"
            />`
            )
            .join('')}
        </div>
        <div class="testimonials__carousel" data-carousel>
          ${testimonials
            .map(
              (t, i) => `
            <article class="testimonial-card corner-frame ${i === 1 ? 'testimonial-card--active' : ''}" data-card="${i}">
              <span class="corner-frame__border"></span>
              <img src="${heroHighlight}" alt="" class="corner-frame__dots" />
              <div class="testimonial-card__inner">
                <header class="testimonial-card__header">
                  <h3>${t.name}</h3>
                  <span>${t.time}</span>
                </header>
                <div class="testimonial-card__rating">
                  <img src="${stars}" alt="5 stars" width="89" height="16" />
                  <span>5.0</span>
                </div>
                <p>${t.text}</p>
              </div>
            </article>`
            )
            .join('')}
        </div>
        <div class="testimonials__nav">
          <button type="button" class="btn btn--secondary btn--icon" data-carousel-prev aria-label="Previous">‹</button>
          <button type="button" class="btn btn--primary btn--icon" data-carousel-next aria-label="Next">›</button>
        </div>
      </div>
    </section>

    <section id="contact" class="section cta container">
      <div class="cta__card">
        <div class="cta__content animate-on-scroll">
          <h2 class="cta__title">Let's Build Something ${cornerFrame('Amazing', 'cta__highlight-wrap')}</h2>
          <p class="cta__text">${placeholder}</p>
          <form class="cta__form" onsubmit="return false">
            <input type="email" placeholder="Email" aria-label="Email address" />
            <button type="submit" class="btn btn--primary btn--icon" aria-label="Subscribe">
              <img src="${arrowRight}" alt="" width="14" height="14" />
            </button>
          </form>
        </div>
      </div>
      <img src="${heroCharacter}" alt="" class="cta__character" aria-hidden="true" />
    </section>

    <section id="faq" class="section faq-section container">
      <div class="faq-wrapper">
        <div class="faq-container">
          <div class="faq-left animate-on-scroll">
            <h2 class="section__title">Frequently Asked Questions</h2>
            <p class="section__desc">Everything you need to know about our services and how we work.</p>
          </div>
          <div class="faq-right">
            <div class="faq-items">
              ${faqData.map((faq, i) => `
                <div class="faq-item-wrapper animate-on-scroll" style="transition-delay: ${i * 100}ms">
                  <button class="faq-item-button" aria-expanded="false">
                    <span class="faq-item-text">${faq.question}</span>
                    <span class="faq-icon-container">
                      <svg class="faq-icon-plus" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                      <svg class="faq-icon-minus" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </span>
                  </button>
                  <div class="faq-answer">
                    <p>${faq.answer}</p>
                  </div>
                  <hr class="faq-divider" />
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <div class="footer__logo">
          <span class="footer__logo-icon">S</span>
          <span>Spectrum</span>
        </div>
        <p>${placeholder}</p>
        <div class="footer__contact">
          <a href="mailto:hello@spectrum.com">hello@spectrum.com</a>
          <a href="tel:+15551234567">+1 (555) 123-4567</a>
          <span>5987 Mid Rivers Mall Dr., St. Charles</span>
        </div>
        <div class="footer__social">
          <a href="#" aria-label="Telegram"><svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1.5 1.5 4.5v1l6.2 2.3L14.5 5.5v-1L8 1.5Zm0 4.2L2.8 4.5 8 6.5l5.2-2-5.2 1.2Zm-5.5 2.5 5.5 2 5.5-2v4.8l-5.5 2-5.5-2V8.2Z"/></svg></a>
          <a href="#" aria-label="Twitter"><svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M9.5 7.2 15.2 0h-1.4L8.9 6.2 4.9 0H0l6 8.7L0 16h1.4l5.2-6 4.2 6H16L9.5 7.2Zm-1.8 2.1-.6-.9-4.8-6.9h2.1l3.9 5.6.6.9 5 7.2h-2.1l-4.1-5.9Z"/></svg></a>
          <a href="#" aria-label="Discord"><svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M13.5 3.2A10.5 10.5 0 0 0 10.4 2a7.5 7.5 0 0 0-.3.6c1.2.2 2.3.7 3.2 1.3a8.8 8.8 0 0 0-5.3-2 8.8 8.8 0 0 0-5.3 2c.9-.6 2-1.1 3.2-1.3a7.5 7.5 0 0 0-.3-.6 10.5 10.5 0 0 0-3.1 1.2C.8 6.5.2 9.6.5 12.6a10.6 10.6 0 0 0 3.2 1.6 7.8 7.8 0 0 0 .7-1.1 6.9 6.9 0 0 1-1.1-.5l.3-.2a7.5 7.5 0 0 0 6.4 0l.3.2a6.9 6.9 0 0 1-1.1.5c.2.4.5.8.7 1.1a10.6 10.6 0 0 0 3.2-1.6c.4-3.5-.6-6.5-2.7-9.4ZM5.6 10.5c-.7 0-1.3-.6-1.3-1.4s.6-1.4 1.3-1.4 1.3.6 1.3 1.4-.6 1.4-1.3 1.4Zm4.8 0c-.7 0-1.3-.6-1.3-1.4s.6-1.4 1.3-1.4 1.3.6 1.3 1.4-.6 1.4-1.3 1.4Z"/></svg></a>
          <a href="#" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M15.5 4.2a2 2 0 0 0-1.4-1.4C12.6 2.5 8 2.5 8 2.5s-4.6 0-6.1.3A2 2 0 0 0 .5 4.2 21 21 0 0 0 .2 8a21 21 0 0 0 .3 3.8 2 2 0 0 0 1.4 1.4c1.5.3 6.1.3 6.1.3s4.6 0 6.1-.3a2 2 0 0 0 1.4-1.4A21 21 0 0 0 15.8 8a21 21 0 0 0-.3-3.8ZM6.4 10.3V5.7L10.5 8l-4.1 2.3Z"/></svg></a>
        </div>
      </div>
      <div class="footer__menus">
        <div id="services">
          <h4><span class="corner-frame corner-frame--dark corner-frame--menu"><span class="corner-frame__border"></span><img src="${heroHighlight}" alt="" class="corner-frame__dots" /><span class="corner-frame__text">Services</span></span></h4>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Mobile Apps</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">AI Integration</a></li>
            <li><a href="#">E-Commerce</a></li>
          </ul>
        </div>
        <div>
          <h4><span class="corner-frame corner-frame--dark corner-frame--menu"><span class="corner-frame__border"></span><img src="${heroHighlight}" alt="" class="corner-frame__dots" /><span class="corner-frame__text">Company</span></span></h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Portfolio</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container footer__bottom">
      <div class="footer__legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Disclimer</a>
      </div>
      <p>Copyright © Spectrum All right Reserved 2025</p>
    </div>
  </footer>
</div>
`

initMobileNav()
initTeamRows()
initTestimonialCarousel()
initScrollAnimations()

function initMobileNav() {
  const toggle = document.querySelector('.navbar__toggle')
  const panel = document.querySelector('.mobile-nav')
  if (!toggle || !panel) return

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true'
    toggle.setAttribute('aria-expanded', String(!open))
    panel.hidden = open
    document.body.classList.toggle('menu-open', !open)
  })

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false')
      panel.hidden = true
      document.body.classList.remove('menu-open')
    })
  })
}

function initTeamRows() {
  document.querySelectorAll('[data-team-row]').forEach((row) => {
    const activate = () => {
      document.querySelectorAll('[data-team-row]').forEach((r) => {
        r.classList.remove('team__row--active')
        r.querySelector('.team__name')?.classList.remove('team__name--active')
      })
      row.classList.add('team__row--active')
      row.querySelector('.team__name')?.classList.add('team__name--active')
    }
    row.addEventListener('click', activate)
    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        activate()
      }
    })
  })
}

function initTestimonialCarousel() {
  const carousel = document.querySelector('[data-carousel]')
  const cards = [...document.querySelectorAll('[data-card]')]
  const prev = document.querySelector('[data-carousel-prev]')
  const next = document.querySelector('[data-carousel-next]')
  if (!carousel || !cards.length) return

  let index = cards.findIndex((c) => c.classList.contains('testimonial-card--active'))
  if (index < 0) index = 0

  const scrollToCard = (i) => {
    index = (i + cards.length) % cards.length
    cards.forEach((card, idx) => card.classList.toggle('testimonial-card--active', idx === index))
    carousel.scrollTo({ left: cards[index].offsetLeft - carousel.offsetWidth / 2 + cards[index].offsetWidth / 2, behavior: 'smooth' })
  }

  prev?.addEventListener('click', () => scrollToCard(index - 1))
  next?.addEventListener('click', () => scrollToCard(index + 1))
}

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          // observer.unobserve(entry.target) // uncomment to only animate once
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el)
  })
}

// Handle FAQ toggles
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.faq-item-button')
  if (btn) {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true'
    btn.setAttribute('aria-expanded', !isExpanded)
    const answer = btn.nextElementSibling
    if (!isExpanded) {
      answer.style.maxHeight = answer.scrollHeight + 'px'
      answer.style.opacity = '1'
      answer.style.marginTop = '16px'
    } else {
      answer.style.maxHeight = '0'
      answer.style.opacity = '0'
      answer.style.marginTop = '0'
    }
  }
})
