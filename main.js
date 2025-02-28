gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);
ScrollTrigger.normalizeScroll(true)

let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
  normalizeScroll: true
});

let links = gsap.utils.toArray("nav a");
links.forEach(a => {
  let element = document.querySelector(a.getAttribute("href")),
    linkST = ScrollTrigger.create({
      trigger: element,
      start: "top top",
    });

  ScrollTrigger.create({
    trigger: element,
    start: "top center",
    end: "bottom center",
    onToggle: self => self.isActive && setActive(a)
  });

  a.addEventListener("click", e => {
    e.preventDefault();
    smoother.scrollTo(window, {
      duration: 1,
      scrollTo: linkST.start,
      overwrite: "auto"}
    );
  });
});

function setActive(link) {
  links.forEach(el => el.classList.remove("active"));
  link.classList.add("active");
}

gsap.to("#yearcounter", {
  rotation: 360,
  duration: 1,
  scrollTrigger: {
    containerAnimation: originTween,
    trigger: "#yearcounter",
    start: "top center",
    toggleActions: "play none none reverse",
  }
})

gsap.to('.yearcounter', {
  scrollTrigger: '#origins',
  pin: true,
  left: 500
});
