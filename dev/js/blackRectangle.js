import {gsap} from "gsap";
import {boxSpeed} from "./animationSpeed.js"

export function blackRectangleAnimation(){

    var tl = gsap.timeline();

    tl.to(".black-rectangle",{duration: boxSpeed, alpha:0,  x:500, scale:.5});

    return tl;
    
}