import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section2TL = gsap.timeline();

section2TL.from("#section-3 img",{duration: 2, alpha:0});

        

export function section3Animation(){
    ScrollTrigger.create({

        markers: true,
        animation: section2TL,
        toggleActions: "play none none none",
        trigger: "#section-3",
        start: "top, 50%",
        end: "bottom, 50%"
    });
}