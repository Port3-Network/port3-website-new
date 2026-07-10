const animationContainer = document.querySelector('#landing-animation')

if (animationContainer && window.lottie) {
  window.lottie.loadAnimation({
    container: animationContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/animation/landing.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
      progressiveLoad: true,
    },
  })
}

const mobileMenu = document.querySelector('#mobile-menu')
const openButton = document.querySelector('.menu-button')
const closeButton = document.querySelector('.menu-close')

const setMenuOpen = (isOpen) => {
  mobileMenu?.classList.toggle('is-open', isOpen)
  mobileMenu?.setAttribute('aria-hidden', String(!isOpen))
  openButton?.setAttribute('aria-expanded', String(isOpen))
  document.body.classList.toggle('menu-open', isOpen)

  if (isOpen) {
    closeButton?.focus()
  } else {
    openButton?.focus()
  }
}

openButton?.addEventListener('click', () => setMenuOpen(true))
closeButton?.addEventListener('click', () => setMenuOpen(false))

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false))
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileMenu?.classList.contains('is-open')) {
    setMenuOpen(false)
  }
})

document.querySelector('#current-year').textContent = String(new Date().getFullYear())
