document.addEventListener('DOMContentLoaded', function() {
    var navs = document.querySelectorAll('.menu-nav'); // Selecciona todos los menús

    navs.forEach(function(nav) {
        // Remove collapsed and add animation styles
        nav.classList.remove('collapsed');

        // Trigger the animation by adding the expanded class
        setTimeout(function() {
            nav.classList.add('expanded');
        }, 10); // Timeout ensures the transition is triggered
    });
});