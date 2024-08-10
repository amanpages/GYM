document.addEventListener("mousemove", (e) => {
    gsap.to("#cursor", {
        x: e.clientX +20,
        y: e.clientY,
    })
    gsap.to("#cursor-blur", {
        x: e.clientX -140,
        y: e.clientY - 140,
    })
})

document.querySelectorAll("#nav h4, .elem").forEach((h4) => {
    h4.addEventListener("mouseenter", () => {
        gsap.to("#cursor", {
            scale: 2.5,
            border: "1px solid #fff",
            backgroundColor: "transparent",
        })
    })
    h4.addEventListener("mouseleave", () => {
        gsap.to("#cursor", {
            scale: 1,
            border: "0px solid #dbe210f0",
            backgroundColor: "#dbe210f0",
        })
    })
})
gsap.to("#nav", {
    backgroundColor: "#D0D017",
    height: "100px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})
gsap.to("#nav h4", {
    color: "#000",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#about img , #about-us", {
    y:90,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        scrub: 3
    }
})

gsap.from("#cards-container", {
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger: "#cards-container",
        scroller: "body",
        start: "top 70%",
        end: "top 60%",
        scrub: 1
    }
})

gsap.from("#banner > h3, button", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: "#banner",
      scroller: "body",
      start: "top 90%",
      end: "top 80%",
      scrub: 2,
    },
  });

gsap.from("#colon1", {
    y:-70,
    x:-70,
    duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2", {
    y:70,
    x:70,
    duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 90%",
        end:"top 80%",
        scrub:3
    }
})




