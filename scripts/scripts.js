// Mobile nav menu to desktop functionality
const menu = document.getElementById('toggle-menu')
const nav = document.getElementById('nav')
const exit = document.getElementById('exit')

menu.addEventListener('click', (e) => {
    nav.classList.toggle('hide-mobile')
    e.preventDefault();
})

exit.addEventListener('click', (e) => {
    nav.classList.add('hide-mobile')
    e.preventDefault();
})

// Position subnavs
const dropdownParent = document.querySelector('.has-subnav');
const dropdownMenu = document.querySelector('li.has-subnav ul.dropdown')

dropdownParent.addEventListener('click', (e) => {
    dropdownMenu.classList.remove('hidden-dropdown');
    dropdownMenu.classList.add('active-dropdown');
})

dropdownParent.addEventListener('focusout', (e) => {
    dropdownMenu.classList.add('hidden-dropdown');
    dropdownMenu.classList.remove('active-dropdown');
})

