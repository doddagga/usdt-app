document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('date').textContent = new Date().toLocaleDateString('ar-EG');
  document.getElementById('time').textContent = new Date().toLocaleTimeString('ar-EG');
});

function showSection(id) {
  document.querySelectorAll('.section').forEach(el => el.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function goBack() {
  document.querySelectorAll('.section').forEach(el => el.style.display = 'none');
}

function spin(type) {
  let points = type === 'daily' ? Math.floor(Math.random() * (200 - 30 + 1)) + 30 : Math.floor(Math.random() * (100 - 30 + 1)) + 30;
  document.getElementById('points').textContent = parseInt(document.getElementById('points').textContent) + points;
  document.getElementById('spin-result').textContent = "ربحت " + points + " نقطة!";
}