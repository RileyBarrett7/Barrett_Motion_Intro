import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section2TL = gsap.timeline();

section2TL.from("#section-2 img",{duration: 1, alpha:0, x:-500})
        .from("#section-2-intro h3",{duration: 0.4, alpha:0})
        .from("#section-2-intro h4",{duration: 0.4, alpha:0})
        .from("#section-2-intro-content hr",{duration: 0.4, alpha:0, x:400});
        // .from("#hr2",{duration: 0.5, alpha:0, x:400});
        

export function section2Animation(){
    ScrollTrigger.create({

        // markers: true,
        animation: section2TL,
        toggleActions: "play none none none",
        trigger: "#section-2",
        start: "top, 50%",
        end: "bottom, 50%"
    });
}
