// Mobile nav menu to desktop functionality
const menu = document.getElementById('toggle-menu')
const nav = document.getElementById('nav')
const exit = document.getElementById('exit')

menu.addEventListener('click', (e) => {
    nav.classList.toggle('hide-mobile')
    e.preventDefault();
    menu.setAttribute('aria-expanded', true)
})

exit.addEventListener('click', (e) => {
    nav.classList.add('hide-mobile')
    e.preventDefault();
})

// Nav Dropdown
const dropdownParents = document.querySelectorAll('.has-subnav');

Array.from(dropdownParents).forEach((el) => {

    let navId = el.dataset.subnav;
    let dropdownId = document.getElementById(navId)

    let dropdownOpen = () => {
        dropdownId.style.display = "block"
        el.firstElementChild.style.color = "#9D9D9D"
    }

    let dropdownClose = () => {
        dropdownId.style.display = "none"
        el.firstElementChild.style.color = "black"
    }

    // Place dropdown under parent
    let getNavCoords = () => {
        dropdownClose()
        let box = el.getBoundingClientRect();
        let leftPosition = box.x;
        let menuWidth = box.width
        dropdownId.style.left = leftPosition + 'px';
        dropdownId.style.width = menuWidth + 'px';
    }

    getNavCoords()

    window.addEventListener('resize', (e) => {
        getNavCoords()
    })

    el.addEventListener('mouseover', (e) => {
        dropdownOpen();
    })

    el.addEventListener('focus', (e) => {
        dropdownOpen();
    })

    el.addEventListener('mouseout', (e) => {
        dropdownClose();
    })

    el.addEventListener('focusout', (e) => {
        dropdownClose();
    })
})

