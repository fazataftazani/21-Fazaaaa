
// Link media sosial
const instagram = document.querySelector('[data-social="instagram"]');
const tiktok = document.querySelector('[data-social="tiktok"]');
const youtube = document.querySelector('[data-social="youtube"]');
const whatsapp = document.querySelector('[data-social="whatsapp"]');

// Mengatur link
instagram.href = "https://instagram.com/fazataftazani_";
tiktok.href = "https://tiktok.com/@fztftzn_";
youtube.href = "https://youtube.com/@fzgaming7584";
whatsapp.href = "https://wa.me/6289525638587";

// Membuka link di tab baru
const tombol = document.querySelectorAll(".social-btn");

tombol.forEach(function(link) {
    link.target = "_blank";
});