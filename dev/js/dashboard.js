import {gsap} from "gsap";




const dashBoardTL = gsap.timeline();
dashBoardTL.from("#dashboard-full",{duration:.5, alpha:0})
            .to("#dashboard-full",{duration:1, alpha:1})

            .from("#Main",{duration:.5, alpha:0})
            .from("#Map",{duration:.5, alpha:0})
            .from("#Media",{duration:.5, alpha:0})

            .from("#speedometer",{duration:1, alpha:0, ease: "power4.out"}, "sametime2")
            .from("#road",{duration:1, alpha:0, ease: "power4.out"}, "sametime2")

            .from("#side-icons",{duration:1, x:1100}, "sametime")
            .from("#music",{duration:1, y:1000}, "sametime")

            
            .from("#temp",{duration:1, x:1100})
            .to("#road",{duration:.5, alpha:0})
            .from("#temp",{duration:3, alpha:1})
            .from("#gas",{duration:1, x:1100})
            .from("#car-icons",{duration:1, x:1100});







export function dashBoardAnimation(){
    return dashBoardTL;
}