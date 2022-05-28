export default function initScrollAnimation() {
  const animations = document.querySelectorAll('.fadeInDown, .fadeInUp, .fadeInRight, .fadeInLeft')
  const windowHeight = window.innerHeight * 0.8

  function scrollAnimation() {
    animations.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top
      const isSectionVisible = (sectionTop - windowHeight) < 0

      if (isSectionVisible) {
        section.classList.add('animate')
      }
    })
  }

  scrollAnimation()

  window.addEventListener('scroll', scrollAnimation)
}
