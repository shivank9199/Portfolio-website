const headerButton = document.querySelector('.header-button');
const navLink = document.querySelectorAll('.nav-link');

headerButton.addEventListener('click', ()=> {
    document.body.classList.toggle('nav-open');
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})