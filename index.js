// navigation untuk mobile layout
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
// toggle nav
nav.classList.toggle('nav-active');

// animasi links
navLinks.forEach((link, index) => {
    if (link.style.animation) {
link.style.animation = '';
    } else {
link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
});

// animasi burger
burger.classList.toggle('toggle');
    });
}

// transisi animasi halaman
const pageTransition = () => {
    const transition = document.getElementById('pageTransition');
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    // trigger transition
    transition.classList.add('active');
    
    // wait for transition, then scroll and remove transition
    setTimeout(() => {
document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
});

setTimeout(() => {
    transition.classList.remove('active');
}, 300);
    }, 400);
});
    });
}

// intro animasi
const introAnimation = () => {
    const introOverlay = document.getElementById('introOverlay');
    
    // hide intro setelah 3 detik
    setTimeout(() => {
introOverlay.classList.add('fade-out');

// remove from DOM setelah fade out
setTimeout(() => {
    introOverlay.style.display = 'none';
}, 1000);
    }, 3000);
}

// countdown timer
function updateCountdown() {
    // set tanggal festival (contoh tanggal)
    const festivalDate = new Date("January 1, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = festivalDate - now;
    
    // hitung hari, jam, menit, dan detik
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // update elemen HTML
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    
    // jika countdown selesai
    if (distance < 0) {
clearInterval(countdownTimer);
document.getElementById("days").innerText = "00";
document.getElementById("hours").innerText = "00";
document.getElementById("minutes").innerText = "00";
document.getElementById("seconds").innerText = "00";
    }
}

// scroll reveal
function reveal() {
    var reveals = document.querySelectorAll("section:not(.hero)");
    
    for (var i = 0; i < reveals.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 150;

if (elementTop < windowHeight - elementVisible) {
    reveals[i].classList.add("show");
}
    }
}

// form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // kode untuk mengirim data form ke server
    alert('Terima kasih! Pesan Anda telah terkirim.');
    contactForm.reset();
});

// event listeners
window.addEventListener("DOMContentLoaded", () => {
    introAnimation();
    navSlide();
    pageTransition();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    window.addEventListener("scroll", reveal);
    reveal(); // panggil sekali saat halaman dimuat
});