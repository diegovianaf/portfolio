const mobileButton = document.querySelector('.mobile-btn')
const navMenu = document.querySelector('.navbar')
const body = document.querySelector('body')
const navLinks = document.querySelectorAll('.nav-link')

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault()
  
  navMenu.classList.toggle('active')

  const active = navMenu.classList.contains('active')
  event.currentTarget.setAttribute('aria-expanded', active)

  active ? event.currentTarget.setAttribute('aria-label', 'Close Menu') : event.currentTarget.setAttribute('aria-label', 'Open Menu')

  // Disable scrolling in the background when the hamburger menu is open
  active ? body.classList.add('fixed-position') : body.classList.remove('fixed-position')
}

mobileButton.addEventListener('click', toggleMenu)
mobileButton.addEventListener('touchstart', toggleMenu)

// Close hamburger menu when we click a link.
function closeMenu() {
  navMenu.classList.remove('active')
  body.classList.remove('fixed-position')
}

navLinks.forEach((navLink) => navLink.addEventListener('click', closeMenu))
navLinks.forEach((navLink) => navLink.addEventListener('touchstart', closeMenu))
