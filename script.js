var tl = gsap.timeline();
tl.from(".nav", {
    y: 20,
    duration: 1,
    opacity:0
});
tl.from([".title-desc h1" ,".home-img #bg-img" ],{
    opacity:0,
    duration:1,
    
    scale:3
})
tl.from(".title-desc p",{
    opacity:0,
    x:-600,
    duration:1
})
tl.from(".title-desc button",{
    opacity:0,
    scale:0.3
})
tl.from(".plant-box",{
    opacity:0,
    x:30
})




