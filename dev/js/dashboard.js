import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);



const dashBoardTL = gsap.timeline();
dashBoardTL.from("#dashboard-full",{duration:.5, alpha:0}, "sametime3")

            .from("#Main",{duration:.5, alpha:0}, "sametime3")
            .from("#Map",{duration:.5, alpha:0}, "sametime3")
            .from("#Media",{duration:.5, alpha:0}, "sametime3")

            // .from("#speedometer",{duration:1, alpha:0, ease: "power4.out"}, "sametime2")


            // SPEEDOMETER DRAWSVG

            .from("#speed-back-stroke",{duration:.5, drawSVG:"50%"})
            .from("#rpm-back-stroke",{duration:.5, drawSVG:"80% 30%"})
            

            .from("#park-drive",{duration:1, alpha:0, ease: "power4.out"}, "sametime4")
            .from("#R8",{duration:1, alpha:0, ease: "power4.out"}, "sametime4")
            .from("#RPM",{duration:1, alpha:0, ease: "power4.out"}, "sametime4")
            .from("#x1000",{duration:1, alpha:0, ease: "power4.out"}, "sametime4")
            .from("#speed",{duration:1, alpha:0, ease: "power4.out"}, "sametime4")
            .from("#speed-numbers",{duration:1, alpha:0, ease: "power4.out"}, "sametime4")
            .from("#rpm-numbers",{duration:1, alpha:0, ease: "power4.out"}, "sametime4")
            .from("#mph",{duration:1, alpha:0, ease: "power4.out"}, "sametime4")
            .from("#road",{duration:1, alpha:0, ease: "power4.out"})

            .from("#side-icons",{duration:.3, x:1200}, "sametime4")
            .from("#music",{duration:.3, y:800}, "sametime4")

            
            .to("#fan-full-icon",{duration:.5, x:11})
            .from("#temp",{duration:.5, x:275})
            .to("#fan-side-icon",{duration:.5, x:-11})

            .to("#road",{duration:.5, alpha:0})

            .to("#gas-full-icon",{duration:.5, x:11})
            .from("#gas",{duration:.5, x:275})
            .to("#gas-side-icon",{duration:.5, x:-11})

            .to("#battery-full-icon",{duration:.5, x:11})
            .from("#car-icons",{duration:.5, x:275})
            .to("#battery-side-icon",{duration:.5, x:-8})

            .from("#rpm-red-stroke",{duration:2, drawSVG:"0%"})
            .from("#speed-red-stroke",{duration:2, drawSVG:"0%"});


export function dashBoardAnimation(){
    return dashBoardTL;
}