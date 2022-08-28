import GSAP from 'gsap'

export const preloader = () => {
  GSAP.timeline()
    .set(
      '[data-animation="home"] > p > span',
      {
        top: '2rem',
        opacity: 0,
      },
      'start'
    )
    .set(
      '[data-animation="home__h1"] > span > span',
      {
        y: '100%',
      },
      'start'
    )
    .fromTo(
      '[data-animation="preloader"] > div  span',
      {
        top: '3rem',
      },
      {
        delay: 3,
        top: 0,
        ease: 'back.out(1.5)',
        duration: 1.5,
      }
    )
    .to('[data-animation="preloader"]', {
      delay: 1,
      autoAlpha: 0,
    })
    .to(
      '[data-animation="home"] > p > span',
      {
        opacity: 1,
        top: '0',
        stagger: 0.005,
        ease: 'back.out(2)',
        duration: 0.75,
      },
      'anim'
    )
    .to(
      '[data-animation="home__h1"] > span > span',
      {
        y: 0,
        ease: 'expo.out',
        duration: 1.5,
        stagger: 0.2,
      },
      'anim'
    )
}

export const preloader1 = () => {
  GSAP.timeline()
    .set(
      '[data-animation="home"] > p > span',
      {
        top: '1rem',
        opacity: 0,
      },
      'start'
    )
    .set(
      '[data-animation="home__h1"] > span > span',
      {
        y: '100%',
      },
      'start'
    )
    .to(
      '[data-animation="home"] > p > span',
      {
        opacity: 1,
        top: '0',
        stagger: 0.005,
        ease: 'back.out(2)',
        duration: 0.75,
      },
      'anim'
    )
    .to(
      '[data-animation="home__h1"] > span > span',
      {
        y: 0,
        ease: 'expo.out',
        duration: 1.5,
        stagger: 0.2,
      },
      'anim'
    )
}
