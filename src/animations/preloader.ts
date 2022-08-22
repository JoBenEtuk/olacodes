import GSAP from 'gsap'

export const preloader = () => {
  GSAP.timeline()
    .set(
      '[data-animation="home"] > p > span',
      {
        opacity: 0,
      },
      'start'
    )
    .set(
      '[data-animation="home__h1"] > span > span',
      {
        y: 250,
        rotate: 10,
      },
      'start'
    )
    .to(
      '[data-animation="preloader"]',
      {
        height: '100vh',
        ease: 'power3.inOut',
      },
      'start'
    )
    .to('[data-animation="preloader"] > div  span', {
      opacity: 1,
      stagger: 0.075,
    })
    .to('[data-animation="preloader"]', {
      delay: 1,
      autoAlpha: 0,
    })
    .to(
      '[data-animation="home"] > p > span',
      {
        opacity: 1,
        top: 0,
        stagger: 0.02,
        ease: 'back.out(2.75)',
        duration: 0.75,
      },
      'anim'
    )
    .to(
      '[data-animation="home__h1"] > span > span',
      {
        y: 0,
        rotate: 0,
        ease: 'back.out(2)',
        duration: 1,
      },
      'anim'
    )
}
