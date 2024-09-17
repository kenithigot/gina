// Toggle sidebar visibility on mobile devices
document.querySelector('.bx-menu')?.addEventListener('click', function() {
    document.querySelector('#sidebar').classList.toggle('show');
});

// Toggle light/dark mode functionality (if needed)
document.querySelector('#switch-mode')?.addEventListener('change', function() {
    document.body.classList.toggle('dark');
});

// Notifications (just a placeholder for actual functionality)
document.querySelectorAll('.notification')?.forEach(function(element) {
    element.addEventListener('click', function() {
        alert('You have new notifications!');
    });

    
});