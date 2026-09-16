const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn && nav) menuBtn.addEventListener('click', () => nav.classList.toggle('open'));

const filterButtons = document.querySelectorAll('.filter-btn');
const releases = document.querySelectorAll('.release');
const search = document.querySelector('#releaseSearch');
let currentFilter = 'all';

function applyReleaseFilter(){
  const q = (search?.value || '').trim().toLowerCase();
  releases.forEach(card => {
    const matchesType = currentFilter === 'all' || card.dataset.type === currentFilter;
    const matchesText = !q || card.textContent.toLowerCase().includes(q);
    card.classList.toggle('hidden', !(matchesType && matchesText));
  });
}
filterButtons.forEach(btn => btn.addEventListener('click', () => {
  filterButtons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentFilter = btn.dataset.filter;
  applyReleaseFilter();
}));
if (search) search.addEventListener('input', applyReleaseFilter);
