        // Navigation untuk Mobile
        const navSlide = () => {
            const burger = document.querySelector('.burger');
            const nav = document.querySelector('.nav-links');
            const navLinks = document.querySelectorAll('.nav-links li');

            burger.addEventListener('click', () => {
                // Toggle Nav
                nav.classList.toggle('nav-active');

                // Animate Links
                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = '';
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                    }
                });

                // Burger Animation
                burger.classList.toggle('toggle');
            });
        }

        // Page Transition Animation
        const pageTransition = () => {
            const transition = document.getElementById('pageTransition');
            
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Trigger transition
                    transition.classList.add('active');
                    
                    // Wait for transition, then scroll and remove transition
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

        // Intro Animation
        const introAnimation = () => {
            const introOverlay = document.getElementById('introOverlay');
            
            // Hide intro after 3 seconds
            setTimeout(() => {
                introOverlay.classList.add('fade-out');
                
                // Remove from DOM after fade out
                setTimeout(() => {
                    introOverlay.style.display = 'none';
                }, 1000);
            }, 3000);
        }

        // Countdown Timer
        function updateCountdown() {
            // Set tanggal festival (1 Januari 2026)
            const festivalDate = new Date("January 1, 2026 00:00:00").getTime();
            const now = new Date().getTime();
            const distance = festivalDate - now;
            
            // Hitung hari, jam, menit, dan detik
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Update elemen HTML
            document.getElementById("days").innerText = days.toString().padStart(2, '0');
            document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
            document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
            
            // Jika countdown selesai
            if (distance < 0) {
                clearInterval(countdownTimer);
                document.getElementById("days").innerText = "00";
                document.getElementById("hours").innerText = "00";
                document.getElementById("minutes").innerText = "00";
                document.getElementById("seconds").innerText = "00";
            }
        }
        
        // Scroll Reveal
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

        // Form Submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Di sini Anda bisa menambahkan kode untuk mengirim data form ke server
            alert('Terima kasih! Pesan Anda telah terkirim.');
            contactForm.reset();
        });

        // Event listeners
        window.addEventListener("DOMContentLoaded", () => {
            introAnimation();
            navSlide();
            pageTransition();
            updateCountdown();
            setInterval(updateCountdown, 1000);
            window.addEventListener("scroll", reveal);
            reveal(); // Panggil sekali saat halaman dimuat
        });