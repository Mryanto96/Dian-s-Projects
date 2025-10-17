
// ===== LOADING ANIMATION =====
function createLoadingParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 3 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 12;
        const duration = Math.random() * 6 + 6;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        particle.style.opacity = Math.random() * 0.5 + 0.2;

        container.appendChild(particle);
    }
}

// ===== MAIN CONTENT INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function () {
    // Setup loading screen
    createLoadingParticles();

    // Show loading screen for 3 seconds, then show main content
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        const mainContent = document.getElementById('mainContent');

        if (loadingScreen && mainContent) {
            // Fade out loading screen
            loadingScreen.style.opacity = '0';
            loadingScreen.style.transition = 'opacity 1s ease';

            setTimeout(() => {
                // Hide loading screen and show main content
                loadingScreen.style.display = 'none';
                mainContent.style.display = 'block';
            }, 1000);
        }
    }, 3000);

    // ===== WEBSITE FUNCTIONALITY =====
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const menuItems = document.querySelector('.menu-items');
    
    if (mobileMenuBtn && menuItems) {
        mobileMenuBtn.addEventListener('click', function() {
            menuItems.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuItems.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                menuItems.classList.remove('active');
            }
        });
    }

    // Active menu highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuLinks = document.querySelectorAll('.menu-items a[href]');
    
    menuLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.style.background = 'var(--primary)';
            link.style.color = 'white';
        }
    });
});

// ===== DOWNLOAD FUNCTION =====
function downloadFile(filename) {
    const button = event.target;
    const originalText = button.innerHTML;
    
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengunduh...';
    button.disabled = true;

    setTimeout(() => {
        // Create temporary download link
        const link = document.createElement('a');
        link.href = '#'; // Replace with actual file URL later
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Show success message
        button.innerHTML = '<i class="fas fa-check"></i> Berhasil!';
        button.style.background = 'linear-gradient(135deg, #10b981, #059669)';

        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
            button.disabled = false;
        }, 2000);
    }, 1500);
}