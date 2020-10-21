import {gsap} from "gsap";

// MorphSVGPlugin.convertToPath("circle");

const saveButtonTL = gsap.timeline();
saveButtonTL.from("#load-bar",{duration:5, x:-110});

// const MorphSVGPlugin = gsap.timeline();

// var tl = gsap.timeline({repeat:20, repeatDelay:0.3, yoyo:true, defaults:{duration:1}})

// tl.to("#circle", {morphSVG:"#c"})
//   .timeScale(3)


export function saveButtonAnimation(){
    return saveButtonTL;
}


















/* -----------------
    Demo Script
----------------- */

// var timeOfAnimation = 2;

// gsap.to(".blue-box",{duration: timeOfAnimation,borderRadius: "100", y:500, x:100});
// gsap.to(".black-rectangle",{duration: 10, alpha:0,  x:500, scale:.5});
// gsap.to(".red-box",{duration: 2, x:100, Y:50, rotation: 300})