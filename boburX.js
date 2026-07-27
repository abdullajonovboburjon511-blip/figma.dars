// Rasmlarni almashtirish funksiyasi
function changeImage(element) {
  document.getElementById('mainProductImg').src = element.src;
  let thumbs = document.querySelectorAll('.thumb');
  thumbs.forEach(t => t.classList.remove('active'));
  element.classList.add('active');
}

// Plus va Minus funksiyalari
function increaseQty() {
  let input = document.getElementById('qtyInput');
  let val = parseInt(input.value);
  input.value = val + 1;
}

function decreaseQty() {
  let input = document.getElementById('qtyInput');
  let val = parseInt(input.value);
  if (val > 1) {
    input.value = val - 1;
  }
}

// Rang tanlash
function selectColor(el) {
  document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
  el.classList.add('active');
}

// Xotira tanlash
function selectMemory(el) {
  document.querySelectorAll('.mem-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

// Storage tanlash
function selectStorage(el) {
  document.querySelectorAll('.stor-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

// Wishlist yurakcha bosish
function toggleLikeBtn(el) {
  let icon = el.querySelector('i');
  if (icon.classList.contains('fa-regular')) {
    icon.classList.remove('fa-regular');
    icon.classList.add('fa-solid');
    icon.style.color = '#ee5858';
  } else {
    icon.classList.remove('fa-solid');
    icon.classList.add('fa-regular');
    icon.style.color = 'inherit';
  }
}

// Add to cart xabari
function addToCartAction() {
  alert("Mahsulot savatchaga qo'shildi!");
}

// Tabaqlarni almashtirish (Tabs)
function switchTab(evt, tabName) {
  let contents = document.querySelectorAll('.tab-content');
  contents.forEach(c => c.classList.remove('active'));

  let buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(b => b.classList.remove('active'));

  document.getElementById(tabName).classList.add('active');
  evt.currentTarget.classList.add('active');
}