/* ═══════════════════════════════════════════════════
   Dr. Meera Sharma — Dermatology Clinic
   Interactive JavaScript
   ═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  // ── Mobile Navigation ──
  const navToggle = document.getElementById('nav-toggle');
  const navMobile = document.getElementById('nav-mobile');

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', function () {
      navMobile.classList.toggle('active');
      const isOpen = navMobile.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isOpen);
      // Swap icon between menu and close
      navToggle.innerHTML = isOpen
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    });
  }

  // Global helper for closing mobile nav from inline onclick
  window.closeMobileNav = function () {
    if (navMobile) navMobile.classList.remove('active');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    }
  };

  // ── Sticky Nav Shadow ──
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ── FAQ Accordion ──
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', function () {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(function (other) {
        other.classList.remove('active');
        var otherAnswer = other.querySelector('.faq-answer');
        if (otherAnswer) otherAnswer.style.maxHeight = '0';
        var otherBtn = other.querySelector('.faq-question');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ── Timeline Scroll Reveal ──
  const timelineItems = document.querySelectorAll('.timeline-item');
  if (timelineItems.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    timelineItems.forEach(function (item, index) {
      item.style.transitionDelay = (index * 0.05) + 's';
      observer.observe(item);
    });
  }

  // ── Before/After Comparison Sliders ──
  const sliders = document.querySelectorAll('.result-slider');
  sliders.forEach(function (slider) {
    var isDragging = false;
    var divider = slider.querySelector('.result-divider');
    var afterEl = slider.querySelector('.result-after');

    function updatePosition(x) {
      var rect = slider.getBoundingClientRect();
      var posX = x - rect.left;
      var percent = Math.max(5, Math.min(95, (posX / rect.width) * 100));
      divider.style.left = percent + '%';
      afterEl.style.clipPath = 'inset(0 0 0 ' + percent + '%)';
    }

    slider.addEventListener('mousedown', function (e) {
      isDragging = true;
      updatePosition(e.clientX);
      e.preventDefault();
    });

    window.addEventListener('mousemove', function (e) {
      if (isDragging) {
        updatePosition(e.clientX);
        e.preventDefault();
      }
    });

    window.addEventListener('mouseup', function () {
      isDragging = false;
    });

    // Touch support
    slider.addEventListener('touchstart', function (e) {
      isDragging = true;
      updatePosition(e.touches[0].clientX);
    }, { passive: true });

    slider.addEventListener('touchmove', function (e) {
      if (isDragging) {
        updatePosition(e.touches[0].clientX);
      }
    }, { passive: true });

    slider.addEventListener('touchend', function () {
      isDragging = false;
    });
  });

  // ── Booking Form Submission (mailto) ──
  const bookingForm = document.getElementById('booking-form');
  const bookingSuccess = document.getElementById('booking-success');

  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form values
      var name = document.getElementById('name').value.trim();
      var phone = document.getElementById('phone').value.trim();
      var email = document.getElementById('email').value.trim();
      var treatment = document.getElementById('treatment').value;
      var date = document.getElementById('date').value;
      var time = document.getElementById('time').value;
      var message = document.getElementById('message').value.trim();

      if (!name || !phone) {
        return;
      }

      // Construct email body
      var body = "New Appointment Request\n\n";
      body += "Name: " + name + "\n";
      body += "Phone: " + phone + "\n";
      if (email) body += "Email: " + email + "\n";
      if (treatment) body += "Treatment: " + treatment + "\n";
      if (date) body += "Preferred Date: " + date + "\n";
      if (time) body += "Preferred Time: " + time + "\n";
      if (message) body += "\nMessage:\n" + message + "\n";

      // Construct mailto link
      var mailtoUrl = "mailto:aayanparkar096@gmail.com" 
        + "?subject=" + encodeURIComponent("Appointment Request: " + name)
        + "&body=" + encodeURIComponent(body);

      // Open email client
      window.location.href = mailtoUrl;

      // Hide form, show success message
      bookingForm.style.display = 'none';
      bookingSuccess.classList.add('active');
      bookingSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // ── Smooth Scroll for all anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 80; // nav height
        var elementPosition = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    });
  });

  // ── Set minimum date for booking to today ──
  var dateInput = document.getElementById('date');
  if (dateInput) {
    var today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

});
