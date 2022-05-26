const mobileButton = document.querySelector('.mobile-btn')
const navMenu = document.querySelector('.navbar')
const body = document.querySelector('body')
const navLinks = document.querySelectorAll('.nav-link')

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault()

  navMenu.classList.toggle('active')

  const active = navMenu.classList.contains('active')
  event.currentTarget.setAttribute('aria-expanded', active)

  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Close Menu')
    body.classList.add('fixed-position')
  } else {
    event.currentTarget.setAttribute('aria-label', 'Open Menu')
    body.classList.remove('fixed-position')
  }
}

mobileButton.addEventListener('click', toggleMenu)
mobileButton.addEventListener('touchstart', toggleMenu)

function closeMenu() {
  navMenu.classList.remove('active')
  body.classList.remove('fixed-position')
}

navLinks.forEach((navLink) => navLink.addEventListener('click', closeMenu))
navLinks.forEach((navLink) => navLink.addEventListener('touchstart', closeMenu))
