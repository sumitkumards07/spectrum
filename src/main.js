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
]

const featured = [
  { image: 'https://cdn.shopify.com/s/files/1/0722/3194/4424/files/003_28_March_Cukoo_single_image.jpg', title: 'Cukoo Apparels', dark: true },
  { image: 'https://cdn.shopify.com/s/files/1/0722/3194/4424/files/108-maryada-tee-carousel-3-dec-1.jpg', title: 'Maryada Tees', dark: true, featured: true },
  { image: 'https://cdn.shopify.com/s/files/1/0722/3194/4424/files/haldiram-taste-of-home-cities-carousel-25-jan-1.jpg', title: 'Haldiram Campaigns', dark: false },
  { image: 'https://cdn.shopify.com/s/files/1/0722/3194/4424/files/case-factory-carousel-1200px-6-dec-2.jpg', title: 'Case Factory', dark: false },
  { image: 'https://cdn.shopify.com/s/files/1/0722/3194/4424/files/rangraze-banarasi-saree-with-offer-carousel-14-aug.jpg', title: 'Rangraze Sarees', dark: false },
  { image: 'https://cdn.shopify.com/s/files/1/0722/3194/4424/files/zaadram-Unisex-Eyewear-carousel-30-nov-3.jpg', title: 'Zaadram Eyewear', dark: false },
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
  { avatar: team1, name: 'Harshvardan', role: 'Social Media Management', active: false },
  { avatar: team2, name: 'Sumit Kumar', role: 'Software Development', active: true },
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

const app = document.querySelector('#app')
if (!app) {
  throw new Error('Spectrum: mount point "#app" not found in the document')
}

app.innerHTML = `
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

    <!-- UGC Section -->
    <div class="ugc-main-wrapper">
      <a href="/" class="view-ugc-btn">See More</a>
      <div class="ugc-wrapper">
        <div class="bg-content">
          <h2>SEE OUR</h2>
          <h2>BEST UGC</h2>
          <h2>CONTENT</h2>
        </div>
        <div class="ugc-list-wrap">
          <div class="ugc-item video-card-1">
            <video class="video-thumbnail" playsinline="" preload="metadata" poster="https://cdn.shopify.com/s/files/1/0722/3194/4424/files/video-1.webp">
              <source src="/04987ebaeecc41f0b95499ca88dbb27f.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="ugc-item video-card-2">
            <video class="video-thumbnail" playsinline="" preload="metadata" poster="https://cdn.shopify.com/s/files/1/0722/3194/4424/files/video-2.webp">
              <source src="/3189195aa7f94f6abb1eded2a175fe5b.mp4" type="video/mp4">
            </video>
          </div>
          <div class="ugc-item video-card-3">
            <video class="video-thumbnail" playsinline="" preload="metadata" poster="https://cdn.shopify.com/s/files/1/0722/3194/4424/files/video-3.webp">
              <source src="/e60d777ba5874f67a00e13aa18cec359.mp4" type="video/mp4">
            </video>
          </div>
          <div class="ugc-item video-card-4">
            <video class="video-thumbnail" playsinline="" preload="metadata" poster="https://cdn.shopify.com/s/files/1/0722/3194/4424/files/video-4.webp">
              <source src="/4d99e36ce5a84d8cb8ee5af4560dd757.mp4" type="video/mp4">
            </video>
          </div>
          <div class="ugc-item video-card-5">
            <video class="video-thumbnail" playsinline="" preload="metadata" poster="https://cdn.shopify.com/s/files/1/0722/3194/4424/files/video-5.webp">
              <source src="/506bf5a507234db0b741b33cfe96607f.mp4" type="video/mp4">
            </video>
          </div>
          <div class="ugc-item video-card-6">
            <video class="video-thumbnail" playsinline="" preload="metadata" poster="https://cdn.shopify.com/s/files/1/0722/3194/4424/files/video-6.webp">
              <source src="/6ca274d21baa4d10ada403454ad284b8.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
    </div>
    <div class="popUpForVideo">
      <div class="close-popup">×</div>
      <video controls="" autoplay="" loop="">
        <source src="" type="video/mp4">
      </video>
    </div>

    <section class="section graphic-portfolio">
      <div class="container">
        <div class="section__header">
          <div class="section__intro animate-on-scroll">
            <h2 class="section__title">
              Graphic Portfolio
              <img src="${dotsDecor}" alt="" class="section__dots" />
            </h2>
            <p class="section__desc">Check out some of our best graphic design and branding work.</p>
          </div>
        </div>
      </div>
      <div class="scrolling-portfolio-wrapper">
        <div class="scrolling-line scrolling-line-left">
          <div class="scrolling-track">
            ${featured.map(f => `<img src="${f.image}" alt="${f.title}" class="portfolio-direct-image" />`).join('')}
            ${featured.map(f => `<img src="${f.image}" alt="${f.title}" class="portfolio-direct-image" />`).join('')}
            ${featured.map(f => `<img src="${f.image}" alt="${f.title}" class="portfolio-direct-image" />`).join('')}
          </div>
        </div>
        <div class="scrolling-line scrolling-line-right" style="margin-top: 24px;">
          <div class="scrolling-track scrolling-track--reverse">
            ${[...featured].reverse().map(f => `<img src="${f.image}" alt="${f.title}" class="portfolio-direct-image" />`).join('')}
            ${[...featured].reverse().map(f => `<img src="${f.image}" alt="${f.title}" class="portfolio-direct-image" />`).join('')}
            ${[...featured].reverse().map(f => `<img src="${f.image}" alt="${f.title}" class="portfolio-direct-image" />`).join('')}
          </div>
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
          <form class="cta__form" novalidate>
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

  <footer class="site-footer-v2">
    <div class="footer-v2-huge-text">
      <h1>Spectrum</h1>
    </div>
    <div class="footer-v2-panel">
      <div class="footer-v2-glass"></div>
      <div class="footer-v2-content container">
        <div class="footer-v2-left">
          <div class="footer-v2-logo">
            <img src="${logo}" alt="Spectrum" style="width: 140px; margin-bottom: 16px; filter: brightness(0) invert(1);" />
            <h2>Ship Tastefully Crafted<br />Digital Experiences</h2>
          </div>
          <div class="footer-v2-social">
            <p style="font-weight: 300; font-size: 13px; color: rgba(255,255,255,0.8); margin-bottom: 8px;">Follow Us:</p>
            <svg width="180" height="24" viewBox="0 0 312 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.673 20.703L18.427 28.375H26.885L17.39 15.714L25.29 6.625H22.088L15.905 13.737L10.573 6.625H2.115L11.189 18.727L2.803 28.375H6.005L12.673 20.703ZM19.635 25.958L6.948 9.042H9.364L22.052 25.958H19.635Z" fill="#FFFFFF" />
              <path d="M68.75 5.75C69.413 5.75 70.049 6.013 70.518 6.482C70.987 6.951 71.25 7.587 71.25 8.25V25.75C71.25 26.413 70.987 27.049 70.518 27.518C70.049 27.987 69.413 28.25 68.75 28.25H51.25C50.587 28.25 49.951 27.987 49.482 27.518C49.013 27.049 48.75 26.413 48.75 25.75V8.25C48.75 7.587 49.013 6.951 49.482 6.482C49.951 6.013 50.587 5.75 51.25 5.75H68.75ZM68.125 25.125V18.5C68.125 17.419 67.696 16.383 66.931 15.618C66.167 14.854 65.131 14.425 64.05 14.425C62.987 14.425 61.75 15.075 61.15 16.05V14.662H57.663V25.125H61.15V18.962C61.15 18 61.925 17.212 62.888 17.212C63.352 17.212 63.797 17.397 64.125 17.725C64.453 18.053 64.638 18.498 64.638 18.962V25.125H68.125ZM53.6 12.7C54.157 12.7 54.691 12.479 55.085 12.085C55.479 11.691 55.7 11.157 55.7 10.6C55.7 9.438 54.763 8.488 53.6 8.488C53.04 8.488 52.502 8.71 52.106 9.106C51.71 9.502 51.487 10.04 51.487 10.6C51.487 11.762 52.438 12.7 53.6 12.7ZM55.337 25.125V14.662H51.875V25.125H55.337Z" fill="#FFFFFF" />
              <path d="M124.167 17C124.167 9.18 117.82 2.833 110 2.833C102.18 2.833 95.833 9.18 95.833 17C95.833 23.857 100.707 29.566 107.167 30.883V21.25H104.333V17H107.167V13.458C107.167 10.724 109.391 8.5 112.125 8.5H115.667V12.75H112.833C112.054 12.75 111.417 13.387 111.417 14.167V17H115.667V21.25H111.417V31.096C118.571 30.387 124.167 24.352 124.167 17Z" fill="#FFFFFF" />
              <path d="M167.458 12.922C165.619 6.078 159.292 6.506 159.292 6.506C159.292 6.506 150.542 5.923 150.542 17C150.542 28.078 159.292 27.495 159.292 27.495C159.292 27.495 164.493 27.841 166.875 22.924C167.653 20.757 167.458 16.422 159.875 16.422C159.875 16.422 156.375 16.422 156.375 19.339C156.375 20.478 157.542 21.672 159.292 21.672C161.042 21.672 162.991 20.474 163.375 18.172C164.542 11.172 158.125 10.589 156.375 13.506" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p style="font-weight: 300; font-size: 13px; color: rgba(255,255,255,0.8); margin-top: 12px;">© 2026 Spectrum, All rights reserved</p>
          </div>
        </div>
        <div class="footer-v2-right">
          <div class="footer-v2-col">
            <h3>Services</h3>
            <a href="#">Features</a>
            <a href="#">Solution</a>
            <a href="#">Customers</a>
            <a href="#">Pricing</a>
            <a href="#">Help</a>
            <a href="#">Terms</a>
          </div>
          <div class="footer-v2-col">
            <h3>Company</h3>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blogs</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
          </div>
          <div class="footer-v2-col">
            <h3>Location</h3>
            <a href="#" style="pointer-events: none;">Jaipur</a>
            <a href="#" style="pointer-events: none;">Rajasthan, India</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>
`

// Surfaces a failure instead of letting it disappear: logs it and emits a
// `spectrum:error` event so a monitoring hook can pick it up.
function reportError(context, error) {
  const err = error instanceof Error ? error : new Error(String(error))
  console.error(`[spectrum] ${context}:`, err)
  window.dispatchEvent(new CustomEvent('spectrum:error', { detail: { context, error: err } }))
}

// Runs an initializer so one broken feature cannot stop the others, while the
// failure itself is still reported.
function runInit(name, init) {
  try {
    init()
  } catch (error) {
    reportError(`${name} failed to initialise`, error)
  }
}

function requireElement(selector, context, root = document) {
  const el = root.querySelector(selector)
  if (!el) throw new Error(`${context}: required element "${selector}" is missing`)
  return el
}

runInit('initGlobalErrorReporting', initGlobalErrorReporting)
runInit('initMobileNav', initMobileNav)
runInit('initTeamRows', initTeamRows)
runInit('initTestimonialCarousel', initTestimonialCarousel)
runInit('initScrollAnimations', initScrollAnimations)
runInit('initFaq', initFaq)
runInit('initContactForm', initContactForm)
runInit('initVideoPopup', initVideoPopup)

function initMobileNav() {
  const toggle = requireElement('.navbar__toggle', 'Mobile nav')
  const panel = requireElement('.mobile-nav', 'Mobile nav')

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
  const rows = document.querySelectorAll('[data-team-row]')
  if (!rows.length) throw new Error('Team rows: no "[data-team-row]" elements rendered')

  rows.forEach((row) => {
    const activate = () => {
      rows.forEach((r) => {
        r.classList.remove('team__row--active')
        requireElement('.team__name', 'Team row', r).classList.remove('team__name--active')
      })
      row.classList.add('team__row--active')
      requireElement('.team__name', 'Team row', row).classList.add('team__name--active')
    }
    row.addEventListener('click', () => runInit('team row activation', activate))
    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        runInit('team row activation', activate)
      }
    })
  })
}

function initTestimonialCarousel() {
  const carousel = requireElement('[data-carousel]', 'Testimonial carousel')
  const cards = [...document.querySelectorAll('[data-card]')]
  if (!cards.length) throw new Error('Testimonial carousel: no "[data-card]" elements rendered')
  const prev = requireElement('[data-carousel-prev]', 'Testimonial carousel')
  const next = requireElement('[data-carousel-next]', 'Testimonial carousel')

  let index = cards.findIndex((c) => c.classList.contains('testimonial-card--active'))
  if (index < 0) index = 0

  const scrollToCard = (i) => {
    index = (i + cards.length) % cards.length
    cards.forEach((card, idx) => card.classList.toggle('testimonial-card--active', idx === index))
    carousel.scrollTo({ left: cards[index].offsetLeft - carousel.offsetWidth / 2 + cards[index].offsetWidth / 2, behavior: 'smooth' })
  }

  prev.addEventListener('click', () => scrollToCard(index - 1))
  next.addEventListener('click', () => scrollToCard(index + 1))
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
  const animated = document.querySelectorAll('.animate-on-scroll')
  if (!animated.length) throw new Error('Scroll animations: no ".animate-on-scroll" elements rendered')
  animated.forEach((el) => {
    observer.observe(el)
  })
}

function initFaq() {
  const buttons = document.querySelectorAll('.faq-item-button')
  if (!buttons.length) throw new Error('FAQ: no ".faq-item-button" elements rendered')

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      try {
        const answer = requireElement('.faq-answer', 'FAQ', btn.parentElement)
        const isExpanded = btn.getAttribute('aria-expanded') === 'true'
        btn.setAttribute('aria-expanded', String(!isExpanded))
        answer.style.maxHeight = isExpanded ? '0' : `${answer.scrollHeight}px`
        answer.style.opacity = isExpanded ? '0' : '1'
        answer.style.marginTop = isExpanded ? '0' : '16px'
      } catch (error) {
        reportError('FAQ toggle failed', error)
      }
    })
  })
}

function initContactForm() {
  const form = requireElement('.cta__form', 'Contact form')
  const input = requireElement('input[type="email"]', 'Contact form', form)
  const status = document.createElement('p')
  status.className = 'cta__form-status'
  status.setAttribute('role', 'status')
  status.setAttribute('aria-live', 'polite')
  form.insertAdjacentElement('afterend', status)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = input.value.trim()
    if (!input.checkValidity() || !email) {
      status.textContent = input.validationMessage || 'Please enter a valid email address.'
      status.dataset.state = 'error'
      return
    }
    // No subscription endpoint is wired up yet; tell the visitor instead of
    // pretending the submission succeeded.
    status.textContent = 'Submissions are not connected yet — please reach out through the contact links below.'
    status.dataset.state = 'pending'
    console.warn(`[spectrum] contact form submitted for "${email}" but no subscription endpoint is configured`)
  })
}

// Broken images and videos otherwise fail invisibly (blank space or a frozen
// poster), and rejected promises never reach the console with any context, so
// report both.
function initGlobalErrorReporting() {
  const onMediaError = (event) => {
    const el = event.target
    if (!(el instanceof HTMLImageElement) && !(el instanceof HTMLVideoElement) && !(el instanceof HTMLSourceElement)) return
    const media = el instanceof HTMLSourceElement ? el.parentElement : el
    media?.classList.add('media--failed')
    reportError('media failed to load', new Error(`${media?.tagName ?? el.tagName}: ${el.currentSrc || el.src || 'unknown source'}`))
  }
  // Media error events do not bubble, so listen in the capture phase.
  window.addEventListener('error', onMediaError, true)
  window.addEventListener('unhandledrejection', (event) => {
    reportError('unhandled promise rejection', event.reason)
  })
}

// `HTMLMediaElement.play()` rejects when autoplay is blocked or decoding fails;
// without this the rejection is an unhandled promise.
function playVideo(video, context) {
  const played = video.play()
  if (played && typeof played.catch === 'function') {
    played.catch((error) => reportError(context, error))
  }
}

function initVideoPopup() {
  const popup = requireElement('.popUpForVideo', 'Video popup')
  const popupVideo = requireElement('video', 'Video popup', popup)
  const closePopup = requireElement('.close-popup', 'Video popup')
  const videoItems = document.querySelectorAll('.ugc-item')
  if (!videoItems.length) throw new Error('Video popup: no ".ugc-item" elements rendered')

  const close = () => {
    popup.classList.remove('active')
    popupVideo.pause()
    popupVideo.currentTime = 0
  }

  videoItems.forEach((item) => {
    item.addEventListener('click', () => {
      try {
        const src = requireElement('video source', 'Video popup', item).getAttribute('src')
        if (!src) throw new Error('Video popup: clicked item has a <source> without a src')
        popupVideo.src = src
        popup.classList.add('active')
        playVideo(popupVideo, 'popup video playback failed')
      } catch (error) {
        reportError('opening video popup failed', error)
      }
    })
  })

  closePopup.addEventListener('click', close)
  popup.addEventListener('click', (e) => {
    if (e.target === popup) close()
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains('active')) close()
  })

  document.querySelectorAll('.video-thumbnail').forEach((video) => {
    video.addEventListener('mouseover', () => {
      if (video.paused) playVideo(video, 'thumbnail preview playback failed')
    })
    video.addEventListener('mouseout', () => {
      video.pause()
      video.currentTime = 0
    })
  })
}

function initUGCAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  mm.add('(min-width: 769px)', () => {
    gsap.to('.ugc-wrapper h2:nth-child(1)', {
      x: 200,
      scrollTrigger: { trigger: '.ugc-wrapper', start: 'top center', end: 'bottom center', scrub: 1 }
    });
    gsap.to('.ugc-wrapper h2:nth-child(2)', {
      x: -200,
      scrollTrigger: { trigger: '.ugc-wrapper', start: 'top center', end: 'bottom center', scrub: 1 }
    });
    gsap.to('.ugc-wrapper h2:nth-child(3)', {
      x: 300,
      scrollTrigger: { trigger: '.ugc-wrapper', start: 'top center', end: 'bottom center', scrub: 1 }
    });

    const scrollTriggerConfig = {
      trigger: '.ugc-wrapper',
      start: 'top top',
      end: '+=300%', 
      scrub: 1,
      pin: true,
    };
    const UGC_TL = gsap.timeline({ scrollTrigger: scrollTriggerConfig, defaults: { duration: 1, ease: 'power2.inOut' } });
    UGC_TL.from('.video-card-1', { y: '130%', x: '170%' })
      .from('.video-card-2', { y: '130%', x: '130%' }, '-=0.5')
      .from('.video-card-3', { y: '130%', x: '50%' }, '-=0.5')
      .from('.video-card-4', { y: '130%', x: '-20%' }, '-=0.5')
      .from('.video-card-5', { y: '130%', x: '-100%' }, '-=0.5')
      .from('.video-card-6', { y: '130%', x: '-150%' }, '-=0.5');
  });

  mm.add('(max-width: 768px)', () => {
    gsap.from('.ugc-wrapper h2:nth-child(1)', {
      x: 100,
      scrollTrigger: { trigger: '.ugc-wrapper', start: 'top center', end: 'bottom center', scrub: 1 }
    });
    gsap.from('.ugc-wrapper h2:nth-child(2)', {
      x: -100,
      scrollTrigger: { trigger: '.ugc-wrapper', start: 'top center', end: 'bottom center', scrub: 1 }
    });
    gsap.from('.ugc-wrapper h2:nth-child(3)', {
      x: 200,
      scrollTrigger: { trigger: '.ugc-wrapper', start: 'top center', end: 'bottom center', scrub: 1 }
    });

    const scrollTriggerConfig = {
      trigger: '.ugc-wrapper',
      start: 'top top',
      end: '+=300%', 
      scrub: 1,
      pin: true,
    };
    const UGC_TL = gsap.timeline({ scrollTrigger: scrollTriggerConfig, defaults: { duration: 1, ease: 'power2.inOut' } });
    UGC_TL.from('.video-card-1', { y: '180%', opacity: 1 })
      .from('.video-card-2', { y: '180%', opacity: 1 }, '-=0.5')
      .from('.video-card-3', { y: '180%', opacity: 1 }, '-=0.5')
      .from('.video-card-4', { y: '180%', opacity: 1 }, '-=0.5')
      .from('.video-card-5', { y: '180%', opacity: 1 }, '-=0.5')
      .from('.video-card-6', { y: '180%', opacity: 1 }, '-=0.5');
  });
}

// GSAP is loaded from a CDN in <head>, so poll for it instead of guessing a
// fixed delay, and report it when the script never arrives.
function whenGsapReady(timeoutMs = 5000, intervalMs = 100) {
  return new Promise((resolve, reject) => {
    const started = Date.now()
    const check = () => {
      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        resolve()
      } else if (Date.now() - started >= timeoutMs) {
        reject(new Error(`GSAP/ScrollTrigger did not load within ${timeoutMs}ms (CDN blocked or offline)`))
      } else {
        setTimeout(check, intervalMs)
      }
    }
    check()
  })
}

window.addEventListener('load', () => {
  whenGsapReady()
    .then(() => runInit('initUGCAnimations', initUGCAnimations))
    .catch((error) => reportError('scroll animations for the UGC section are disabled', error))
})
