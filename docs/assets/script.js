// === Animated Stat Counters ===
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    
    if (prefersReducedMotion) {
      counter.textContent = formatNumber(target);
      return;
    }
    
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    
    const easeOutQuart = t => 1 - Math.pow(1 - t, 4);
    
    const animate = () => {
      frame++;
      const progress = easeOutQuart(frame / totalFrames);
      const current = Math.round(target * progress);
      
      counter.textContent = formatNumber(current);
      
      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      } else {
        counter.textContent = formatNumber(target);
      }
    };
    
    animate();
  });
}

function formatNumber(num) {
  if (num >= 1000) {
    return num.toLocaleString('en-US');
  }
  return num.toString();
}

// === Intersection Observer for Timeline Sections ===
function setupScrollAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    document.querySelectorAll('.year-section').forEach(section => {
      section.style.opacity = '1';
      section.style.transform = 'none';
    });
    return;
  }
  
  const sections = document.querySelectorAll('.year-section');
  
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  sections.forEach(section => observer.observe(section));
}

// === Counter Trigger on Scroll ===
function setupCounterTrigger() {
  const heroStats = document.querySelector('.hero-stats');
  if (!heroStats) return;
  
  let hasAnimated = false;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });
  
  observer.observe(heroStats);
}

// === Smooth Scroll for Anchor Links ===
function setupSmoothScroll() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// === Initialize ===
document.addEventListener('DOMContentLoaded', () => {
  setupCounterTrigger();
  setupScrollAnimations();
  setupSmoothScroll();
});

// === Handle visibility change (for tab switching) ===
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    // Re-check if counters need animation
    const counters = document.querySelectorAll('.stat-number[data-target]');
    counters.forEach(counter => {
      if (counter.textContent === '0') {
        setupCounterTrigger();
      }
    });
  }
});
