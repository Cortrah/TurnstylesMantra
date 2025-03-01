gsap.registerPlugin( ScrollTrigger );

function scroll1(){
  let overflow = 0;
  const row = document.querySelector( '#slides-row-origins' ).scrollWidth;
  const wrapper = document.querySelector( '#slides-wrapper-origins' ).offsetWidth;
  overflow = -( row - wrapper +300);
  return overflow;
}

function scroll2(){
  let overflow = 0;
  const row = document.querySelector( '#slides-row-dilemma' ).scrollWidth;
  const wrapper = document.querySelector( '#slides-wrapper-dilemma' ).offsetWidth;
  overflow = -( row - wrapper +300);
  return overflow;
}

function scroll3(){
  let overflow = 0;
  const row = document.querySelector( '#slides-row-cdintro' ).scrollWidth;
  const wrapper = document.querySelector( '#slides-wrapper-cdintro' ).offsetWidth;
  overflow = -( row - wrapper+300);
  return overflow;
}

function scroll4(){
  let overflow = 0;
  const row = document.querySelector( '#slides-row-cd' ).scrollWidth;
  const wrapper = document.querySelector( '#slides-wrapper-cd' ).offsetWidth;
  overflow = -( row - wrapper+300);
  return overflow;
}

function scroll5(){
  let overflow = 0;
  const row = document.querySelector( '#slides-row-oi' ).scrollWidth;
  const wrapper = document.querySelector( '#slides-wrapper-oi' ).offsetWidth;
  overflow = -( row - wrapper+300);
  return overflow;
}

window.addEventListener( 'resize', scroll );

gsap.to( '#slides-row-origins', {
  x: scroll1(),
  ease: 'none',
  scrollTrigger: {
    trigger: '#slides-row-origins',
    start: "top-=200",
    pin: true,
    scrub: 1,
    markers: true,
    invalidateOnRefresh: true,
  },
});

gsap.to( '#slides-row-dilemma', {
  x: scroll2(),
  ease: 'none',
  scrollTrigger: {
    trigger: '#slides-row-dilemma',
    start: "top-=200",
    pin: true,
    scrub: 1,
    markers: true,
    invalidateOnRefresh: true,
  },
});

gsap.to( '#slides-row-cdintro', {
  x: scroll3(),
  ease: 'none',
  scrollTrigger: {
    trigger: '#slides-row-cdintro',
    start: "top-=200",
    pin: true,
    scrub: 1,
    markers: true,
    invalidateOnRefresh: true,
  },
});

gsap.to( '#slides-row-cd', {
  x: scroll4(),
  ease: 'none',
  scrollTrigger: {
    trigger: '#slides-row-cd',
    start: "top-=200",
    pin: true,
    scrub: 1,
    markers: true,
    invalidateOnRefresh: true,
  },
});

gsap.to( '#slides-row-oi', {
  x: scroll5(),
  ease: 'none',
  scrollTrigger: {
    trigger: '#slides-row-oi',
    start: "top-=200",
    pin: true,
    scrub: 1,
    markers: true,
    invalidateOnRefresh: true,
  },
});
