/* ============================================================
   Tam Thất Quân Nguyễn — main.js
   Pure vanilla ES6+ JavaScript — no frameworks
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     1. MOBILE NAV TOGGLE
     ---------------------------------------------------------- */
  const menuBtn = document.getElementById('menu-btn')
  const menuIconOpen = document.getElementById('menu-icon-open')
  const menuIconClose = document.getElementById('menu-icon-close')
  const navMobile = document.getElementById('nav-mobile')

  if (menuBtn && navMobile) {
    menuBtn.addEventListener('click', () => {
      const isOpen = navMobile.classList.toggle('open')
      menuBtn.setAttribute('aria-expanded', isOpen)
      menuIconOpen.style.display = isOpen ? 'none' : 'block'
      menuIconClose.style.display = isOpen ? 'block' : 'none'
    })

    // Close mobile nav on link click
    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMobile.classList.remove('open')
        menuBtn.setAttribute('aria-expanded', 'false')
        menuIconOpen.style.display = 'block'
        menuIconClose.style.display = 'none'
      })
    })
  }

  /* ----------------------------------------------------------
     2. PRODUCT IMAGE GALLERY
     ---------------------------------------------------------- */
  const galleryMain = document.getElementById('gallery-main')
  const thumbButtons = document.querySelectorAll('.gallery-thumb')

  thumbButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      // Update main image
      const src = btn.querySelector('img').getAttribute('src')
      const alt = btn.querySelector('img').getAttribute('alt')
      galleryMain.setAttribute('src', src)
      if (alt) galleryMain.setAttribute('alt', alt)

      // Update active state
      thumbButtons.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
    })
  })

  /* ----------------------------------------------------------
     3. VARIANT SELECTOR
     ---------------------------------------------------------- */
  const variants = [
    { id: 'std', label: 'Standard Pack', price: '$29.99' },
    { id: 'val', label: 'Value Pack', price: '$79.99' },
    { id: 'fam', label: 'Family Pack', price: '$124.99' },
  ]

  const variantLabels = document.querySelectorAll('.variant-label')
  const priceDisplay = document.getElementById('price-display')
  const priceLabel = document.getElementById('price-label')

  variantLabels.forEach(label => {
    const radio = label.querySelector('input[type="radio"]')
    if (radio) {
      radio.addEventListener('change', () => {
        // Update visual selection
        variantLabels.forEach(l => l.classList.remove('selected'))
        label.classList.add('selected')

        // Update price display
        const variant = variants.find(v => v.id === radio.value)
        if (variant && priceDisplay && priceLabel) {
          priceDisplay.textContent = variant.price
          priceLabel.textContent = variant.label
        }
      })
    }
  })

  /* ----------------------------------------------------------
     4. VIDEO PLAY / PAUSE
     ---------------------------------------------------------- */
  const videoWrap = document.getElementById('video-wrap')
  const videoEl = document.getElementById('product-video')
  const videoOverlay = document.getElementById('video-overlay')

  if (videoWrap && videoEl && videoOverlay) {
    videoWrap.addEventListener('click', () => {
      if (videoEl.paused) {
        videoEl.play()
        videoOverlay.classList.add('hidden')
      } else {
        videoEl.pause()
        videoOverlay.classList.remove('hidden')
      }
    })

    videoEl.addEventListener('ended', () => {
      videoOverlay.classList.remove('hidden')
    })
  }

  /* ----------------------------------------------------------
     5. TABS — What's Included / Serving Guide
     ---------------------------------------------------------- */
  const tabButtons = document.querySelectorAll('.tab-btn')
  const tabPanels = document.querySelectorAll('.tab-panel')

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('aria-controls')

      tabButtons.forEach(b => {
        b.classList.remove('active')
        b.setAttribute('aria-selected', 'false')
      })
      btn.classList.add('active')
      btn.setAttribute('aria-selected', 'true')

      tabPanels.forEach(panel => {
        panel.classList.remove('active')
        if (panel.id === target) {
          panel.classList.add('active')
        }
      })
    })
  })

  /* ----------------------------------------------------------
     6. REVIEW TAG FILTERS
     ---------------------------------------------------------- */
  const tagButtons = document.querySelectorAll('.tag-btn')
  const reviewCards = document.querySelectorAll('.review-card')

  tagButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.getAttribute('data-tag')
      const isActive = btn.classList.contains('active')

      // Toggle active state
      tagButtons.forEach(b => b.classList.remove('active'))
      if (!isActive) {
        btn.classList.add('active')
        btn.setAttribute('aria-pressed', 'true')
      } else {
        btn.setAttribute('aria-pressed', 'false')
      }

      // Filter review cards
      const activeTag = isActive ? null : tag
      reviewCards.forEach(card => {
        if (!activeTag || card.getAttribute('data-tag') === activeTag) {
          card.classList.remove('hidden')
        } else {
          card.classList.add('hidden')
        }
      })

      // Update all aria-pressed
      tagButtons.forEach(b => {
        b.setAttribute('aria-pressed', b.classList.contains('active'))
      })
    })
  })

  /* ----------------------------------------------------------
     7. FAQ ACCORDION
     ---------------------------------------------------------- */
  const faqItems = document.querySelectorAll('.faq-item')

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question')
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open')

        // Close all
        faqItems.forEach(fi => {
          fi.classList.remove('open')
          fi.querySelector('.faq-question').setAttribute('aria-expanded', 'false')
        })

        // Open clicked (if it was closed)
        if (!isOpen) {
          item.classList.add('open')
          question.setAttribute('aria-expanded', 'true')
        }
      })
    }
  })

  /* ----------------------------------------------------------
     8. EMAIL CAPTURE FORM
     ---------------------------------------------------------- */
  const emailForm = document.getElementById('email-form')
  const emailBtn = document.getElementById('email-btn')

  if (emailForm && emailBtn) {
    emailForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const input = emailForm.querySelector('input[type="email"]')
      if (input && input.value) {
        emailBtn.textContent = 'Subscribed ✓'
        emailBtn.disabled = true
        input.disabled = true
      }
    })
  }

  /* ----------------------------------------------------------
     9. FOOTER EMAIL FORM
     ---------------------------------------------------------- */
  const footerForm = document.getElementById('footer-form')
  const footerBtn = document.getElementById('footer-btn')

  if (footerForm && footerBtn) {
    footerForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const input = footerForm.querySelector('input[type="email"]')
      if (input && input.value) {
        footerBtn.textContent = 'Subscribed ✓'
        footerBtn.disabled = true
        input.disabled = true
      }
    })
  }

  /* ----------------------------------------------------------
     10. SMOOTH SCROLL FOR COMPARISON BUTTONS
     ---------------------------------------------------------- */
  document.querySelectorAll('[data-scroll-to]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-scroll-to')
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })

  /* ----------------------------------------------------------
     11. OPEN FIRST FAQ BY DEFAULT
     ---------------------------------------------------------- */
  const firstFaq = document.querySelector('.faq-item')
  if (firstFaq) {
    firstFaq.classList.add('open')
    const firstQ = firstFaq.querySelector('.faq-question')
    if (firstQ) firstQ.setAttribute('aria-expanded', 'true')
  }

})
