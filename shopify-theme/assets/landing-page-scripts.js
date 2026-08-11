document.addEventListener('DOMContentLoaded', function () {
  // Mobile Nav Toggle
  var navToggleBtn = document.querySelector('[data-mobile-nav-toggle]');
  var mobileMenu = document.querySelector('[data-mobile-menu]');
  if (navToggleBtn && mobileMenu) {
    navToggleBtn.addEventListener('click', function () {
      var isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
      }
    });
  }

  // Sticky Cart Bar visibility on scroll
  var stickyBar = document.querySelector('[data-sticky-cart-bar]');
  if (stickyBar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 480) {
        stickyBar.classList.remove('translate-y-full');
        stickyBar.classList.add('translate-y-0');
      } else {
        stickyBar.classList.add('translate-y-full');
        stickyBar.classList.remove('translate-y-0');
      }
    }, { passive: true });
  }

  // Product Image Thumbnails
  var mainImage = document.querySelector('[data-product-main-image]');
  var thumbnailBtns = document.querySelectorAll('[data-product-thumb]');
  if (mainImage && thumbnailBtns.length > 0) {
    thumbnailBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var src = btn.getAttribute('data-img-src');
        if (src) {
          mainImage.src = src;
        }
        thumbnailBtns.forEach(function (b) {
          b.classList.remove('border-gold', 'shadow-gold');
          b.classList.add('border-stone-300');
        });
        btn.classList.add('border-gold', 'shadow-gold');
        btn.classList.remove('border-stone-300');
      });
    });
  }

  // Variant Selector Handling
  var variantCards = document.querySelectorAll('[data-variant-card]');
  var hiddenVariantInput = document.querySelector('input[name="id"][data-product-variant-id]');
  var priceDisplay = document.querySelector('[data-product-price-display]');
  var comparePriceDisplay = document.querySelector('[data-product-compare-price-display]');
  var savingsDisplay = document.querySelector('[data-product-savings-display]');
  var stockDisplay = document.querySelector('[data-product-stock-display]');

  if (variantCards.length > 0) {
    variantCards.forEach(function (card) {
      card.addEventListener('click', function () {
        var variantId = card.getAttribute('data-variant-id');
        var price = card.getAttribute('data-variant-price');
        var comparePrice = card.getAttribute('data-variant-compare-price');
        var savings = card.getAttribute('data-variant-savings');
        var stock = card.getAttribute('data-variant-stock');

        if (hiddenVariantInput && variantId) {
          hiddenVariantInput.value = variantId;
        }
        if (priceDisplay && price) {
          priceDisplay.textContent = price;
        }
        if (comparePriceDisplay) {
          if (comparePrice) {
            comparePriceDisplay.textContent = comparePrice;
            comparePriceDisplay.classList.remove('hidden');
          } else {
            comparePriceDisplay.classList.add('hidden');
          }
        }
        if (savingsDisplay) {
          if (savings) {
            savingsDisplay.textContent = 'Tiết kiệm ' + savings;
            savingsDisplay.classList.remove('hidden');
          } else {
            savingsDisplay.classList.add('hidden');
          }
        }
        if (stockDisplay && stock) {
          stockDisplay.textContent = 'Chỉ còn ' + stock + ' hộp trong kho — đặt ngay để đảm bảo hàng';
        }

        variantCards.forEach(function (c) {
          c.classList.remove('border-forest', 'bg-pale-fern');
          c.classList.add('border-stone-300', 'bg-canvas');
          c.setAttribute('aria-pressed', 'false');
        });
        card.classList.add('border-forest', 'bg-pale-fern');
        card.classList.remove('border-stone-300', 'bg-canvas');
        card.setAttribute('aria-pressed', 'true');
      });
    });
  }

  // FAQ Accordion
  var faqItems = document.querySelectorAll('[data-faq-item]');
  faqItems.forEach(function (item) {
    var btn = item.querySelector('[data-faq-button]');
    var content = item.querySelector('[data-faq-content]');
    var icon = item.querySelector('[data-faq-icon]');
    if (btn && content) {
      btn.addEventListener('click', function () {
        var isExpanded = btn.getAttribute('aria-expanded') === 'true';
        // Close all
        faqItems.forEach(function (other) {
          var obtn = other.querySelector('[data-faq-button]');
          var ocontent = other.querySelector('[data-faq-content]');
          var oicon = other.querySelector('[data-faq-icon]');
          if (obtn && ocontent) {
            obtn.setAttribute('aria-expanded', 'false');
            ocontent.classList.add('hidden');
            if (oicon) oicon.classList.remove('rotate-180');
          }
        });
        if (!isExpanded) {
          btn.setAttribute('aria-expanded', 'true');
          content.classList.remove('hidden');
          if (icon) icon.classList.add('rotate-180');
        }
      });
    }
  });

  // Included Addon Tabs
  var tabBtns = document.querySelectorAll('[data-addon-tab]');
  var tabPanels = document.querySelectorAll('[data-addon-panel]');
  if (tabBtns.length > 0) {
    tabBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetPanelId = btn.getAttribute('data-addon-tab');
        tabBtns.forEach(function (b) {
          b.classList.remove('border-forest', 'text-forest');
          b.classList.add('border-transparent', 'text-stone-600');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('border-forest', 'text-forest');
        btn.classList.remove('border-transparent', 'text-stone-600');
        btn.setAttribute('aria-selected', 'true');

        tabPanels.forEach(function (panel) {
          if (panel.getAttribute('data-addon-panel') === targetPanelId) {
            panel.classList.remove('hidden');
          } else {
            panel.classList.add('hidden');
          }
        });
      });
    });
  }

  // Reviews Star Filter
  var starFilterBtns = document.querySelectorAll('[data-star-filter]');
  var reviewCards = document.querySelectorAll('[data-review-card]');
  if (starFilterBtns.length > 0) {
    starFilterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var stars = btn.getAttribute('data-star-filter');
        reviewCards.forEach(function (card) {
          var cardStars = card.getAttribute('data-review-stars');
          if (!stars || stars === 'all' || cardStars === stars) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  // Video Module Play Overlay
  var videoModule = document.querySelector('[data-video-module]');
  if (videoModule) {
    var videoEl = videoModule.querySelector('video');
    var playBtn = videoModule.querySelector('[data-play-button]');
    var overlay = videoModule.querySelector('[data-video-overlay]');
    if (videoEl && playBtn) {
      playBtn.addEventListener('click', function () {
        videoEl.play();
        videoEl.controls = true;
        if (overlay) overlay.classList.add('hidden');
        playBtn.classList.add('hidden');
      });
    }
  }
});
