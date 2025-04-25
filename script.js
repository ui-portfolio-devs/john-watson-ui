// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation on scroll for the about section
    const aboutSection = document.querySelector('.w3l-about');
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    if (aboutSection) {
        aboutSection.style.opacity = '0';
        aboutSection.style.transform = 'translateY(20px)';
        aboutSection.style.transition = 'all 0.6s ease-out';
        observer.observe(aboutSection);
    }

    // Add hover effect for social media icons
    const socialLinks = document.querySelectorAll('.follow-social li a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Handle the "Download CV" button click
    const downloadBtn = document.querySelector('.btn-secondary');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // You can add your CV download logic here
            alert('CV download functionality will be implemented here');
        });
    }

    // Handle the "Hire me" button click
    const hireBtn = document.querySelector('.btn-primary');
    if (hireBtn) {
        hireBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // You can add your hire me logic here
            alert('Hire us functionality will be implemented here');
        });
    }
});
