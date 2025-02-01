const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const navLinks = document.querySelectorAll('nav a');

toggle.addEventListener('click', function() {
    // Toggle the moon icon
    this.classList.toggle('bi-moon');  
    // Toggle the brightness icon
    this.classList.toggle('bi-brightness-high-fill');

    // Apply/remove darkmode class from the body, header, and footer
    body.classList.toggle('darkmode');
    header.classList.toggle('darkmode');
    footer.classList.toggle('darkmode');
    navLinks.forEach(link => link.classList.toggle('darkmode'));
});
