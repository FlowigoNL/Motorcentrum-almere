import { headerContent } from './src/components/header.js';
import { footerContent } from './src/components/footer.js';

// ==== Inject Components ====
function injectComponents() {
  const headerPlaceholder = document.getElementById('header-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = headerContent;
    highlightActiveLink();
  }
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerContent;
  }
}

function highlightActiveLink() {
  const path = window.location.pathname;
  const links = document.querySelectorAll('.mca-nav-link');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '/' && href === '/') ||
        (path !== '/' && href !== '/' && path.startsWith(href.replace('.html', '')))) {
      link.classList.add('active');
    }
  });
}

injectComponents();

// ==== Hamburger menu ====
document.addEventListener('click', (e) => {
  const btn = e.target.closest('#mca-hamburger');
  if (!btn) return;
  const nav = document.getElementById('mca-nav');
  const open = btn.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
  nav.classList.toggle('open', open);
});

// ==== Scroll: header shadow ====
window.addEventListener('scroll', () => {
  const header = document.getElementById('mca-header');
  if (header) header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ==== AOS ====
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({ once: true, duration: 700, easing: 'ease-out-cubic', offset: 60 });
  }
});

// ==== Financing Calculator ====
document.addEventListener('DOMContentLoaded', () => {
  const calcMotor = document.getElementById('calc-motor');
  const calcDownpayment = document.getElementById('calc-downpayment');
  const termButtons = document.querySelectorAll('.term-btn');
  const calcOutput = document.getElementById('calc-output');

  if (calcMotor && calcDownpayment && termButtons.length && calcOutput) {
    function getSelectedTerm() {
      const active = document.querySelector('.term-btn.active');
      return active ? parseInt(active.dataset.months) : 36;
    }

    function calculateFinance() {
      const price = parseFloat(calcMotor.value);
      let downpayment = parseFloat(calcDownpayment.value);

      if (isNaN(downpayment) || downpayment < 0) downpayment = 0;

      const termMonths = getSelectedTerm();
      const annualInterestRate = 0.059;

      const principal = price - downpayment;

      if (principal <= 0) {
        calcOutput.textContent = '€ 0,-';
        return;
      }

      const monthlyRate = annualInterestRate / 12;
      const mathPower = Math.pow(1 + monthlyRate, termMonths);
      const monthlyPayment = (principal * (monthlyRate * mathPower)) / (mathPower - 1);

      calcOutput.textContent = '€ ' + monthlyPayment.toFixed(2).replace('.', ',');
    }

    termButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        termButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        calculateFinance();
      });
    });

    calcMotor.addEventListener('change', calculateFinance);
    calcDownpayment.addEventListener('input', calculateFinance);

    calculateFinance();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const filterBrand = document.getElementById('filter-brand');
  const filterKms = document.getElementById('filter-kms');
  const filterPrice = document.getElementById('filter-price');
  const motorCards = document.querySelectorAll('#occasions-grid .motor-card');

  if (!filterBrand) return; 

  function filterMotors() {
    const valBrand = filterBrand.value;
    const valKms = filterKms.value;
    const valPrice = filterPrice.value;

    motorCards.forEach(card => {
      let isVisible = true;

      // 1. Merk Check
      if (valBrand !== 'all' && card.dataset.brand !== valBrand) {
        isVisible = false;
      }

      // 2. Kilometerstand Check
      if (valKms !== 'all' && parseInt(card.dataset.kms) > parseInt(valKms)) {
        isVisible = false;
      }

      // 3. Prijs Check
      if (valPrice !== 'all' && parseInt(card.dataset.price) > parseInt(valPrice)) {
        isVisible = false;
      }

      if (isVisible) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  filterBrand.addEventListener('change', filterMotors);
  filterKms.addEventListener('change', filterMotors);
  filterPrice.addEventListener('change', filterMotors);
});