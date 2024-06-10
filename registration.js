document.addEventListener('DOMContentLoaded', function() {
    // Form Validation
    document.getElementById('myForm').addEventListener('submit', function(event) {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;

        if (!username || !email) {
            alert('All fields are required.');
            event.preventDefault();
        } else {
            alert('Form submitted successfully!');
        }
    });

    // Interactive Menu
    document.querySelectorAll('#menu > li').forEach(menuItem => {
        menuItem.addEventListener('mouseenter', () => {
            const submenu = menuItem.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'block';
            }
        });

        menuItem.addEventListener('mouseleave', () => {
            const submenu = menuItem.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
    });

    // Dynamic Content Updates
    document.getElementById('loadContent').addEventListener('click', function() {
        const contentDiv = document.getElementById('content');
        const dynamicContent = document.createElement('p');
        dynamicContent.textContent = 'This is dynamically loaded content.';
        contentDiv.appendChild(dynamicContent);
    });
});