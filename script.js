//Pages
document.querySelectorAll('.logo').forEach(logo => {
    logo.addEventListener('click', () => {
        document.querySelector('.front-page').style.display = ''
        document.querySelector('.login-page').style.display = 'none'
        document.querySelector('.signup-page').style.display = 'none'
    })
})
document.querySelectorAll('.login').forEach(loginBtn => {
    loginBtn.addEventListener('click', () => {
        document.querySelector('.front-page').style.display = 'none'
        document.querySelector('.login-page').style.display = 'block'
        document.querySelector('.signup-page').style.display = 'none'
    })
})
document.querySelectorAll('.signup').forEach(signupBtn => {
    signupBtn.addEventListener('click', () => {
        document.querySelector('.front-page').style.display = 'none'
        document.querySelector('.login-page').style.display = 'none'
        document.querySelector('.signup-page').style.display = 'flex'
    })
})
document.querySelectorAll('.continue-btn').forEach(contBtn => {
    contBtn.addEventListener('click', () => {
        document.querySelector('.front-page').style.display = ''
        document.querySelector('.login-page').style.display = 'none'
        document.querySelector('.signup-page').style.display = 'none'
    })
})
//End of pages

//Navigation
const dropdownItems = document.querySelectorAll('.dropdown-hover')

dropdownItems.forEach(dropdownItem => {
    dropdownItem.addEventListener('mouseover', () => {
        dropdownItem.lastElementChild.style.cssText = 'opacity: 1;visibility: visible';
    })
})
dropdownItems.forEach(dropdownItem => {
    dropdownItem.addEventListener('mouseout', () => {
        dropdownItem.lastElementChild.style.cssText = 'opacity: 0;visibility: hidden';
    })
})
//End of Navigation