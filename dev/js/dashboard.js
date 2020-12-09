import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);




// /*
// Change the counter speed for how fast your want your number to go up. 1000 is equal to 1 second

// 1000 = 1 second
// 500 = 1/2 second
// 250 = 1/4 second
// */
// var counterSpeed = 6000;

// // Set this number you want your counter to count up to. Default is 20
// var topSpeed = 86;

// // If you don't want your speed to start at 0, change it here. Default is 0.
// var speedNumber = 0;

// var myVar = setInterval(speedCounter, counterSpeed);

// export function speedCounter() {
// 	if (speedNumber < topSpeed) {
// 		speedNumber++;
// 		document.getElementById("speedTag").innerHTML = speedNumber;
// 	} else {
// 		clearInterval(myVar);
// 	}
// 	return speedNumber;
// }

var startCount = 0,
    endCount,
    activeIndex = 1,
    tm = 6,
    num = { var: startCount },
    numbers = document.getElementById("counter");
    

function countIt() {
activeIndex == 1 ? endCount = 98 : endCount = 98;
gsap.to(num, tm, {var: endCount, onUpdate:changeNumber});
}

function changeNumber() {
  numbers.innerHTML = (num.var).toFixed();  
}


const dashBoardTL = gsap.timeline();
dashBoardTL.from("#dashboard-full",{duration:.5, alpha:0}, "sametime3")

            .from("#Main",{duration:.5, alpha:0}, "sametime3")
            .from("#Map",{duration:.5, alpha:0}, "sametime3")
            .from("#Media",{duration:.5, alpha:0}, "sametime3")

            // .from("#speedometer",{duration:1, alpha:0, ease: "power4.out"}, "sametime2")


            // BACK SPEEDOMETER DRAW IN
            .from("#speed-back-stroke",{duration:.5, drawSVG:"0%"}, "sametime2")
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
            .from("#album-cover",{duration:.5, alpha:0, ease: "none"}, "sametime4")

            .from("#speed-counter",{duration:1, alpha:0, onComplete: countIt}, "sametime4")

            // SPEEDOMETER DRIVING
            .to("#D",{duration:.3, fill: "#F50437"}, "sametime7")
            .to("#P",{duration:.3, fill: "#FFF"}, "sametime7")

            // .from("#speed-red-stroke",{duration:4, drawSVG:"0%", ease: "power4.out"})
            .fromTo("#speed-red-stroke",{drawSVG:"0%"}, {duration: 6, drawSVG:"40%", ease: "power2.out"})
            // .to("#speed-red-stroke",{duration:2, drawSVG:"60%"})


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

            .from("#rpm-red-stroke",{duration:2, drawSVG:"0%"});
            // .from("#speed-red-stroke",{duration:2, drawSVG:"0%"});


export function dashBoardAnimation(){
    return dashBoardTL;
}