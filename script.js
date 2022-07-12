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