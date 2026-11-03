// Duotot Landing Page Interactive Scripts
document.addEventListener('DOMContentLoaded', () => {
  // Screenshot Gallery Data
  const galleryData = {
    dashboard: {
      badge: 'At-A-Glance Overview',
      title: 'Know What Happened In Seconds',
      desc: 'Keep track of when your baby last fed, wet their diaper, or fell asleep. Designed for quick glanceability during busy nursery moments.',
      bullets: [
        'Live feed countdown timer with breast side memory (Left/Right)',
        'Diaper countdown and real-time daily totals',
        'Today\'s feeding, diaper, and sleep totals updated live',
        'Instant shift handoff summary card ready for your partner'
      ],
      img: 'assets/images/01_home_dashboard.png',
      alt: 'Duotot Home Dashboard'
    },
    radial: {
      badge: '1-Handed Quick Logging',
      title: 'Log In The Dark With One Hand',
      desc: 'One-touch radial action dial positioned within thumb\'s reach at the bottom of the screen. Tap and you\'re done without fumbling or typing.',
      bullets: [
        'Instant radial dial for Left feed, Right feed, Bottle & Diapers',
        'Automatic memory suggests the next nursing side to balance feeds',
        'Quick bottle volume presets in ounces or milliliters',
        'Low-glare dark theme optimized for 2 AM nursery feedings'
      ],
      img: 'assets/images/02_quick_radial_log.png',
      alt: 'Duotot 1-Handed Radial Log Dial'
    },
    doctor: {
      badge: 'Clinical Checkup Reports',
      title: 'Doctor-Ready Visit Summaries',
      desc: 'Export clear, factual care observations for checkups with your pediatrician without relying on sleep-deprived memory.',
      bullets: [
        '24-hour, 48-hour, 7-day, and 30-day feeding intervals',
        'Diaper output frequency and elimination breakdown (wet/dirty)',
        'One-tap doctor PDF report export for printing or emailing',
        'One-tap "Copy for MyChart" formatted for patient portals'
      ],
      img: 'assets/images/03_pediatrician_report.png',
      alt: 'Duotot Pediatrician Visit Report'
    },
    sync: {
      badge: 'Zero-Cloud Local Sync',
      title: 'Keep Both Parents In Sync',
      desc: 'Baby data stays strictly within your family home. Care records sync peer-to-peer between paired caregiver phones over your private home Wi-Fi.',
      bullets: [
        'Direct local Wi-Fi sync between Mom and Dad\'s mobile devices',
        'Zero cloud accounts, no central servers, and zero data brokers',
        'Automatic Wi-Fi peer discovery and secure 6-digit PIN verification',
        'Passphrase-encrypted offline backup (.babycare) anytime'
      ],
      img: 'assets/images/04_family_sync.png',
      alt: 'Duotot Family & Local Sync'
    },
    stats: {
      badge: 'Teamwork & Care Analytics',
      title: 'Caregiver Teamwork & Sleep Stretches',
      desc: 'Celebrate shared parenting milestones, maintain balanced shifts between partners, and track healthy daily routines.',
      bullets: [
        'Transparent duty split between Mom and Dad for balanced caregiving',
        'Daily care averages: feeds per day, diapers per day & nursing time',
        'Longest continuous rest and sleep stretch tracking',
        'Interactive activity timeline filterable by feed, diaper, or sleep'
      ],
      img: 'assets/images/05_stats_trends.png',
      alt: 'Duotot Caregiver Statistics and Trends'
    },
    timeline: {
      badge: 'Chronological Care Log',
      title: 'A Clear Timeline Of Every Day',
      desc: 'Review every nursing session, diaper change, nap, and medication dose in chronological order with precise timestamps.',
      bullets: [
        'Filter specifically by feeds, diaper changes, or sleep sessions',
        'Caregiver attribution tag on every recorded care event',
        'Adjust forgotten timers or add notes effortlessly',
        'Complete peace of mind knowing the full sequence of events'
      ],
      img: 'assets/images/06_care_timeline.png',
      alt: 'Duotot Chronological Care Timeline'
    }
  };

  // Gallery Tab Switching
  const tabs = document.querySelectorAll('.gallery-tab');
  const badgeEl = document.getElementById('gallery-badge');
  const titleEl = document.getElementById('gallery-title');
  const descEl = document.getElementById('gallery-desc');
  const bulletsEl = document.getElementById('gallery-bullets');
  const imgEl = document.getElementById('gallery-img');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const key = tab.getAttribute('data-tab');
      const item = galleryData[key];
      if (!item) return;

      badgeEl.textContent = item.badge;
      titleEl.textContent = item.title;
      descEl.textContent = item.desc;
      imgEl.src = item.img;
      imgEl.alt = item.alt;

      bulletsEl.innerHTML = item.bullets.map(b => `
        <li>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${b}</span>
        </li>
      `).join('');
    });
  });

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
});

