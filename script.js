// SEOUL BITE — JavaScript murni untuk interaksi website
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const themeToggle = document.getElementById('themeToggle');
const productSearch = document.getElementById('productSearch');
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
const noResults = document.getElementById('noResults');
const toast = document.getElementById('toast');
let activeFilter = 'all';
let toastTimer;

// Navigasi mobile: buka/tutup menu ketika tombol hamburger ditekan.
menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Tutup navigasi' : 'Buka navigasi');
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

// Mode gelap/terang, kelas body mengubah variabel warna CSS.
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const darkMode = document.body.classList.contains('dark');
  themeToggle.textContent = darkMode ? '☀' : '☾';
  themeToggle.setAttribute('aria-label', darkMode ? 'Aktifkan mode terang' : 'Aktifkan mode gelap');
});

// Filter menu dan pencarian produk bekerja bersama.
function filterProducts() {
  const term = productSearch.value.trim().toLowerCase();
  let visibleCount = 0;
  productCards.forEach(card => {
    const category = card.dataset.category.split(' ');
    const name = card.dataset.name.toLowerCase();
    const matchesFilter = activeFilter === 'all' || category.includes(activeFilter);
    const matchesSearch = name.includes(term) || card.textContent.toLowerCase().includes(term);
    const visible = matchesFilter && matchesSearch;
    card.hidden = !visible;
    if (visible) visibleCount++;
  });
  noResults.hidden = visibleCount !== 0;
}
filterButtons.forEach(button => button.addEventListener('click', () => {
  filterButtons.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  activeFilter = button.dataset.filter;
  filterProducts();
}));
productSearch.addEventListener('input', filterProducts);

// Tombol menu memberi feedback interaktif. Jumlah pesanan tidak dikirim ke server.
document.querySelectorAll('.add-button').forEach(button => button.addEventListener('click', () => {
  const product = button.dataset.product;
  const price = Number(button.dataset.price).toLocaleString('id-ID');
  showToast(`${product} ditambahkan · Rp${price}`);
}));
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

// Validasi formulir kontak di sisi browser.
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const status = document.getElementById('formStatus');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  document.getElementById('nameError').textContent = name.value.trim().length < 2 ? 'Nama minimal 2 karakter.' : '';
  document.getElementById('emailError').textContent = !emailPattern.test(email.value.trim()) ? 'Masukkan alamat email yang valid.' : '';
  document.getElementById('messageError').textContent = message.value.trim().length < 8 ? 'Pesan minimal 8 karakter.' : '';
  const isValid = name.value.trim().length >= 2 && emailPattern.test(email.value.trim()) && message.value.trim().length >= 8;
  if (isValid) {
    status.textContent = 'Terima kasih! Formulir berhasil divalidasi. Hubungkan ke layanan backend/email untuk menerima pesan.';
    contactForm.reset();
  } else {
    status.textContent = '';
    contactForm.querySelector('.field-error:not(:empty)')?.previousElementSibling?.focus();
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
