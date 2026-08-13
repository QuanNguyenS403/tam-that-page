/*
 * Tam Thất Quân Nguyễn — Vanilla Web Components
 * Không dùng React. Toàn bộ logic trạng thái được đóng gói bằng Custom Elements.
 */

/* <mobile-nav> — menu điều hướng trên di động */
class MobileNav extends HTMLElement {
  connectedCallback() {
    this.toggle = this.querySelector('[data-nav-toggle]');
    this.panel = this.querySelector('[data-nav-panel]');
    this.iconOpen = this.querySelector('[data-icon-open]');
    this.iconClose = this.querySelector('[data-icon-close]');
    if (!this.toggle || !this.panel) return;
    this.toggle.addEventListener('click', () => this.setOpen(this.panel.hidden));
    this.panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => this.setOpen(false)));
  }
  setOpen(open) {
    this.panel.hidden = !open;
    this.toggle.setAttribute('aria-expanded', String(open));
    if (this.iconOpen) this.iconOpen.hidden = open;
    if (this.iconClose) this.iconClose.hidden = !open;
  }
}
customElements.define('mobile-nav', MobileNav);

/* <sticky-header> — đổi nền khi cuộn trang */
class StickyHeader extends HTMLElement {
  connectedCallback() {
    this.scrolledClasses = ['bg-canvas/95', 'backdrop-blur-glass', 'shadow-xs', 'border-b', 'border-stone-300'];
    this.onScroll = () => {
      const on = window.scrollY > 60;
      this.classList.toggle('bg-transparent', !on);
      this.scrolledClasses.forEach((c) => this.classList.toggle(c, on));
    };
    this.onScroll();
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }
  disconnectedCallback() {
    window.removeEventListener('scroll', this.onScroll);
  }
}
customElements.define('sticky-header', StickyHeader);

/* <landing-accordion> — FAQ */
class LandingAccordion extends HTMLElement {
  connectedCallback() {
    this.items = Array.from(this.querySelectorAll('[data-accordion-item]'));
    this.items.forEach((item, index) => {
      const trigger = item.querySelector('[data-accordion-trigger]');
      trigger.addEventListener('click', () => {
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';
        this.items.forEach((other, i) => this.setItem(other, !isOpen && i === index));
      });
    });
  }
  setItem(item, open) {
    const trigger = item.querySelector('[data-accordion-trigger]');
    const panel = item.querySelector('[data-accordion-panel]');
    const chevron = item.querySelector('[data-accordion-chevron]');
    trigger.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
    if (chevron) chevron.classList.toggle('rotate-180', open);
  }
}
customElements.define('landing-accordion', LandingAccordion);

/* <landing-tabs> — tab Bộ sản phẩm / Hướng dẫn sử dụng */
class LandingTabs extends HTMLElement {
  connectedCallback() {
    this.tabs = Array.from(this.querySelectorAll('[role="tab"]'));
    this.tabs.forEach((tab) => tab.addEventListener('click', () => this.select(tab.dataset.tab)));
    if (this.tabs[0]) this.select(this.tabs[0].dataset.tab);
  }
  select(id) {
    this.tabs.forEach((tab) => {
      const active = tab.dataset.tab === id;
      tab.setAttribute('aria-selected', String(active));
      tab.classList.toggle('border-forest', active);
      tab.classList.toggle('text-forest', active);
      tab.classList.toggle('border-transparent', !active);
      tab.classList.toggle('text-stone-600', !active);
    });
    this.querySelectorAll('[role="tabpanel"]').forEach((panel) => {
      panel.hidden = panel.dataset.panel !== id;
    });
  }
}
customElements.define('landing-tabs', LandingTabs);

/* <product-gallery> — thư viện ảnh sản phẩm */
class ProductGallery extends HTMLElement {
  connectedCallback() {
    this.main = this.querySelector('[data-gallery-main]');
    this.thumbs = Array.from(this.querySelectorAll('[data-gallery-thumb]'));
    this.thumbs.forEach((thumb) => thumb.addEventListener('click', () => this.select(thumb)));
    if (this.thumbs[0]) this.select(this.thumbs[0]);
  }
  select(thumb) {
    this.main.src = thumb.dataset.src;
    this.main.alt = thumb.dataset.alt || this.main.alt;
    this.thumbs.forEach((t) => {
      const active = t === thumb;
      t.classList.toggle('border-gold', active);
      t.classList.toggle('shadow-gold', active);
      t.classList.toggle('border-stone-300', !active);
    });
  }
}
customElements.define('product-gallery', ProductGallery);

/* <variant-picker> — chọn gói sản phẩm + thêm vào giỏ */
class VariantPicker extends HTMLElement {
  connectedCallback() {
    this.options = Array.from(this.querySelectorAll('[data-variant]'));
    this.priceEl = this.querySelector('[data-variant-price]');
    this.compareEl = this.querySelector('[data-variant-compare]');
    this.savingsEl = this.querySelector('[data-variant-savings]');
    this.stockEl = this.querySelector('[data-variant-stock]');
    this.idInput = this.querySelector('[data-variant-id]');
    this.options.forEach((option) => option.addEventListener('click', () => this.select(option)));
    if (this.options[0]) this.select(this.options[0]);
  }
  select(option) {
    this.options.forEach((o) => {
      const active = o === option;
      o.setAttribute('aria-pressed', String(active));
      o.classList.toggle('border-forest', active);
      o.classList.toggle('bg-pale-fern', active);
      o.classList.toggle('border-stone-300', !active);
      o.classList.toggle('bg-canvas', !active);
    });
    const d = option.dataset;
    if (this.priceEl) this.priceEl.textContent = d.price || '';
    if (this.compareEl) this.compareEl.textContent = d.compare || '';
    if (this.savingsEl) this.savingsEl.textContent = d.savings ? 'Tiết kiệm ' + d.savings : '';
    if (this.stockEl) this.stockEl.textContent = d.stock || '';
    if (this.idInput) this.idInput.value = d.variantId || '';
  }
}
customElements.define('variant-picker', VariantPicker);

/* <add-to-cart> — gửi sản phẩm vào giỏ hàng Shopify qua Cart AJAX API */
class AddToCart extends HTMLElement {
  connectedCallback() {
    this.form = this.querySelector('form');
    this.button = this.querySelector('[data-atc-label]');
    if (!this.form) return;
    this.form.addEventListener('submit', async (event) => {
      const idField = this.form.querySelector('[name="id"]');
      if (!idField || !idField.value) return; // để Shopify xử lý mặc định
      event.preventDefault();
      const original = this.button.textContent;
      try {
        await fetch(window.Shopify && window.Shopify.routes ? window.Shopify.routes.root + 'cart/add.js' : '/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items: [{ id: Number(idField.value), quantity: 1 }] })
        });
        this.button.textContent = '✓ Đã Thêm Vào Giỏ!';
        document.dispatchEvent(new CustomEvent('cart:updated'));
      } catch (e) {
        this.button.textContent = 'Không thể thêm — thử lại';
      }
      setTimeout(() => { this.button.textContent = original; }, 2500);
    });
  }
}
customElements.define('add-to-cart', AddToCart);

/* <sticky-cart> — thanh đặt hàng nhanh hiện khi cuộn */
class StickyCart extends HTMLElement {
  connectedCallback() {
    this.threshold = Number(this.dataset.threshold || 480);
    this.onScroll = () => {
      const visible = window.scrollY > this.threshold;
      this.classList.toggle('translate-y-0', visible);
      this.classList.toggle('translate-y-full', !visible);
    };
    this.onScroll();
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }
  disconnectedCallback() {
    window.removeEventListener('scroll', this.onScroll);
  }
}
customElements.define('sticky-cart', StickyCart);

/* <review-filter> — lọc đánh giá theo số sao */
class ReviewFilter extends HTMLElement {
  connectedCallback() {
    this.buttons = Array.from(this.querySelectorAll('[data-star-filter]'));
    this.cards = Array.from(this.querySelectorAll('[data-review-stars]'));
    this.active = null;
    this.buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const value = button.dataset.starFilter;
        this.active = this.active === value ? null : value;
        this.buttons.forEach((b) => b.classList.toggle('font-bold', b.dataset.starFilter === this.active));
        this.cards.forEach((card) => {
          card.hidden = this.active !== null && card.dataset.reviewStars !== this.active;
        });
      });
    });
  }
}
customElements.define('review-filter', ReviewFilter);

/* <video-player> — poster + nút play */
class VideoPlayer extends HTMLElement {
  connectedCallback() {
    this.video = this.querySelector('video');
    this.overlay = this.querySelector('[data-video-overlay]');
    const button = this.querySelector('[data-video-play]');
    if (!button || !this.video) return;
    button.addEventListener('click', () => {
      this.video.controls = true;
      this.video.play();
      if (this.overlay) this.overlay.hidden = true;
    });
  }
}
customElements.define('video-player', VideoPlayer);

/* <count-up> — số liệu đếm tăng khi vào viewport */
class CountUp extends HTMLElement {
  connectedCallback() {
    const target = Number(this.dataset.value || 0);
    const duration = Number(this.dataset.duration || 1800);
    const suffix = this.dataset.suffix || '';
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(target * (1 - Math.pow(1 - progress, 3)));
        this.textContent = value.toLocaleString('vi-VN') + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.2 });
    observer.observe(this);
  }
}
customElements.define('count-up', CountUp);

/* Hiệu ứng xuất hiện khi cuộn (thay cho framer-motion) */
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('opacity-0', 'translate-y-6');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });
  targets.forEach((el) => {
    el.classList.add('transition-all', 'duration-700', 'ease-out');
    observer.observe(el);
  });
});
