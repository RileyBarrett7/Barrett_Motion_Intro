import {gsap} from "gsap";
import {boxSpeed} from "./animationSpeed.js"

export function blueBoxAnimation(){

    var tl = gsap.timeline();

    tl.to(".blue-box",{duration: boxSpeed,borderRadius: "100", y:500, x:100},"startBoxes");

    return tl;
    
}