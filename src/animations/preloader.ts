import GSAP from 'gsap'

export const preloader = () => {
  GSAP.timeline()
    .to('[data-animation="preloader"]', {
      height: '100vh',
      ease: 'power3.inOut',
    })
    .to('[data-animation="preloader"] > div  span', {
      opacity: 1,
      stagger: 0.075,
    })
    .to('[data-animation="preloader"]', {
      delay: 1,
      autoAlpha: 0,
    })
}
