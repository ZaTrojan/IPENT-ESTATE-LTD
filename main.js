/* ========================================
   Ipent Estates — main.js
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ---------- DOM references ----------
  const modal = document.getElementById('enquiryModal');
  const modalContent = modal.querySelector('.modal-content');
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  let lastFocusedEl = null;

  // ---------- Hamburger menu ----------
  function openMobileNav() {
    hamburger.classList.add('active');
    mobileNav.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    if (mobileNav.classList.contains('active')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  // Close mobile nav when a link is clicked
  mobileNav.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', () => {
      closeMobileNav();
    });
  });

  // ---------- Enquiry modal ----------
  function getFocusable() {
    return modalContent.querySelectorAll('button, input, select, textarea, a[href]');
  }

  function openEnquiry() {
    lastFocusedEl = document.activeElement;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const focusable = getFocusable();
    if (focusable.length) focusable[0].focus();
  }

  function closeEnquiry() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  // Expose to global scope for inline onclick handlers
  window.openEnquiry = openEnquiry;
  window.closeEnquiry = closeEnquiry;

  // ---------- Form submission ----------
  function submitForm(e) {
    e.preventDefault();
    const form = document.getElementById('enquiryForm');
    const btn = form.querySelector('button[type="submit"]');
    const msgDiv = document.getElementById('formMessage');

    btn.disabled = true;
    btn.textContent = 'Sending...';

    // TODO: Replace this simulated submission with a real endpoint
    // e.g. Formspree, EmailJS, or your own backend API
    setTimeout(() => {
      msgDiv.className = 'form-message success';
      msgDiv.textContent = "Enquiry sent successfully. We'll contact you soon.";
      form.reset();
      btn.disabled = false;
      btn.textContent = 'Send enquiry';

      setTimeout(() => {
        closeEnquiry();
        msgDiv.textContent = '';
        msgDiv.className = '';
      }, 2000);
    }, 800);
  }

  window.submitForm = submitForm;

  // Close modal on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeEnquiry();
  });

  // Keyboard handling for modal
  document.addEventListener('keydown', (e) => {
    // Close mobile nav on Escape
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
      closeMobileNav();
      hamburger.focus();
      return;
    }

    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeEnquiry();
      return;
    }

    // Focus trapping within modal
    if (e.key === 'Tab') {
      const focusable = Array.from(getFocusable());
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // ---------- Smooth scroll for anchor links ----------
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ---------- Scroll-reveal animations ----------
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // ---------- Header scroll effect ----------
  const header = document.querySelector('header');
  let lastScrollY = 0;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
      header.style.boxShadow = 'none';
    }

    lastScrollY = currentScrollY;
  }, { passive: true });
});

