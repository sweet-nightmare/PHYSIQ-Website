// ============================================
// PHYSIQ FITNESS - JavaScript
// Clean, Consistent, Future-proof Code
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // HERO SLIDER (smooth transition like facility)
    // ============================================
    const heroSlider = document.querySelector('.hero-slider');
    const heroSlides = document.querySelector('.hero-slides');
    const heroDots = document.querySelectorAll('.dot');
    const heroPrevBtn = document.querySelector('.hero-prev');
    const heroNextBtn = document.querySelector('.hero-next');
    const heroSlideCount = document.querySelectorAll('.hero-slide').length;
    
    let heroCurrentSlide = 0;
    let heroAutoInterval;

    function changeHeroSlide(index) {
        heroCurrentSlide = index;
        heroSlides.style.transform = `translateX(-${index * 100}%)`;
        
        heroDots.forEach(dot => dot.classList.remove('active'));
        heroDots[index].classList.add('active');
    }

    function nextHeroSlide() {
        heroCurrentSlide = (heroCurrentSlide + 1) % heroSlideCount;
        changeHeroSlide(heroCurrentSlide);
    }

    function prevHeroSlide() {
        heroCurrentSlide = (heroCurrentSlide - 1 + heroSlideCount) % heroSlideCount;
        changeHeroSlide(heroCurrentSlide);
    }

    function startHeroAuto() {
        heroAutoInterval = setInterval(nextHeroSlide, 5000);
    }

    function resetHeroAuto() {
        clearInterval(heroAutoInterval);
        startHeroAuto();
    }

    // Hero event listeners
    if (heroDots.length > 0) {
        heroDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                changeHeroSlide(index);
                resetHeroAuto();
            });
        });
    }

    if (heroPrevBtn) {
        heroPrevBtn.addEventListener('click', () => {
            prevHeroSlide();
            resetHeroAuto();
        });
    }

    if (heroNextBtn) {
        heroNextBtn.addEventListener('click', () => {
            nextHeroSlide();
            resetHeroAuto();
        });
    }

    // Initialize hero slider
    if (heroSlider && heroSlideCount > 0) {
        changeHeroSlide(0);
        startHeroAuto();
    }

    // ============================================
    // FACILITY SLIDER (consistent with Hero)
    // ============================================
    const facilitySlider = document.querySelector('.facility-slider');
    const facilitySlides = document.querySelector('.facility-slides');
    const facilityDots = document.querySelectorAll('.facility-dot');
    const facilityPrevBtn = document.querySelector('.facility-prev');
    const facilityNextBtn = document.querySelector('.facility-next');
    const facilitySlideCount = document.querySelectorAll('.facility-slide').length;
    
    let facilityCurrentSlide = 0;
    let facilityAutoInterval;

    function changeFacilitySlide(index) {
        facilityCurrentSlide = index;
        facilitySlides.style.transform = `translateX(-${index * 100}%)`;
        
        facilityDots.forEach(dot => dot.classList.remove('active'));
        facilityDots[index].classList.add('active');
    }

    function nextFacilitySlide() {
        facilityCurrentSlide = (facilityCurrentSlide + 1) % facilitySlideCount;
        changeFacilitySlide(facilityCurrentSlide);
    }

    function prevFacilitySlide() {
        facilityCurrentSlide = (facilityCurrentSlide - 1 + facilitySlideCount) % facilitySlideCount;
        changeFacilitySlide(facilityCurrentSlide);
    }

    function startFacilityAuto() {
        facilityAutoInterval = setInterval(nextFacilitySlide, 5000);
    }

    function resetFacilityAuto() {
        clearInterval(facilityAutoInterval);
        startFacilityAuto();
    }

    // Facility event listeners
    if (facilityDots.length > 0) {
        facilityDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                changeFacilitySlide(index);
                resetFacilityAuto();
            });
        });
    }

    if (facilityPrevBtn) {
        facilityPrevBtn.addEventListener('click', () => {
            prevFacilitySlide();
            resetFacilityAuto();
        });
    }

    if (facilityNextBtn) {
        facilityNextBtn.addEventListener('click', () => {
            nextFacilitySlide();
            resetFacilityAuto();
        });
    }

    // Initialize facility slider
    if (facilitySlider && facilitySlideCount > 0) {
        changeFacilitySlide(0);
        startFacilityAuto();
    }

    // ============================================
    // SMOOTH SCROLL FOR NAVIGATION
    // ============================================
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

    // ============================================
    // JOIN FORM SUBMISSION
    // ============================================
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

    // ============================================
    // HEADER SCROLL EFFECT (transparent blur)
    // ============================================
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollPosition > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

});