import {gsap} from "gsap";


export function section1Animation(){
    gsap.from("#section-1 div",{duration:1.5, alpha:0, y:400});
    gsap.from("#section-15",{duration:1.5, alpha:0, x:-400});
}
