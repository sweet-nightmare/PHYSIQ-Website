// Hero Slider
document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.dot');
    const heroSection = document.querySelector('.hero');
    let currentSlide = 0;
    
    // Background images untuk slider
    const backgrounds = [
        'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../images/hero1.png")',
        'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../images/hero2.png")',
        'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("../images/hero3.png")'
    ];
    
    // Function untuk change slide
    function changeSlide(index) {
        currentSlide = index;
        heroSection.style.background = backgrounds[index] + ' center/cover';
        
        // Update active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }
    
    // Click event untuk dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            changeSlide(index);
        });
    });
    
    // Auto slide setiap 5 detik
    setInterval(() => {
        currentSlide = (currentSlide + 1) % backgrounds.length;
        changeSlide(currentSlide);
    }, 5000);
    
    // Smooth scroll untuk navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Form submission handler
    const joinForm = document.querySelector('.join-form form');
    if (joinForm) {
        joinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[type="text"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            
            alert(`Terima kasih ${name}! Kami akan menghubungi Anda di ${phone} segera.`);
            this.reset();
        });
    }
    
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'var(--dark-bg)';
            header.style.backdropFilter = 'none';
        }
        
        lastScroll = currentScroll;
    });
});