// Toggle navbar menu on mobile
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuIcon.classList.toggle('active');
});

// Optional: Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuIcon.classList.remove('active');
  });
});

// Add this to handle the loading progress
const modelViewers = document.querySelectorAll('model-viewer');

modelViewers.forEach(viewer => {
    viewer.addEventListener('progress', (e) => {
        const progressBar = viewer.querySelector('.update-bar');
        const progress = e.detail.totalProgress * 100;
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    });

    viewer.addEventListener('load', () => {
        const progressBar = viewer.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.classList.add('hide');
        }
    });
});
