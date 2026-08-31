import { reticle } from '@reticlehq/browser';
if (import.meta.env.DEV) reticle.connect();

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

const renderNavbar = () => `
  <header class="navbar container">
    <a href="#/" class="navbar__logo">
      <img src="${logo}" alt="Spectrum" width="152" height="64" />
    </a>
    <nav class="navbar__nav" aria-label="Main">
      <div class="navbar__dropdown">
        <a href="#/" class="navbar__link navbar__link-wrap">
          Services
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </a>
        <div class="navbar__dropdown-menu">
          <a href="#/performance-marketing" class="navbar__dropdown-link">Performance Marketing</a>
          <a href="#/social-media-marketing" class="navbar__dropdown-link">Social Media Marketing</a>
          <a href="#/content-marketing" class="navbar__dropdown-link">Content Marketing</a>
          <a href="#/shopify-development" class="navbar__dropdown-link">Shopify Development</a>
        </div>
      </div>
      <div class="navbar__dropdown">
        <a href="#/" class="navbar__link navbar__link-wrap">
          Software Development
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </a>
        <div class="navbar__dropdown-menu">
          <a href="#/app-development" class="navbar__dropdown-link">App Development</a>
          <a href="#/website-development" class="navbar__dropdown-link">Website Development</a>
          <a href="#/software-development" class="navbar__dropdown-link">Software Development</a>
          <a href="#/crm-development" class="navbar__dropdown-link">CRM Development</a>
        </div>
      </div>
      <a href="#/portfolio" class="navbar__link">Portfolio</a>
      <a href="#/about" class="navbar__link">About</a>
      <a href="#/contact" class="navbar__link">Contact</a>
    </nav>
    <div class="navbar__actions">
      <a href="#/contact" class="btn btn--primary navbar__cta">Get in Touch</a>
      <button type="button" class="navbar__toggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
  <div class="mobile-nav" hidden>
    <nav aria-label="Mobile">
      <a href="#/">Services</a>
      <a href="#/performance-marketing" class="mobile-nav__sublink">- Performance Marketing</a>
      <a href="#/social-media-marketing" class="mobile-nav__sublink">- Social Media Marketing</a>
      <a href="#/content-marketing" class="mobile-nav__sublink">- Content Marketing</a>
      <a href="#/shopify-development" class="mobile-nav__sublink">- Shopify Development</a>
      
      <a href="#/">Software Development</a>
      <a href="#/app-development" class="mobile-nav__sublink">- App Development</a>
      <a href="#/website-development" class="mobile-nav__sublink">- Website Development</a>
      <a href="#/software-development" class="mobile-nav__sublink">- Software Development</a>
      <a href="#/crm-development" class="mobile-nav__sublink">- CRM Development</a>
      
      <a href="#/portfolio">Portfolio</a>
      <a href="#/about">About</a>
      <a href="#/contact">Contact</a>
    </nav>
  </div>
`;

const renderFooter = () => `
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
            <a href="#/performance-marketing">Performance Marketing</a>
            <a href="#/shopify-development">Shopify Dev</a>
            <a href="#/app-development">App Dev</a>
            <a href="#/software-development">Software Dev</a>
            <a href="#/website-development">Website Dev</a>
          </div>
          <div class="footer-v2-col">
            <h3>Company</h3>
            <a href="#/about">About</a>
            <a href="#/careers">Careers</a>
            <a href="#/blogs">Blogs</a>
            <a href="#/contact">Contact</a>
            <a href="#/privacy">Privacy</a>
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
`;

const renderHome = () => `
  <main>
    <section class="hero container">
      <div class="hero__content animate-on-scroll">
        <h1 class="hero__title">
          Turning Ideas Into
          ${cornerFrame('Digital Reality', 'hero__highlight-wrap')}
        </h1>
        <p class="hero__text">${placeholder}</p>
        <div class="hero__actions">
          <a href="#/contact" class="btn btn--primary">Start a Project</a>
          <a href="#/portfolio" class="btn btn--ghost">
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
        <a href="#/" class="btn btn--secondary">Show All</a>
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
            <a href="#/contact" class="btn ${plan.popular ? 'btn--secondary' : 'btn--ghost btn--outline'} btn-full">Get Started</a>
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
`;

const renderServicePage = (title, description, features, caseStudy = null, details = null) => `
  <main class="service-page-main">
    ${details ? `
    <section class="sp-hero container">
      <div class="sp-hero__grid">
        <div class="sp-hero__image-col animate-on-scroll">
          <img src="${details.image || caseStudy?.image || heroCharacter}" alt="${title}" class="sp-hero__image" />
        </div>
        <div class="sp-hero__content-col animate-on-scroll" style="transition-delay: 100ms">
          <div class="sp-hero__badge">${details.badge || 'D2C SERVICES'}</div>
          <h1 class="sp-hero__title">${title}</h1>
          
          ${details.bullets ? `
            <ul class="sp-hero__bullets">
              ${details.bullets.map(b => `<li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> <span>${b}</span></li>`).join('')}
            </ul>
          ` : `<p class="sp-hero__desc">${description}</p>`}
          
          ${details.variants ? `
            <div class="sp-variants">
              ${details.variants.map((v, i) => `
                <button class="sp-variant-btn ${i === 0 ? 'active' : ''}">${v}</button>
              `).join('')}
            </div>
          ` : ''}
          
          <div class="sp-hero__actions">
            <a href="#/contact" class="btn btn--primary btn-full sp-cta-btn">Enquire Now</a>
            <button class="sp-view-details" onclick="document.getElementById('details').scrollIntoView({behavior: 'smooth'})">View full details</button>
          </div>
        </div>
      </div>
    </section>
    
    ${details.sections ? `
    <section id="details" class="sp-details container">
      <div class="sp-details__inner">
        ${details.sections.map((sec, i) => `
          <div class="sp-section animate-on-scroll">
            <h2 class="sp-section__title">${sec.title}</h2>
            <div class="sp-section__content">${sec.content}</div>
          </div>
        `).join('')}
      </div>
    </section>
    ` : ''}
    ` : `
    <section class="hero container" style="min-height: 50vh; padding-top: 180px; padding-bottom: 80px;">
      <div class="hero__content animate-on-scroll" style="max-width: 800px; margin: 0 auto; text-align: center;">
        <h1 class="hero__title">
          ${title.split(' ')[0]}
          ${cornerFrame(title.split(' ').slice(1).join(' '), 'hero__highlight-wrap')}
        </h1>
        <p class="hero__text" style="margin: 24px auto;">${description}</p>
        <div class="hero__actions" style="justify-content: center;">
          <a href="#/contact" class="btn btn--primary">Get Started</a>
        </div>
      </div>
    </section>
    `}

    ${features && features.length > 0 ? `
    <section class="section container">
      <div class="achievements__header animate-on-scroll" style="margin-bottom: 40px; text-align: center;">
        <h2 class="section__title">Our Approach <img src="${dotsDecor}" alt="" class="section__dots" /></h2>
      </div>
      <div class="projects__grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
        ${features.map((f, i) => `
          <div class="pricing-card animate-on-scroll" style="background: var(--neutral-50); border: 1px solid var(--neutral-100); padding: 32px; border-radius: 24px; transition-delay: ${i * 100}ms">
            <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 16px; font-family: var(--font-heading);">${f.title}</h3>
            <p style="color: var(--neutral-500); line-height: 1.6;">${f.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>
    ` : ''}


    ${caseStudy ? `
    <section class="section container" style="margin-bottom: 40px;">
      <div class="achievements__header animate-on-scroll" style="margin-bottom: 40px; text-align: center;">
        <h2 class="section__title">Featured Case Study <img src="${dotsDecor}" alt="" class="section__dots" /></h2>
      </div>
      <div class="case-study-card animate-on-scroll">
        <div class="case-study-card__image-wrap">
          <img src="${caseStudy.image}" alt="${caseStudy.title}" class="case-study-card__image" />
          ${caseStudy.gallery ? `
          <div class="case-study-card__gallery">
            ${caseStudy.gallery.map(media => {
              if (media.endsWith('.mp4')) {
                return '<video src="' + media + '" autoplay loop muted playsinline class="case-study-card__gallery-item"></video>';
              }
              return '<img src="' + media + '" alt="" class="case-study-card__gallery-item" />';
            }).join('')}
          </div>
          ` : ''}
        </div>
        <div class="case-study-card__content">
          <span class="case-study-card__client">${caseStudy.client}</span>
          <h3 class="case-study-card__title">${caseStudy.title}</h3>
          
          ${caseStudy.tags ? `
          <div class="case-study-card__tags">
            ${caseStudy.tags.map(t => `<span>${t}</span>`).join('')}
          </div>
          ` : ''}

          <div class="case-study-card__desc">
            <p>${caseStudy.description}</p>
            ${caseStudy.challenge ? `<h4 style="margin-top: 16px; margin-bottom: 8px; font-weight: 700; color: var(--neutral-800);">The Challenge</h4><p>${caseStudy.challenge}</p>` : ''}
            ${caseStudy.approach ? `<h4 style="margin-top: 16px; margin-bottom: 8px; font-weight: 700; color: var(--neutral-800);">Our Approach</h4><p>${caseStudy.approach}</p>` : ''}
          </div>

          ${caseStudy.highlights ? `
          <ul class="case-study-card__highlights">
            ${caseStudy.highlights.map(h => `<li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> ${h}</li>`).join('')}
          </ul>
          ` : ''}
          ${caseStudy.testimonial ? `
          <div class="case-study-card__testimonial">
            <p>"${caseStudy.testimonial.text}"</p>
            <div class="author">
              <strong>${caseStudy.testimonial.author}</strong>
              <span>${caseStudy.testimonial.role}</span>
            </div>
          </div>
          ` : ''}
          ${caseStudy.slug ? `<a href="#/work/${caseStudy.slug}" class="btn btn--outline" style="margin-top: 24px;">Read Full Case Study</a>` : ''}

        </div>
      </div>
    </section>
    ` : ''}
    
    <section class="section cta container" style="margin-bottom: 120px;">
      <div class="cta__card sp-cta" style="margin-top: 64px;">
        <div class="cta__content animate-on-scroll" style="text-align: center; max-width: 600px; margin: 0 auto;">
          <h2 class="cta__title" style="margin-bottom: 24px; font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; letter-spacing: -1px;">Ready to elevate your ${title}?</h2>
          <p style="color: var(--text-muted); margin-bottom: 32px; font-size: 1.1rem;">Let's build something extraordinary together.</p>
          <a href="#/contact" class="btn btn--primary btn--icon" style="margin: 0 auto; padding: 16px 32px; font-size: 1.1rem; border-radius: 50px; box-shadow: 0 4px 15px rgba(111,74,255,0.3);">Start a Project <img src="${arrowRight}" alt="" width="14" height="14" style="margin-left:8px;" /></a>
        </div>
      </div>
    </section>
  </main>
`;


const bounceCaseStudy = {
  slug: 'bounce',
  client: 'Bounce Daily',
  meta: {
    clientDesc: 'Electric mobility startup, Series E 200M',
    year: '2025',
    involvement: 'React Native, Mobile App, Product Design',
    result: '$200M Raised'
  },
  title: "India's #1 EV rental app, backed by $200M",
  pageTitle: "India's #1 EV rental app, backed by $200M: we rebuilt the product that was losing half its riders before their first ride",
  description: 'We rebuilt the product that was losing half its riders before their first ride. 45% dropped off during signup alone. We rebuilt their app end to end, design and engineering together, across iOS and Android.',
  intro: 'Bounce Daily, India\'s leading EV scooter rental platform with 100,000+ active users, was losing people before they ever took a single ride. 45% dropped off during signup alone. That\'s not a bug to patch, that\'s a product to rebuild.<br/><br/>We rebuilt their app end to end, design and engineering together, and shipped it across iOS and Android in three cities: Delhi NCR, Bangalore, and Hyderabad.',
  challenge: 'We talked to riders, delivery partners, and the operators using the app every day, and one theme kept surfacing: people didn\'t trust the app. Not the idea, the execution. Signup felt like a black box, payments felt uncertain, and there was no way to tell if anything you did actually worked.<br/><br/>The old codebase couldn\'t fix any of that. Real-time verification, proactive notifications, a loyalty system that actually kept people coming back, none of it could be bolted onto what was already there. It had to be rebuilt from the ground up.',
  approach: 'We rebuilt the entire app from scratch: new foundation, new components, new backend underneath it. Signup got real-time verification and short instructional videos so people always knew what was happening and why.<br/><br/>We built a notification system that catches a rider before their plan expires, not after, and a payment screen that makes exactly what\'s owed and when impossible to misread. We layered in a loyalty and referral program to bring people back after their first ride.<br/><br/>Every part of it was built to run reliably at scale, then rolled out in phases across Delhi NCR, Bangalore, and Hyderabad. And we rebuilt the look of the app around that same goal: earthy tones, coral accents, clean geometry, calm and trustworthy for someone using it while they\'re standing next to a scooter, not sitting at a desk.',
  image: '/case-studies/bounce/cover.png',
  gallery: [
    '/case-studies/bounce/sub-1.png',
    '/case-studies/bounce/sub-2.mp4'
  ],
  highlights: [
    'Real-time verification and short instructional videos during signup',
    'Notification system that catches a rider before their plan expires',
    'Clear payment screen that makes what is owed impossible to misread'
  ],
  testimonial: {
    text: "They didn't just redesign our app. They rebuilt it. The engineering was solid, the new onboarding changed our conversion numbers within weeks of launch, and the team moved fast without cutting corners.",
    author: 'Prudhvi Raju',
    role: 'Head of Product & Analytics',
    avatar: 'https://www.dreamlaunch.studio/founders/prudhvi.png'
  }
};

const mizuaiCaseStudy = {
  slug: 'mizuai',
  client: 'Mizu AI',
  meta: {
    clientDesc: 'AI Automation Startup',
    year: '2025',
    involvement: 'Product Design, Frontend, Backend, Full-Stack Build',
    result: 'Live in 6 Weeks'
  },
  tags: ['2025', 'Product Design', 'Frontend', 'Backend', 'Full-Stack Build'],
  title: 'Shipping an AI-Native Automation Builder in 6 Weeks',
  pageTitle: 'Shipping an AI-Native Automation Builder in 6 Weeks',
  description: "Andrej had an idea and nothing else: no product, no frontend, no backend, no team. He wanted to build an AI automation builder anyone could use, describe what you need in plain English, and it builds the automation for you, in a category already led by well-funded players like Lindy.<br/><br/>We built it with him, design and engineering together, from the first sketch to a working product: auth, onboarding, an AI-powered builder, a visual canvas, five real integrations, and billing. All of it live in six weeks.",
  intro: "Andrej had an idea and nothing else: no product, no frontend, no backend, no team. He wanted to build an AI automation builder anyone could use, describe what you need in plain English, and it builds the automation for you, in a category already led by well-funded players like Lindy.<br/><br/>We built it with him, design and engineering together, from the first sketch to a working product: auth, onboarding, an AI-powered builder, a visual canvas, five real integrations, and billing. All of it live in six weeks.",
  challenge: "The hard part wasn't the automation logic. It was making all of that invisible. A user should be able to type 'send me a Slack message every time I get a new lead' and just watch it work, never seeing the credential handling, the account setup, or the billing rules making that possible underneath.<br/><br/>And Andrej didn't have six months to get there. He had six weeks, a category full of funded competitors, and a bar that wasn't 'does it work,' it was 'does it feel effortless.'",
  approach: "We started with the experience, not the screens: how does someone's plain-English request actually turn into a working automation? How does that automation become something they can see and trust, instead of a black box? We mapped that journey before building anything.<br/><br/>Design and engineering moved together the whole way through, not design-then-handoff. That's the only way a product this complex ships as one coherent thing in six weeks, instead of a UI bolted onto a backend built after the fact.<br/><br/>We built a conversational builder first: describe what you want, the AI asks what it needs to know, then builds it, with a visual canvas underneath for anyone who wants to see how it works. Five integrations (Gmail, Slack, Calendar, Notion, Docs) all set up the same reliable way, so adding a sixth later doesn't mean rebuilding the system. And a billing and credit system that limits usage without ever feeling like a paywall.",
  image: '/case-studies/mizuai/image.png',
  gallery: [
    '/case-studies/mizuai/image2.png',
    '/case-studies/mizuai/image3.png',
    '/case-studies/mizuai/image4.png',
    '/case-studies/mizuai/image6.png'
  ],
  testimonial: {
    text: "Working with Harshil and DreamLaunch to build my automation builder MVP was great. They didn't just code what I asked for. They built a solid foundation that I can actually scale from. If you need a technical partner who understands both the build AND the business side of early-stage products, I'd highly recommend DreamLaunch.",
    author: 'Andrej',
    role: 'Founder, Mizu AI',
    avatar: 'https://ui-avatars.com/api/?name=Andrej&background=random'
  }
};

const mrsamCaseStudy = {
  slug: 'mrsam',
  client: 'Mrsam AI',
  meta: {
    clientDesc: 'Website Builder SaaS',
    year: '2025',
    involvement: 'Product Design & Full-Stack',
    result: '$500K Seed Raised'
  },
  tags: ['2025', 'Product Design & Full-Stack', '$500K Seed Raised'],
  title: 'We Built the RTL-First, No-Code Website Builder That Closed a $500K Seed Round',
  pageTitle: 'We Built the RTL-First, No-Code Website Builder That Closed a $500K Seed Round',
  description: 'Mustafa wanted to build Canva for websites, but for freelancers and small businesses in Arabic-speaking markets, built on their phone, with AI writing the copy for them. Nothing like it existed built for Arabic first instead of English first. We designed and built the whole thing with him: a tap-to-build mobile canvas, an AI assistant that writes real Arabic copy, and a way to publish or hand off the finished site. Ten weeks later it was live. Mustafa closed a $500K seed round shortly after.',
  intro: 'Mustafa wanted to build Canva for websites, but for freelancers and small businesses in Arabic-speaking markets, built on their phone, with AI writing the copy for them. Nothing like it existed built for Arabic first instead of English first. We designed and built the whole thing with him: a tap-to-build mobile canvas, an AI assistant that writes real Arabic copy, and a way to publish or hand off the finished site. Ten weeks later it was live. Mustafa closed a $500K seed round shortly after.',
  challenge: "Every website builder on the market treated Arabic as an afterthought, a toggle bolted onto a layout built for English. For Mrsam's users, that toggle was the whole product. Arabic and right-to-left layout had to work as well as English does everywhere else, not as a workaround.<br/><br/>And it had to work on a phone. Most of Mrsam's users would build their entire site from a mobile screen, in one sitting, start to finish, with no coming back later to fix what broke.",
  approach: "We rebuilt the canvas around a thumb, not a mouse: tap to add a section, long-press to reorder, everything snapping into place without the drag-and-drop patterns that fall apart on a small screen.<br/><br/>Every section a business could add (text, image, button, header, and more) got its own simple editor, with Arabic and English both treated as first-class, right down to fonts chosen to look native in Arabic, not translated.<br/><br/>The AI writing assistant was tuned to produce real Arabic copy for the business type it was given, not English translated after the fact, so a WhatsApp call-to-action or a services headline actually read the way a business would write it.<br/><br/>And because every site lived in one shared format underneath, we gave Mustafa's users three ways out: a live link to share immediately, a downloadable file to host anywhere, or the raw file to hand to a developer later. Go live in minutes, or build on top of it, either way.",
  image: '/case-studies/mrsam/image.png',
  gallery: [
    '/case-studies/mrsam/image2.png',
    '/case-studies/mrsam/image3.png',
    '/case-studies/mrsam/image4.png'
  ],
  testimonial: {
    text: "DreamLaunch built our AI website builder from zero in 10 weeks: auth, canvas, AI content, RTL/Arabic support, all of it. We closed our seed round right after launch, and I don't think that's a coincidence.",
    author: 'Mustafa',
    role: 'Founder, Mrsam AI',
    avatar: 'https://ui-avatars.com/api/?name=Mustafa&background=random'
  }
};

const renderCaseStudyDetail = (caseStudy) => `
  <main class="cs-page">
    <article class="cs-layout">
      <!-- Sidebar -->
      <div class="cs-sidebar">
        <div class="cs-sidebar__content">
          <div class="cs-meta-group">
            <div class="cs-meta-item">
              <span class="cs-meta-label">Client</span>
              <div class="cs-meta-value">
                ${caseStudy.client}
                ${caseStudy.meta.clientDesc ? `<span class="cs-meta-sub">${caseStudy.meta.clientDesc}</span>` : ''}
              </div>
            </div>
            <div class="cs-meta-item">
              <span class="cs-meta-label">Year</span>
              <div class="cs-meta-value">${caseStudy.meta.year}</div>
            </div>
            <div class="cs-meta-item">
              <span class="cs-meta-label">Involvement</span>
              <div class="cs-meta-value">${caseStudy.meta.involvement}</div>
            </div>
            <div class="cs-meta-item">
              <span class="cs-meta-label">Result</span>
              <div class="cs-meta-value cs-meta-result">${caseStudy.meta.result}</div>
            </div>
          </div>
          
          <div class="cs-intro">
            ${caseStudy.intro.split('<br/><br/>').map(p => `<p>${p}</p>`).join('')}
          </div>

          <div class="cs-actions">
            <a href="#/contact" class="cs-btn cs-btn--outline">
              Send a message
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
            </a>
            <a href="#/contact" class="cs-btn cs-btn--solid">
              Book a call
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="cs-main">
        <h1 class="cs-main__title">${caseStudy.pageTitle}</h1>
        
        <div class="cs-main__cover">
          <img src="${caseStudy.image}" alt="${caseStudy.client} cover" />
        </div>

        ${caseStudy.challenge ? `
        <div class="cs-section">
          <div class="cs-section__label">The challenge</div>
          <div class="cs-section__text">
            ${caseStudy.challenge.split('<br/><br/>').map(p => `<p>${p}</p>`).join('')}
          </div>
        </div>
        ` : ''}

        ${caseStudy.gallery && caseStudy.gallery.length > 0 ? `
        <div class="cs-gallery">
          ${caseStudy.gallery[0] ? `
          <div class="cs-gallery__item">
            ${caseStudy.gallery[0].endsWith('.mp4') ? 
              `<video src="${caseStudy.gallery[0]}" autoplay loop muted playsinline></video>` : 
              `<img src="${caseStudy.gallery[0]}" alt="" />`}
          </div>
          ` : ''}
          ${caseStudy.gallery.length > 1 ? `
          <div class="cs-gallery__grid">
            ${caseStudy.gallery.slice(1).map(media => `
            <div class="cs-gallery__item">
              ${media.endsWith('.mp4') ? 
                `<video src="${media}" autoplay loop muted playsinline></video>` : 
                `<img src="${media}" alt="" />`}
            </div>
            `).join('')}
          </div>
          ` : ''}
        </div>
        ` : ''}

        ${caseStudy.approach ? `
        <div class="cs-section">
          <div class="cs-section__label">Our approach</div>
          <div class="cs-section__text">
            ${caseStudy.approach.split('<br/><br/>').map(p => `<p>${p}</p>`).join('')}
          </div>
        </div>
        ` : ''}

        ${caseStudy.testimonial ? `
        <div class="cs-testimonial">
          <blockquote>
            <p class="cs-testimonial__text">“${caseStudy.testimonial.text}”</p>
            <div class="cs-testimonial__author">
              <div class="cs-testimonial__avatar">
                <img src="${caseStudy.testimonial.avatar}" alt="${caseStudy.testimonial.author}" />
              </div>
              <div>
                <div class="cs-testimonial__name">${caseStudy.testimonial.author}</div>
                <div class="cs-testimonial__role">${caseStudy.testimonial.role}</div>
              </div>
            </div>
          </blockquote>
        </div>
        ` : ''}
      </div>
      <section class="section cta container" style="margin-bottom: 120px; padding: 0;">
        <div class="cta__card sp-cta" style="margin-top: 64px;">
          <div class="cta__content animate-on-scroll" style="text-align: center; max-width: 600px; margin: 0 auto;">
            <h2 class="cta__title" style="margin-bottom: 24px; font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; letter-spacing: -1px;">Ready to elevate your brand?</h2>
            <p style="color: var(--text-muted); margin-bottom: 32px; font-size: 1.1rem;">Let's build something extraordinary together.</p>
            <a href="#/contact" class="btn btn--primary btn--icon" style="margin: 0 auto; padding: 16px 32px; font-size: 1.1rem; border-radius: 50px; box-shadow: 0 4px 15px rgba(111,74,255,0.3);">Start a Project <img src="${arrowRight}" alt="" width="14" height="14" style="margin-left:8px;" /></a>
          </div>
        </div>
      </section>
    </article>
  </main>
`;

const renderContactPage = () => {
  document.title = 'Contact Us - Digi Sidekick';
  return `
    <main class="contact-page container animate-on-scroll">
      <div class="contact-header">
        <h1>Book A Consultation Call</h1>
        <p class="hero__text">Let's discuss how we can grow your brand.</p>
      </div>
      <div class="contact-grid">
        <form class="contact-form" onsubmit="event.preventDefault(); alert('Form submitted!');">
          <div class="form-group">
            <label class="form-label" for="name">Name</label>
            <input type="text" id="name" name="name" class="form-input" placeholder="Name" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="email">Email *</label>
            <input type="email" id="email" name="email" class="form-input" placeholder="Email *" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="phone">Phone number</label>
            <input type="tel" id="phone" name="phone" class="form-input" placeholder="Phone number">
          </div>
          <div class="form-group">
            <label class="form-label" for="website">Website Link</label>
            <input type="url" id="website" name="website" class="form-input" placeholder="Website Link">
          </div>
          <div class="form-group">
            <label class="form-label" for="comment">Comment</label>
            <textarea id="comment" name="comment" class="form-input" placeholder="Comment"></textarea>
          </div>
          <button type="submit" class="btn btn--primary btn-full form-submit">Send</button>
        </form>
      </div>
    </main>
  `;
};

const ugcVideos = [
  'https://cdn.shopify.com/videos/c/o/v/683dff0401134b41b954ed3d3d4d8eab.mp4',
  'https://cdn.shopify.com/videos/c/o/v/a6a2ed99aa0448f29aec30b826f34ab6.mp4',
  'https://cdn.shopify.com/videos/c/o/v/0233f078bdb84756b10c73ff87df6e2e.mp4',
  'https://cdn.shopify.com/videos/c/o/v/81cbfaa0568e400c8d15cb1a593ef611.mp4',
  'https://cdn.shopify.com/videos/c/o/v/073987255f0a4c549ba37f66978beb53.mp4',
  'https://cdn.shopify.com/videos/c/o/v/3462c3c710444ced9376d5f3caaef6a8.mp4',
  'https://cdn.shopify.com/videos/c/o/v/df8f6857cd2f40e4895e50160f3023af.mp4',
  'https://cdn.shopify.com/videos/c/o/v/b6a85f41ed104dd3ad0204e5540a4ab9.mp4',
  'https://cdn.shopify.com/videos/c/o/v/9b13dbe5d2aa4ca59f340080676bea7b.mp4',
  'https://cdn.shopify.com/videos/c/o/v/add2b0484ee945ee9f38da2aadd118c2.mp4',
  'https://cdn.shopify.com/videos/c/o/v/1cd7398db09f4301a4626ceda2beb48e.mp4',
  'https://cdn.shopify.com/videos/c/o/v/5d5059f8e8d547b6a1b179b88096693d.mp4',
  'https://cdn.shopify.com/videos/c/o/v/5710dc49ddb645f897401b227fd8dea4.mp4',
  'https://cdn.shopify.com/videos/c/o/v/cdf7ca29747442beb9525a66990eb052.mp4',
  'https://cdn.shopify.com/videos/c/o/v/8d2b28619bdc4fe2a4515d43837b859b.mp4',
  'https://cdn.shopify.com/videos/c/o/v/dcfc6436a9f7431bb860f7b8c9a266de.mp4',
  'https://cdn.shopify.com/videos/c/o/v/b68e56507c4f43a691db9600f3c523c0.mp4',
  'https://cdn.shopify.com/videos/c/o/v/1d6549d20b3a4ef3aae4146b473788c7.mp4'
];

const renderPortfolioPage = () => {
  document.title = 'UGC Portfolio - Digi Sidekick';
  return `
    <main class="ugc-portfolio-page container animate-on-scroll">
      <div class="ugc-hero">
        <h1>
          <span>We're not an <span class="ugc-hero-accent">Agency</span></span>
          <span>We are an <span class="ugc-hero-accent">Eco-System</span></span>
        </h1>
        <p>Reels That Get Us Views & Sales</p>
      </div>
      <div class="ugc-gallery">
        ${ugcVideos.map((src) => `
          <div class="ugc-video-wrapper">
            <video class="ugc-video" src="${src}" preload="metadata" loop muted playsinline data-hover-play></video>
          </div>
        `).join('')}
      </div>
      <section class="section cta container" style="margin-bottom: 120px;">
        <div class="cta__card sp-cta" style="margin-top: 64px;">
          <div class="cta__content animate-on-scroll" style="text-align: center; max-width: 600px; margin: 0 auto;">
            <h2 class="cta__title" style="margin-bottom: 24px; font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; letter-spacing: -1px;">Ready to elevate your brand?</h2>
            <p style="color: var(--text-muted); margin-bottom: 32px; font-size: 1.1rem;">Let's build something extraordinary together.</p>
            <a href="#/contact" class="btn btn--primary btn--icon" style="margin: 0 auto; padding: 16px 32px; font-size: 1.1rem; border-radius: 50px; box-shadow: 0 4px 15px rgba(111,74,255,0.3);">Start a Project <img src="${arrowRight}" alt="" width="14" height="14" style="margin-left:8px;" /></a>
          </div>
        </div>
      </section>
    </main>
  `;
};

const pages = {
  '#/work/bounce': () => renderCaseStudyDetail(bounceCaseStudy),
  '#/work/mizuai': () => renderCaseStudyDetail(mizuaiCaseStudy),
  '#/work/mrsam': () => renderCaseStudyDetail(mrsamCaseStudy),

  '#/performance-marketing': () => renderServicePage(
    'Performance Marketing',
    'Data-driven campaigns designed to maximize ROI and scale your business efficiently across all digital channels.',
    [
      { title: 'Search Engine Marketing', desc: 'Capture high-intent traffic with optimized Google Ads and Bing Ads campaigns.' },
      { title: 'Paid Social Campaigns', desc: 'Engage and convert your audience on Meta, LinkedIn, TikTok, and Twitter.' },
      { title: 'Conversion Rate Optimization', desc: 'A/B testing and user journey analysis to maximize the value of every click.' }
    ],
    null,
    {
      image: '/images/services/perf-marketing.jpg',
      variants: [
        'Performance (Google + Meta)',
        'Ads Account + Creative',
        'Only Perfs Creatives'
      ],
      bullets: [
        'Real Time Data Tracking ⏱️',
        'AI Based Targeting 🤖',
        'Data Driven Optimization 📈',
        'Scalibility & Flexibility 🔄',
        'Accurate Reporting ✅'
      ],
      sections: [
        {
          title: 'Zero to Hero-D2C',
          content: `
            <div class="sp-grid">
              <div class="sp-card">
                <div class="sp-card__icon">🎯</div>
                <h3 class="sp-card__title">Top Funnel</h3>
                <p class="sp-card__desc">Spark curiosity with scroll-stopping creatives. Use Traffic/Engagement or ASC for broad reach. Target interests + lookalikes.</p>
              </div>
              <div class="sp-card">
                <div class="sp-card__icon">🔥</div>
                <h3 class="sp-card__title">Middle Funnel</h3>
                <p class="sp-card__desc">Re-engage warm audiences with social proof, product highlights, urgency. Use Sales/Leads objective.</p>
              </div>
              <div class="sp-card">
                <div class="sp-card__icon">💰</div>
                <h3 class="sp-card__title">Bottom Funnel</h3>
                <p class="sp-card__desc">Convert hot traffic with scarcity, promos, and DPA retargeting. Optimize for Conversions.</p>
              </div>
            </div>
          `
        },
        {
          title: 'Deep Creative Analysis',
          content: `
            <div class="sp-highlight-box">
              <p class="sp-highlight-box__lead">We merge platform data with creative analysis—tracking CTR, CPC, hook rate, and hold rate for reels.</p>
              <p>These insights reveal winning patterns to sharpen messaging and boost ad performance.</p>
            </div>
          `
        },
        {
          title: 'In house Meta and Google Capabilities',
          content: `
            <div class="sp-grid sp-grid--2col">
              <div class="sp-card sp-card--gradient-meta">
                <h3 class="sp-card__title">Meta Ads Mastery</h3>
                <p class="sp-card__desc">TOF-MOF-BOF targeting, DPA, UGC testing, and automated rules for performance.</p>
              </div>
              <div class="sp-card sp-card--gradient-google">
                <h3 class="sp-card__title">Google Ads Mastery</h3>
                <p class="sp-card__desc">Intent-based search, YouTube for discovery, and custom landing strategies for max ROAS.</p>
              </div>
            </div>
            <p style="margin-top: 24px; text-align: center; font-weight: 500; color: var(--neutral-600);">Full-funnel strategies with daily optimization, dynamic creatives, and smart scaling via ASC & PMax.</p>
          `
        },
        {
          title: 'We dont just run ads, we consult on D2C Level',
          content: `
            <ul class="sp-list-pills">
              <li>
                <strong>Bold & Confident:</strong> We drive full-funnel D2C growth — ads, strategy, retention, all dialed in.
              </li>
              <li>
                <strong>Advisory Tone:</strong> Beyond media buying — we optimize your entire D2C engine for scale.
              </li>
              <li>
                <strong>Casual but Sharp:</strong> Ads are just the start — we go deep on what actually grows your brand.
              </li>
            </ul>
          `
        },
        {
          title: 'Recent Performance Results',
          content: `
            <div class="sp-results-gallery">
              <img src="/images/results/media_1788169857811.png" alt="Performance Result 1" class="sp-result-img" />
              <img src="/images/results/media_1788169865350.png" alt="Performance Result 2" class="sp-result-img" />
              <img src="/images/results/media_1788169877534.png" alt="Performance Result 3" class="sp-result-img" />
              <img src="/images/results/media_1788169885148.png" alt="Performance Result 4" class="sp-result-img" />
              <img src="/images/results/media_1788169893903.png" alt="Performance Result 5" class="sp-result-img" />
              <img src="/images/results/media_1788170311501.png" alt="Performance Result 6" class="sp-result-img" />
            </div>
          `
        }
      ]
    }
  ),
  '#/social-media-marketing': () => renderServicePage(
    'Social Media Marketing',
    'Build a loyal community and drive engagement with authentic, platform-native content strategies.',
    [
      { title: 'Content Strategy', desc: 'Tailored content calendars that align with your brand voice and business goals.' },
      { title: 'Community Management', desc: 'Active engagement and moderation to build brand loyalty and trust.' },
      { title: 'Influencer Partnerships', desc: 'Collaborate with industry voices to expand your reach and credibility.' }
    ],
    null,
    {
      image: '/images/services/social-media.jpg',
      variants: [
        'Social Media',
        'UGC',
        'Social Media Management'
      ],
      bullets: [
        'Content Designed for Reach 🌐',
        'Hook-Led Scripting 🎯',
        'Trend-Adaptive Content Engine ⚙️',
        'Custom Visual Identity 🎨',
        'High-Impact Reels, Not Just Posts 📹'
      ],
      sections: [
        {
          title: 'Our Social Media Methodology',
          content: `
            <div class="sp-grid sp-grid--2col">
              <div class="sp-card">
                <div class="sp-card__icon">📈</div>
                <h3 class="sp-card__title">Views and Followers is our KPI</h3>
                <p class="sp-card__desc">We don’t just manage social — we grow it with real, trackable impact.<br><br>No fluff metrics — just views, reach, and followers that move the needle.</p>
              </div>
              <div class="sp-card">
                <div class="sp-card__icon">✨</div>
                <h3 class="sp-card__title">Unseen, Unkaha, Unsunna</h3>
                <p class="sp-card__desc">Our content is fresh, original, and built to stop the scroll.<br><br>No templates. No repeats. Just algorithm-loving creativity with viral potential.</p>
              </div>
            </div>
          `
        },
        {
          title: 'We protect your brand while pushing boundaries',
          content: `
            <div class="sp-highlight-box">
              <p class="sp-highlight-box__lead">Maintain brand's sanity</p>
              <p>We don’t chase trends at the cost of your brand. Your voice, your vibe — we protect it while pushing for growth. Think bold moves, without the brand cringe.</p>
            </div>
          `
        },
        {
          title: 'You will enjoy the most working with our marketers',
          content: `
            <ul class="sp-list-pills">
              <li>
                <strong>Real people, real talk:</strong> No ghosting, no jargon.
              </li>
              <li>
                <strong>Collaborators, not contractors:</strong> We keep it fun, fast, and human.
              </li>
            </ul>
          `
        }
      ]
    }
  ),
  '#/content-marketing': () => renderServicePage(
    'Content Marketing',
    'Tell your brand story effectively with high-quality, SEO-optimized content that educates and converts.',
    [
      { title: 'SEO Strategy', desc: 'Data-backed keyword research and on-page optimization for sustained organic growth.' },
      { title: 'Blog & Article Writing', desc: 'Thought leadership and educational content that establishes your authority.' },
      { title: 'Video & Visual Content', desc: 'Engaging multimedia assets designed for maximum shareability.' }
    ],
    null,
    {
      image: 'https://cdn.shopify.com/s/files/1/0722/3194/4424/files/Content_marketing.png?v=1743663988',
      variants: [
        'Content Marketing',
        'UGC',
        'Product PR'
      ],
      bullets: [
        'UGC Content 👥',
        'Skit Content 🎭',
        'Engaging Story-Telling 📖',
        'Compelling Hooks 🪝',
        'Improved CTR 🚀'
      ],
      sections: [
        {
          title: 'Zero to Hero-D2C',
          content: `
            <div class="sp-grid sp-grid--2col">
              <div class="sp-card">
                <div class="sp-card__icon">🎯</div>
                <h3 class="sp-card__title">Revenue driven UGC</h3>
                <p class="sp-card__desc">Integrating USP of product, Specific video targeting the audience.</p>
              </div>
              <div class="sp-card">
                <div class="sp-card__icon">🎥</div>
                <h3 class="sp-card__title">Inhouse Production Capabilities</h3>
                <p class="sp-card__desc">Each person is skilled to shoot, edit the videos as per brand's preference.</p>
              </div>
              <div class="sp-card">
                <div class="sp-card__icon">⚡</div>
                <h3 class="sp-card__title">On time delivery</h3>
                <p class="sp-card__desc">Don't have to wait for creators to send the content and have full freedom on the content.</p>
              </div>
              <div class="sp-card">
                <div class="sp-card__icon">🪝</div>
                <h3 class="sp-card__title">Multiple hook on same content</h3>
                <p class="sp-card__desc">Get different versions of video to run on ads.</p>
              </div>
            </div>
          `
        }
      ]
    }
  ),
  '#/shopify-development': () => renderServicePage(
    'Shopify Development',
    'Custom, high-converting ecommerce experiences built on Shopify Plus.',
    [
      { title: 'Custom Theme Development', desc: 'Bespoke storefronts designed for speed, accessibility, and conversions.' },
      { title: 'App Integration', desc: 'Seamless connection with your ERP, CRM, and fulfillment networks.' },
      { title: 'Migration Services', desc: 'Secure and smooth transitions from WooCommerce, Magento, or custom platforms.' }
    ],
    null,
    {
      image: 'https://cdn.shopify.com/s/files/1/0722/3194/4424/files/MAIN.png?v=1743502733',
      variants: [
        'Website Development',
        'Development',
        'Redesign',
        'CRO'
      ],
      bullets: [
        'Shopify & Shopify Plus➕',
        'CRO ⬆️',
        'Bug Fixes & Troubleshooting 🧑🏻‍💻',
        'Custome Design 🖌️',
        'Mobile Optimization 📲',
        'Improved UX & UI 🎨'
      ],
      sections: [
        {
          title: 'Zero to Hero-D2C',
          content: `
            <div class="sp-grid sp-grid--2col">
              <div class="sp-card">
                <div class="sp-card__icon">🛒</div>
                <h3 class="sp-card__title">Conversion driven websites</h3>
                <p class="sp-card__desc">Our Shopify sites are built to sell—with trust badges placed where they matter most.</p>
              </div>
              <div class="sp-card">
                <div class="sp-card__icon">💻</div>
                <h3 class="sp-card__title">Custom liquid capabilities</h3>
                <p class="sp-card__desc">When templates fall short, we build features from scratch tailored to your brand.</p>
              </div>
              <div class="sp-card">
                <div class="sp-card__icon">📈</div>
                <h3 class="sp-card__title">Inhouse CRO capabilities</h3>
                <p class="sp-card__desc">Data-driven UI/UX improvements to maximize your store's conversion rate and average order value.</p>
              </div>
              <div class="sp-card">
                <div class="sp-card__icon">🛠️</div>
                <h3 class="sp-card__title">Monthly maintenance capabilities</h3>
                <p class="sp-card__desc">From festive banners to real-time help during sales, you’ll always have a team on standby.</p>
              </div>
            </div>
          `
        }
      ]
    }
  ),
  '#/app-development': () => renderServicePage(
    'App Development',
    'Native and cross-platform mobile applications that users love to engage with.',
    [
      { title: 'iOS & Android Native', desc: 'High-performance apps built in Swift and Kotlin for the ultimate user experience.' },
      { title: 'React Native & Flutter', desc: 'Efficient cross-platform solutions to get your product to market faster.' },
      { title: 'UI/UX Design', desc: 'Intuitive interfaces and smooth animations that delight your users.' }
    ],
    {
      client: 'Bounce Daily',
      title: "India's #1 EV rental app, backed by $200M",
      description: 'We rebuilt the product that was losing half its riders before their first ride. 45% dropped off during signup alone. We rebuilt their app end to end, design and engineering together, across iOS and Android.',
      image: '/images/services/app-dev.jpg',
      gallery: [
        '/case-studies/bounce/sub-1.png',
        '/case-studies/bounce/sub-2.mp4'
      ],
      highlights: [
        'Real-time verification and short instructional videos during signup',
        'Notification system that catches a rider before their plan expires',
        'Clear payment screen that makes what is owed impossible to misread'
      ]
    }
  ),
  '#/website-development': () => renderServicePage(
    'Website Development',
    'Fast, accessible, and stunning websites that serve as the foundation of your digital presence.',
    [
      { title: 'Corporate Websites', desc: 'Professional, scalable sites built with modern frameworks like React and Next.js.' },
      { title: 'Landing Pages', desc: 'High-converting, optimized pages designed for specific marketing campaigns.' },
      { title: 'CMS Integration', desc: 'Empower your team with headless CMS solutions like Sanity or Contentful.' }
    ],
    {
      client: 'Mizu AI',
      tags: ['2025', 'Product Design', 'Frontend', 'Backend', 'Full-Stack Build'],
      title: 'Shipping an AI-Native Automation Builder in 6 Weeks',
      description: "Andrej had an idea and nothing else: no product, no frontend, no backend, no team. He wanted to build an AI automation builder anyone could use, describe what you need in plain English, and it builds the automation for you, in a category already led by well-funded players like Lindy.<br/><br/>We built it with him, design and engineering together, from the first sketch to a working product: auth, onboarding, an AI-powered builder, a visual canvas, five real integrations, and billing. All of it live in six weeks.",
      challenge: "The hard part wasn't the automation logic. It was making all of that invisible. A user should be able to type 'send me a Slack message every time I get a new lead' and just watch it work, never seeing the credential handling, the account setup, or the billing rules making that possible underneath.<br/><br/>And Andrej didn't have six months to get there. He had six weeks, a category full of funded competitors, and a bar that wasn't 'does it work,' it was 'does it feel effortless.'",
      approach: "We started with the experience, not the screens: how does someone's plain-English request actually turn into a working automation? How does that automation become something they can see and trust, instead of a black box? We mapped that journey before building anything.<br/><br/>Design and engineering moved together the whole way through, not design-then-handoff. That's the only way a product this complex ships as one coherent thing in six weeks, instead of a UI bolted onto a backend built after the fact.<br/><br/>We built a conversational builder first: describe what you want, the AI asks what it needs to know, then builds it, with a visual canvas underneath for anyone who wants to see how it works. Five integrations (Gmail, Slack, Calendar, Notion, Docs) all set up the same reliable way, so adding a sixth later doesn't mean rebuilding the system. And a billing and credit system that limits usage without ever feeling like a paywall.",
      image: '/case-studies/mizuai/image.png',
      gallery: [
        '/case-studies/mizuai/image2.png',
        '/case-studies/mizuai/image3.png',
        '/case-studies/mizuai/image4.png',
        '/case-studies/mizuai/image6.png'
      ],
      testimonial: {
        text: "Working with Harshil and DreamLaunch to build my automation builder MVP was great. They didn't just code what I asked for. They built a solid foundation that I can actually scale from. If you need a technical partner who understands both the build AND the business side of early-stage products, I'd highly recommend DreamLaunch.",
        author: 'Andrej',
        role: 'Founder, Mizu AI'
      }
    }
  ),
  '#/software-development': () => renderServicePage(
    'Software Development',
    'Custom web applications and SaaS platforms engineered for scale and security.',
    [
      { title: 'Full-Stack Engineering', desc: 'Robust backends and dynamic frontends built with Node.js, Python, and React.' },
      { title: 'Cloud Infrastructure', desc: 'Scalable architecture on AWS, GCP, or Azure designed for high availability.' },
      { title: 'API Development', desc: 'Secure, RESTful, and GraphQL APIs to power your digital ecosystem.' }
    ],
    {
      client: 'Mrsam AI',
      tags: ['2025', 'Product Design & Full-Stack', '$500K Seed Raised'],
      title: 'We Built the RTL-First, No-Code Website Builder That Closed a $500K Seed Round',
      description: 'Mustafa wanted to build Canva for websites, but for freelancers and small businesses in Arabic-speaking markets, built on their phone, with AI writing the copy for them. Nothing like it existed built for Arabic first instead of English first. We designed and built the whole thing with him: a tap-to-build mobile canvas, an AI assistant that writes real Arabic copy, and a way to publish or hand off the finished site. Ten weeks later it was live. Mustafa closed a $500K seed round shortly after.',
      challenge: "Every website builder on the market treated Arabic as an afterthought, a toggle bolted onto a layout built for English. For Mrsam's users, that toggle was the whole product. Arabic and right-to-left layout had to work as well as English does everywhere else, not as a workaround.<br/><br/>And it had to work on a phone. Most of Mrsam's users would build their entire site from a mobile screen, in one sitting, start to finish, with no coming back later to fix what broke.",
      approach: "We rebuilt the canvas around a thumb, not a mouse: tap to add a section, long-press to reorder, everything snapping into place without the drag-and-drop patterns that fall apart on a small screen.<br/><br/>Every section a business could add (text, image, button, header, and more) got its own simple editor, with Arabic and English both treated as first-class, right down to fonts chosen to look native in Arabic, not translated.<br/><br/>The AI writing assistant was tuned to produce real Arabic copy for the business type it was given, not English translated after the fact, so a WhatsApp call-to-action or a services headline actually read the way a business would write it.<br/><br/>And because every site lived in one shared format underneath, we gave Mustafa's users three ways out: a live link to share immediately, a downloadable file to host anywhere, or the raw file to hand to a developer later. Go live in minutes, or build on top of it, either way.",
      image: '/case-studies/mrsam/image.png',
      gallery: [
        '/case-studies/mrsam/image2.png',
        '/case-studies/mrsam/image3.png',
        '/case-studies/mrsam/image4.png'
      ],
      testimonial: {
        text: "DreamLaunch built our AI website builder from zero in 10 weeks: auth, canvas, AI content, RTL/Arabic support, all of it. We closed our seed round right after launch, and I don't think that's a coincidence.",
        author: 'Mustafa',
        role: 'Founder, Mrsam AI'
      }
    }
  ),
  '#/crm-development': () => renderServicePage(
    'CRM Development',
    'Customized customer relationship management tools to streamline your operations.',
    [
      { title: 'Salesforce & HubSpot', desc: 'Expert implementation and customization of leading CRM platforms.' },
      { title: 'Custom CRM Solutions', desc: 'Tailored systems built from the ground up to fit your unique workflows.' },
      { title: 'Workflow Automation', desc: 'Automate repetitive tasks and integrate your CRM with other business tools.' }
    ],
    null,
    {
      badge: 'DEVELOPMENT SERVICES',
      image: '/case-studies/mrsam/image.png',
      variants: [
        'Salesforce',
        'HubSpot',
        'Custom CRM'
      ],
      bullets: [
        'Custom CRM Solutions 💼',
        'Workflow Automation ⚙️',
        'Sales Pipeline Tracking 📈',
        '3rd-party Integrations 🔌'
      ],
      sections: [
        {
          title: 'Optimize your sales engine',
          content: `
            <div class="sp-grid sp-grid--2col">
              <div class="sp-card">
                <div class="sp-card__icon">📊</div>
                <h3 class="sp-card__title">Data Centralization</h3>
                <p class="sp-card__desc">Bring all your customer data into one unified, actionable dashboard.</p>
              </div>
              <div class="sp-card">
                <div class="sp-card__icon">⚡</div>
                <h3 class="sp-card__title">Automated Workflows</h3>
                <p class="sp-card__desc">Eliminate manual data entry and let your sales team focus on closing deals.</p>
              </div>
            </div>
          `
        }
      ]
    }
  ),
  '#/contact': renderContactPage,
  '#/portfolio': renderPortfolioPage
};

const renderApp = () => {
  const path = window.location.hash || '#/';
  let content = '';
  
  if (pages[path]) {
    content = pages[path]();
  } else {
    content = renderHome(); // Fallback to home
  }

  document.querySelector('#app').innerHTML = `
    <div class="page">
      <div class="page__bg" aria-hidden="true"></div>
      ${renderNavbar()}
      ${content}
      ${renderFooter()}
    </div>
  `;

  // Update document title for basic SEO
  const h1 = document.querySelector('h1');
  if (h1) {
    document.title = h1.textContent.trim() + ' - Digi Sidekick';
  } else {
    document.title = 'Digi Sidekick';
  }

  // Re-initialize all scripts after DOM updates
  initMobileNav();
  initTeamRows();
  initTestimonialCarousel();
  initScrollAnimations();
  initVariants();
  initVideos();
  if (path === '#/' || path === '') {
    initUGCAnimations();
  }
};

// Listen for route changes
window.addEventListener('hashchange', () => {
  window.scrollTo(0, 0);
  renderApp();
});

// Initial render
renderApp();

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

function initUGCAnimations() {
  if (typeof gsap === 'undefined') {
    console.error('GSAP not loaded yet');
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  const videoItems = document.querySelectorAll('.ugc-item');
  const popup = document.querySelector('.popUpForVideo');
  if (!popup) return;
  const popupVideo = popup.querySelector('video');
  const closePopup = document.querySelector('.close-popup');

  videoItems.forEach((item) => {
    item.addEventListener('click', function() {
      const sourceVideo = this.querySelector('video source');
      if (sourceVideo) {
        popupVideo.src = sourceVideo.getAttribute('src');
        popup.classList.add('active');
        popupVideo.play();
      }
    });
  });

  closePopup.addEventListener('click', function() {
    popup.classList.remove('active');
    popupVideo.pause();
    popupVideo.currentTime = 0;
  });

  popup.addEventListener('click', function(e) {
    if (e.target === popup) {
      popup.classList.remove('active');
      popupVideo.pause();
      popupVideo.currentTime = 0;
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && popup.classList.contains('active')) {
      popup.classList.remove('active');
      popupVideo.pause();
      popupVideo.currentTime = 0;
    }
  });

  const videoCards = document.querySelectorAll('.video-thumbnail');
  videoCards.forEach((video) => {
    video.addEventListener('mouseover', function () {
      if (this.paused) this.play();
    });
    video.addEventListener('mouseout', function () {
      this.pause();
      this.currentTime = 0;
    });
  });

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
    // Mobile uses native CSS grid scrolling now, no GSAP pinning needed.
  });
}

// We need to wait for GSAP to be available since it's loaded asynchronously in head via CDN.
window.addEventListener('load', () => {
  setTimeout(initUGCAnimations, 500);
});

function initVariants() {
  const buttons = document.querySelectorAll('.sp-variant-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const container = e.target.closest('.sp-variants');
      if (container) {
        container.querySelectorAll('.sp-variant-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
      }
    });
  });
}

function initVideos() {
  const videos = document.querySelectorAll('video[data-hover-play]');
  videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
      video.play().catch(() => {});
    });
    video.addEventListener('mouseleave', () => {
      video.pause();
    });
  });
}
