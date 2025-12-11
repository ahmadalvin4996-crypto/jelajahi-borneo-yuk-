/**
 * File: script.js
 * Deskripsi: Skrip dasar untuk menambah interaksi di Jelajah Borneo.
 */

document.addEventListener('DOMContentLoaded', function() {
    // 1. Fungsionalitas Hero Dinamis
    updateHeroGreeting();

    // 2. Fungsionalitas Interaktif Kartu Menu
    setupCardInteractivity();
});


// Fungsi untuk mengubah teks sapaan di Hero Section berdasarkan waktu
function updateHeroGreeting() {
    const heroTitle = document.getElementById('hero-title');
    const now = new Date();
    const hour = now.getHours();
    let greeting = "Selamat Datang";

    if (hour >= 5 && hour < 11) {
        greeting = "WELCOME TO BORNEO";
    } else if (hour >= 11 && hour < 15) {
        greeting = "WELCOME TO BORNEO";
    } else if (hour >= 15 && hour < 18) {
        greeting = "WELCOME TO BORNEO";
    } else {
        greeting = "WELCOME TO BORNEO";
    }

    if (heroTitle) {
        heroTitle.textContent = greeting;
    }
}

// Fungsi untuk menangani interaksi pada kartu budaya
function setupCardInteractivity() {
    const cards = document.querySelectorAll('.budaya-card a'); // Targetkan tautan di dalam kartu

    cards.forEach(link => {
        link.addEventListener('click', function(event) {
            // Mengambil kategori dari atribut href
            const category = link.href.split('?kategori=')[1];

            // Memberikan feedback visual sebelum navigasi
            alert(`Anda akan diarahkan ke halaman kategori: ${category.toUpperCase()}`);
            
            // Di sini Anda bisa menambahkan logika yang lebih kompleks,
            // seperti memuat konten dinamis tanpa pindah halaman (SPA)
            
            // Karena kita menggunakan file HTML terpisah (artikel.html),
            // biarkan event berjalan (default) untuk navigasi.
            // event.preventDefault(); // Uncomment ini jika menggunakan SPA
        });
    });
}