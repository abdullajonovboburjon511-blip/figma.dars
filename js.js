// ==========================================
// 1. GLOBAL O'ZGARUVCHILAR
// ==========================================
var wishlistCount = 0;
var cartCount = 0;
var currentSlide = 0;

// ==========================================
// 2. SAVATCHA FUNKSIYASI (Global doirada)
// ==========================================
function addToCart() {
  cartCount++;
  
  // HTML'da bo'lishi mumkin bo'lgan har ikkala ID'ni ham tekshirib yangilaymiz
  var cartBadge1 = document.getElementById('cart-count');
  var cartBadge2 = document.getElementById('cartCount');

  if (cartBadge1) cartBadge1.textContent = cartCount;
  if (cartBadge2) cartBadge2.textContent = cartCount;
}

// ==========================================
// 3. LIKE (YURAKCHA) FUNKSIYASI (Global doirada)
// ==========================================
function toggleLike(btn) {
  if (!btn) return;
  var icon = btn.querySelector('i');
  
  if (!btn.classList.contains('liked')) {
    btn.classList.add('liked');
    if (icon) {
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');
    }
    wishlistCount++;
  } else {
    btn.classList.remove('liked');
    if (icon) {
      icon.classList.remove('fa-solid');
      icon.classList.add('fa-regular');
    }
    if (wishlistCount > 0) wishlistCount--;
  }

  var wishlistBadge = document.getElementById('wishlist-count');
  if (wishlistBadge) {
    wishlistBadge.textContent = wishlistCount;
  }
}

// ==========================================
// 4. SAHIFA YUKLANGANDA ISHLAYDIGAN EVENTLAR
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
  
  // Dropdown menyu
  var categoryToggle = document.getElementById('categoryToggle');
  var dropdownMenu = document.getElementById('dropdownMenu');
  if (categoryToggle && dropdownMenu) {
    categoryToggle.addEventListener('click', function() {
      dropdownMenu.classList.toggle('show');
    });
  }

  // Kategoriya kartochkalariga bosish
  var categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach(function(card) {
    card.addEventListener('click', function() {
      categoryCards.forEach(function(c) { c.classList.remove('active'); });
      card.classList.add('active');
    });
  });

  // Login Modal
  var userBtn = document.getElementById('userBtn');
  var loginModal = document.getElementById('loginModal');
  var closeModal = document.getElementById('closeModal');

  if (userBtn && loginModal) {
    userBtn.addEventListener('click', function() { loginModal.classList.add('show'); });
  }
  if (closeModal && loginModal) {
    closeModal.addEventListener('click', function() { loginModal.classList.remove('show'); });
  }
});

// ==========================================
// 5. SLIDER MA'LUMOTLARI VA BOSHQARUV
// ==========================================
var slidesData = [
  {
    sub: "- THE BEST PLACE TO PLAY",
    title: "Xbox Consoles",
    desc: "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.",
    price: "$299",
    img: "images/xbox.png"
  },
  {
    sub: "- NEXT GEN POWER",
    title: "PlayStation 5 Console",
    desc: "Experience lightning-fast loading with an ultra-high speed SSD.",
    price: "$499",
    img: "images/ps5.png"
  },
  {
    sub: "- WIRELESS AUDIO",
    title: "AirPods Max Headphones",
    desc: "High-fidelity audio with Active Noise Cancellation for immersive sound.",
    price: "$549",
    img: "images/headphones.png"
  }
];

function updateSlide(index) {
  if (!slidesData[index]) return;
  var data = slidesData[index];
  
  var slideSub = document.getElementById('slideSub');
  var slideTitle = document.getElementById('slideTitle');
  var slideDesc = document.getElementById('slideDesc');
  var slidePrice = document.getElementById('slidePrice');
  var slideImg = document.getElementById('slideImg');
  var dots = document.querySelectorAll('.dot');

  if (slideSub) slideSub.textContent = data.sub;
  if (slideTitle) slideTitle.textContent = data.title;
  if (slideDesc) slideDesc.textContent = data.desc;
  if (slidePrice) slidePrice.textContent = data.price;
  if (slideImg) slideImg.src = data.img;

  dots.forEach(function(dot) { dot.classList.remove('active'); });
  if (dots[index]) dots[index].classList.add('active');
}

var nextSlideBtn = document.getElementById('nextSlide');
var prevSlideBtn = document.getElementById('prevSlide');

if (nextSlideBtn) {
  nextSlideBtn.addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % slidesData.length;
    updateSlide(currentSlide);
  });
}

if (prevSlideBtn) {
  prevSlideBtn.addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + slidesData.length) % slidesData.length;
    updateSlide(currentSlide);
  });
}

// ==========================================
// 6. TAYMER SCRIPT
// ==========================================
var targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 16);

function updateTimer() {
  var now = new Date().getTime();
  var difference = targetDate - now;

  if (difference > 0) {
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    var dEl = document.getElementById('days');
    var hEl = document.getElementById('hours');
    var mEl = document.getElementById('minutes');
    var sEl = document.getElementById('seconds');

    if (dEl) dEl.textContent = days < 10 ? '0' + days : days;
    if (hEl) hEl.textContent = hours < 10 ? '0' + hours : hours;
    if (mEl) mEl.textContent = minutes < 10 ? '0' + minutes : minutes;
    if (sEl) sEl.textContent = seconds < 10 ? '0' + seconds : seconds;
  }
}

setInterval(updateTimer, 1000);
updateTimer();