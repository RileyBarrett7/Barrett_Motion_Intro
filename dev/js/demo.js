import {gsap} from "gsap";

// NUMBER COUNTER
var startCount = 0,
    endCount,
    activeIndex = 1,
    tm = 2.8,
    num = { var: startCount },
    numbers = document.getElementById("counter");
    

function countIt() {
activeIndex == 1 ? endCount = 100 : endCount = 100;
gsap.to(num, tm, {var: endCount, onUpdate:changeNumber});
}

function changeNumber() {
  numbers.innerHTML = (num.var).toFixed();  
}

//countIt();


// LOADING BAR ANIMATION
const loadBarTL = gsap.timeline();
loadBarTL.from("#RR",{duration:1, alpha:0, x:500}, "sametime6")
          .from("#EIGHT",{duration:1, alpha:0, x:500}, "sametime6")
          .from("#red",{duration:1, x:-600}, "sametime6")
          .from("#white",{duration:1, x:-800}, "sametime6")
          .from("#yellow",{duration:1, x:-1000}, "sametime6")
          .from("#light-grey",{duration:1, x:-1200}, "sametime6")
          .from("#blue",{duration:1, x:-1400}, "sametime6")
          .from("#dark-grey",{duration:1, x:-1600}, "sametime6")
          .from("#r8-logo",{duration:1, alpha:1})
          .to("#r8-logo",{duration:.5, alpha:0}, "sametime7")

          .from("#logo",{duration:1, scale:350, x:-11000, y:-3800}, "sametime7")
          
          .from("#light-right-cp",{duration:1, alpha:0}, "sametime4")
          .from("#light-right",{duration:1, alpha:0}, "sametime4")
          .from("#loadbar-right",{duration:1,  alpha:0}, "sametime4")
          .from("#light-left-cp",{duration:1, alpha:0}, "sametime4")
          .from("#light-left",{duration:1, alpha:0}, "sametime4")
          .from("#loadbar-left",{duration:1, alpha:0}, "sametime4")

          .from("#counter",{duration:1, alpha:0, onComplete: countIt}, "sametime4")
          .from("#percentage",{duration:1, alpha:0}, "sametime4")
          .from("#loading-text",{duration:1, alpha:0}, "sametime4")

          .from("#loadbar-left",{duration:3, x:157, ease: "power2.out"}, "sametime")
          .from("#loadbar-right",{duration:3, x:-157, ease: "power2.out"}, "sametime")

          .to("#counter",{duration:.5, alpha:0}, "sametime3")
          .to("#percentage",{duration:.5, alpha:0}, "sametime3")
          .to("#loading-text",{duration:.5, alpha:0}, "sametime3")

          .to("#light-right-cp",{duration:.5, x:400, alpha:0}, "sametime3")
          .to("#light-right",{duration:.5, x:300, alpha:0}, "sametime3")
          .to("#loadbar-right",{duration:.5, x:300, alpha:0}, "sametime3")
          .to("#light-left-cp",{duration:.5, x:-300, alpha:0}, "sametime3")
          .to("#light-left",{duration:.5, x:-300, alpha:0}, "sametime3")
          .to("#loadbar-left",{duration:.5, x:-300, alpha:0}, "sametime3")
      
          .to("#logo",{duration:3, scale:350, x:-11000, y:-3800}, "sametime5");
         



export function loadBarAnimation(){
    return loadBarTL;
}


