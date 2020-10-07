import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section2TL = gsap.timeline();

section2TL.from("#section-4 img",{duration: 1, alpha:0, x:-500})
        .from("#section-4-intro h3",{duration: 0.5, alpha:0})
        .from("#section-4-intro h4",{duration: 0.5, alpha:0})
        .from("#hr1 hr",{duration: 0.5, alpha:0, x:400})
        .from("#hr2 hr",{duration: 0.5, alpha:0, x:400});
        

export function section4Animation(){
    ScrollTrigger.create({

        markers: true,
        animation: section2TL,
        toggleActions: "play none none none",
        trigger: "#section-4",
        start: "top, 50%",
        end: "bottom, 50%"
    });
}