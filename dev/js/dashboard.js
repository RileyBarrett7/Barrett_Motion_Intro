import {gsap} from "gsap";




const dashBoardTL = gsap.timeline();
dashBoardTL.from("#dashboard-full",{duration:.5, alpha:0}, "sametime3")

            .from("#Main",{duration:.5, alpha:0}, "sametime3")
            .from("#Map",{duration:.5, alpha:0}, "sametime3")
            .from("#Media",{duration:.5, alpha:0}, "sametime3")

            // .from("#speedometer",{duration:1, alpha:0, ease: "power4.out"}, "sametime2")
            .from("#speed",{duration:1, alpha:0, ease: "power4.out"}, "sametime4")
            .from("#mph",{duration:1, alpha:0, ease: "power4.out"}, "sametime4")
            .from("#road",{duration:1, alpha:0, ease: "power4.out"}, "sametime2")

            .from("#side-icons",{duration:1, x:1100}, "sametime")
            .from("#music",{duration:1, y:1000}, "sametime")

            
            .to("#fan-full-icon",{duration:.5, x:11})
            .from("#temp",{duration:.5, x:275})
            .to("#fan-side-icon",{duration:.5, x:-11})

            .to("#road",{duration:.5, alpha:0})

            .to("#gas-full-icon",{duration:.5, x:11})
            .from("#gas",{duration:.5, x:275})
            .to("#gas-side-icon",{duration:.5, x:-11})

            .to("#battery-full-icon",{duration:.5, x:11})
            .from("#car-icons",{duration:.5, x:275})
            .to("#battery-side-icon",{duration:.5, x:-8});







export function dashBoardAnimation(){
    return dashBoardTL;
}