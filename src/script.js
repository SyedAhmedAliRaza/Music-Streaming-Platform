const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.add('light');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
} else {
    document.documentElement.classList.remove('light');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
}

themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
    if (document.documentElement.classList.contains('light')) {
        localStorage.setItem('theme', 'light');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
});