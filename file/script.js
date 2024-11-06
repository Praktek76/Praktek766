// Mengambil elemen dropdown
const themeSelect = document.getElementById("theme-select");

// Fungsi untuk menerapkan tema
function applyTheme(theme) {
  document.body.className = theme;
  themeSelect.value = theme;
}

// Mengecek dan menerapkan tema dari local storage saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);
});

// Menyimpan tema yang dipilih di local storage dan menerapkannya
themeSelect.addEventListener("change", (event) => {
  const selectedTheme = event.target.value;
  localStorage.setItem("theme", selectedTheme);
  applyTheme(selectedTheme);
});
