// Mobile nav menu to desktop functionality
let menu = document.getElementById('toggle-menu');
let nav = document.getElementById('nav');
let exit = document.getElementById('exit');

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
const dropdownParents = document.querySelectorAll('.subnav-parent-container');
Array.from(dropdownParents).forEach((el) => {
    let navId = el.dataset.subnav;
    let dropdownId = document.getElementById(navId)

    let dropdownOpen = () => {
        dropdownId.style.display = "block"
        el.style.color = "#9D9D9D"
    }

    let dropdownClose = () => {
        dropdownId.style.display = "none"
        el.style.color = "black"
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

    let elLink = el.getElementsByClassName('has-subnav')[0];
    let dropdownItems = document.querySelectorAll('.dropdown li a')

    // Events
    window.addEventListener('resize', getNavCoords);

    el.addEventListener('mouseover', dropdownOpen);

    el.addEventListener('mouseout', dropdownClose)

    elLink.addEventListener('focus', dropdownOpen);

    Array.from(dropdownItems).forEach((item) => {
        item.addEventListener('focusout', (e) => {
            console.log(e.relatedTarget)
            if (!e.relatedTarget.hasAttribute('role')) {
                dropdownClose();
            }
        })
    });
});

