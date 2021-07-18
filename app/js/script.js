const hamburgerBtn = document.getElementById('hamburger')
const mobileMenu = document.querySelector('.mobile-menu')

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active')
    if(mobileMenu.classList.contains('fade-out')) {
        mobileMenu.classList.remove('fade-out')
        mobileMenu.classList.add('fade-in')
    } else {
        mobileMenu.classList.remove('fade-in')
        mobileMenu.classList.add('fade-out')
    }

})