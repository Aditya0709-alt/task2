$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:7000,
    autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:5
        }
    }
})


function sectionOne() {
gsap.from(".circle-text-heading1,.circle-text-para1,.block-a-notice1", {
    y: 200,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
});

gsap.from(".block-a-page1-img,.block-a-heading1,.block-a-para1", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
});
gsap.from(".block-b-page1-1-img", {
    opacity: 0,
    duration: 1,
    y: 700,
});
gsap.from(".block-b-page1-2-img", {
    opacity: 0,
    duration: 1,
    y: 700,
});
document.getElementById("sectionOne").classList.remove("hidding-page");
document.getElementById("sectionTwo").classList.add("hidding-page");
document.getElementById("sectionThree").classList.add("hidding-page");
document.getElementById("sectionFour").classList.add("hidding-page");
document.getElementById("sectionFive").classList.add("hidding-page");
document.getElementById("sectionSix").classList.add("hidding-page");
document.getElementById("sectionSeven").classList.add("hidding-page");
}

function sectionTwo() {
gsap.from(".circle-text-heading2,.circle-text-para2,.block-a-notice2", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
});
gsap.from(".block-a-heading2,.block-a-para2", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
});
gsap.from(".block-b-page2-1-img", {
    opacity: 0,
    duration: 0.5,
    y: 100,
});
gsap.from(".block-b-page2-2-img", {
    opacity: 0,
    duration: 0.5,
    y: -100,
});
document.getElementById("sectionOne").classList.add("hidding-page");
document.getElementById("sectionTwo").classList.remove("hidding-page");
document.getElementById("sectionThree").classList.add("hidding-page");
document.getElementById("sectionFour").classList.add("hidding-page");
document.getElementById("sectionFive").classList.add("hidding-page");
document.getElementById("sectionSix").classList.add("hidding-page");
document.getElementById("sectionSeven").classList.add("hidding-page");
}

function sectionThree() {
gsap.from(".circle-text-page3-img,.circle-text-para3,.block-a-notice3", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
});
gsap.from(".block-a-heading3,.block-a-para3", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
});
gsap.from(".block-b-page3-1-img", {
    opacity: 0,
    duration: 0.5,
    y: 100,
});
gsap.from(".block-b-page3-2-img", {
    opacity: 0,
    duration: 0.5,
    y: -100,
});
document.getElementById("sectionOne").classList.add("hidding-page");
document.getElementById("sectionTwo").classList.add("hidding-page");
document.getElementById("sectionThree").classList.remove("hidding-page");
document.getElementById("sectionFour").classList.add("hidding-page");
document.getElementById("sectionFive").classList.add("hidding-page");
document.getElementById("sectionSix").classList.add("hidding-page");
document.getElementById("sectionSeven").classList.add("hidding-page");
}

function sectionFour() {
gsap.from(".circle-text-heading4,.circle-text-para4,.block-a-notice4", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
});
gsap.from(".block-a-heading4,.block-a-para4", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
});
gsap.from(".block-b-page4-1-img", {
    opacity: 0,
    duration: 0.5,
    y: 100,
});
gsap.from(".block-b-page4-2-img", {
    opacity: 0,
    duration: 0.5,
    y: -100,
});
gsap.from(".block-b-page4-3-img", {
    opacity: 0,
    duration: 0.5,
    y: -100,
});
gsap.from(".block-b-page4-4-img", {
    opacity: 0,
    duration: 0.5,
    y: -200,
    x: 200,
});
gsap.from(".block-b-page4-5-img", {
    opacity: 0,
    duration: 0.5,
    y: 200,
    x: 200,
});
document.getElementById("sectionOne").classList.add("hidding-page");
document.getElementById("sectionTwo").classList.add("hidding-page");
document.getElementById("sectionThree").classList.add("hidding-page");
document.getElementById("sectionFour").classList.remove("hidding-page");
document.getElementById("sectionFive").classList.add("hidding-page");
document.getElementById("sectionSix").classList.add("hidding-page");
document.getElementById("sectionSeven").classList.add("hidding-page");
}

function sectionFive() {
gsap.from(".circle-text-heading5,.circle-text-para5,.block-a-notice5", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
});
gsap.from(".block-a-heading5,.block-a-para5", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
});
gsap.from(".block-b-page5-1-img", {
    opacity: 0,
    duration: 0.5,
    y: 200,
});
gsap.from(".block-b-page5-2-img", {
    opacity: 0,
    duration: 0.5,
    y: -200,
});
gsap.from(".block-b-page5-3-img", {
    opacity: 0,
    duration: 0.5,
    y: 300,
});
gsap.from(".block-b-page5-4-img", {
    opacity: 0,
    duration: 0.5,
    y: -100,
});
gsap.from(".block-b-page5-5-img", {
    opacity: 0,
    duration: 0.5,
    y: 100,
});
document.getElementById("sectionOne").classList.add("hidding-page");
document.getElementById("sectionTwo").classList.add("hidding-page");
document.getElementById("sectionThree").classList.add("hidding-page");
document.getElementById("sectionFour").classList.add("hidding-page");
document.getElementById("sectionFive").classList.remove("hidding-page");
document.getElementById("sectionSix").classList.add("hidding-page");
document.getElementById("sectionSeven").classList.add("hidding-page");
}

function sectionSix() {
gsap.from(".circle-text-heading6,.circle-text-para6,.block-a-notice6", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
});
gsap.from(".block-a-heading6,.block-a-para6", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
});
gsap.from(".block-b-page6-1-img", {
    opacity: 0,
    duration: 0.5,
    y: 300,
});
document.getElementById("sectionOne").classList.add("hidding-page");
document.getElementById("sectionTwo").classList.add("hidding-page");
document.getElementById("sectionThree").classList.add("hidding-page");
document.getElementById("sectionFour").classList.add("hidding-page");
document.getElementById("sectionFive").classList.add("hidding-page");
document.getElementById("sectionSix").classList.remove("hidding-page");
document.getElementById("sectionSeven").classList.add("hidding-page");
}

function sectionSeven() {
gsap.from(".circle-text-heading7,.circle-text-para7,.block-a-notice7", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
});
gsap.from(".block-a-page7-img,.block-a-heading7,.block-a-para7", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
});
gsap.from(".block-b-page7-1-img", {
    opacity: 0,
    duration: 0.5,
    y: 100,
});
gsap.from(".block-b-page7-2-img", {
    opacity: 0,
    duration: 0.5,
    y: 100,
});
document.getElementById("sectionOne").classList.add("hidding-page");
document.getElementById("sectionTwo").classList.add("hidding-page");
document.getElementById("sectionThree").classList.add("hidding-page");
document.getElementById("sectionFour").classList.add("hidding-page");
document.getElementById("sectionFive").classList.add("hidding-page");
document.getElementById("sectionSix").classList.add("hidding-page");
document.getElementById("sectionSeven").classList.remove("hidding-page");
}

gsap.registerPlugin(ScrollTrigger);

let Page1_time = gsap.timeline({
scrollTrigger: {
    trigger: ".desktop-view-display-container",
    start: "center 150%",
    end: "center 130%",
    onLeave: () => sectionTwo(),
    onEnterBack: () => sectionOne(),
},
});
let Page2_time = gsap.timeline({
scrollTrigger: {
    trigger: ".desktop-view-display-container",
    start: "center 125%",
    end: "center 100%",
    onLeave: () => sectionThree(),
    onEnterBack: () => sectionTwo(),
},
});

let Page3_time = gsap.timeline({
scrollTrigger: {
    trigger: ".desktop-view-display-container",
    start: "center 100%",
    end: "center 65%",
    onLeave: () => sectionFour(),
    onEnterBack: () => sectionThree(),
},
});

let Page4_time = gsap.timeline({
scrollTrigger: {
    trigger: ".desktop-view-display-container",
    start: "center 65%",
    end: "center 35%",
    onLeave: () => sectionFive(),
    onEnterBack: () => sectionFour(),
},
});

let Page5_time = gsap.timeline({
scrollTrigger: {
    trigger: ".desktop-view-display-container",
    start: "center 35%",
    end: "center 5%",
    onLeave: () => sectionSix(),
    onEnterBack: () => sectionFive(),
},
});

let Page6_time = gsap.timeline({
scrollTrigger: {
    trigger: ".desktop-view-display-container",
    start: "center 5%",
    end: "center -25%",
    onLeave: () => sectionSeven(),
    onEnterBack: () => sectionSix(),
},
});

let Page7_time = gsap.timeline({
scrollTrigger: {
    trigger: ".desktop-view-display-container",
    start: "center -25%",
    end: "center -55%",
},
});
