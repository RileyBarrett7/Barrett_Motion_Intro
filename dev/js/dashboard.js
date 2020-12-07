import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);



const dashBoardTL = gsap.timeline();
dashBoardTL.from("#dashboard-full",{duration:.5, alpha:0}, "sametime3")

            .from("#Main",{duration:.5, alpha:0}, "sametime3")
            .from("#Map",{duration:.5, alpha:0}, "sametime3")
            .from("#Media",{duration:.5, alpha:0}, "sametime3")

            // .from("#speedometer",{duration:1, alpha:0, ease: "power4.out"}, "sametime2")


            // BACK SPEEDOMETER DRAW IN
            .to("#speed-back-stroke",{duration:.5, drawSVG:"10% 90%"}, "sametime2")
            .from("#rpm-back-stroke",{duration:.5, drawSVG:"80% 30%"}, "sametime2")

            // ROAD DRAWING IN
            .from("#line-left",{duration:.5, drawSVG:"0%"}, "sametime2")
            .from("#line-right",{duration:.5, drawSVG:"0%"}, "sametime2")
            .from("#arrow",{duration:.5, alpha:0})
            .from("#line-middle",{duration:.5, drawSVG:"0%"})

            // ELEMENTS FADE IN DRAWSVG
            .from("#park-drive",{duration:1, alpha:0, ease: "power4.out"}, "sametime4")
            .from("#R8",{duration:1, alpha:0, ease: "power4.out"}, "sametime4")
            .from("#RPM",{duration:1, alpha:0, ease: "power4.out"}, "sametime4")
            .from("#x1000",{duration:1, alpha:0, ease: "power4.out"}, "sametime4")
            .from("#speed",{duration:1, alpha:0, ease: "power4.out"}, "sametime4")
            .from("#speed-numbers",{duration:1, alpha:0, ease: "power4.out"}, "sametime4")
            .from("#rpm-numbers",{duration:1, alpha:0, ease: "power4.out"}, "sametime4")
            .from("#mph",{duration:1, alpha:0, ease: "power4.out"}, "sametime4")


            .from("#side-icons",{duration:.3, x:1200}, "sametime4")
            .from("#music",{duration:.3, y:800}, "sametime4")

            // ROAD DRAWING OUT
            .to("#line-left",{duration:.5, drawSVG:"0%"}, "sametime5")
            .to("#line-right",{duration:.5, drawSVG:"0%"}, "sametime5") 
            .to("#arrow",{duration:.5, alpha:0}, "sametime5")
            .to("#line-middle",{duration:.5, drawSVG:"0%"}, "sametime5")
            
            .to("#fan-full-icon",{duration:.5, x:11})
            .from("#temp",{duration:.5, x:275})
            .to("#fan-side-icon",{duration:.5, x:-11})


            .to("#gas-full-icon",{duration:.5, x:11})
            .from("#gas",{duration:.5, x:275})
            .to("#gas-side-icon",{duration:.5, x:-11})

            .to("#battery-full-icon",{duration:.5, x:11})
            .from("#car-icons",{duration:.5, x:275})
            .to("#battery-side-icon",{duration:.5, x:-8})
            .from("#circle1",{duration:.5, x:48, y:15}, "sametime6")
            .from("#circle2",{duration:.5, x:20, y:15}, "sametime6")
            .from("#circle3",{duration:.5, x:-10, y:15}, "sametime6")
            .from("#circle4",{duration:.5, x:-37, y:15}, "sametime6")
            .from("#icon-elements",{duration:.5, alpha:0})

            .from("#rpm-red-stroke",{duration:2, drawSVG:"0%"})
            .from("#speed-red-stroke",{duration:2, drawSVG:"0%"});


export function dashBoardAnimation(){
    return dashBoardTL;
}