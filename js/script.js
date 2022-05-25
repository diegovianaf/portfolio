const mobileButton = document.querySelector('.mobile-btn')
const navMenu = document.querySelector('.navbar')

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault()
  
  navMenu.classList.toggle('active')

  const active = navMenu.classList.contains('active')
  event.currentTarget.setAttribute('aria-expanded', active)

  active ? event.currentTarget.setAttribute('aria-label', 'Close Menu') : event.currentTarget.setAttribute('aria-label', 'Open Menu')
}

mobileButton.addEventListener('click', toggleMenu)
mobileButton.addEventListener('touchstart', toggleMenu)

// Close hamburger menu when we click a link.
const navLinks = document.querySelectorAll('.nav-link')

function closeMenu() {
  navMenu.classList.remove('active')
}

navLinks.forEach((navLink) => navLink.addEventListener('click', closeMenu))
