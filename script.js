var tl = gsap.timeline()
tl.from(".nav",{
    y:-100,
    opacity:0,
    duration:1
},"-=0.2")
tl.from(".image .main-content h2",{
    scale:1.6,
    opacity:0,
    ease: Expo.easeInOut,
    duration:2
},"same")
tl.from(".image .main-content h1",{
    scale:1.6,
    opacity:0,
    ease: Expo.easeInOut,
    duration:2
},"same")
tl.from(".image .main-content p",{
    scale:1.6,
    opacity:0,
    ease: Expo.easeInOut,
    duration:2
},"same")
tl.from(".image .main-content button",{
    y:110,
    opacity:0,
    duration:1
},'-=1')