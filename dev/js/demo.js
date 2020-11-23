import {gsap} from "gsap";

// NUMBER COUNTER
var startCount = 0,
    endCount,
    activeIndex = 1,
    tm = 7,
    num = { var: startCount },
    numbers = document.getElementById("counter");
    

function countIt() {
activeIndex == 1 ? endCount = 100 : endCount = 100;
gsap.to(num, tm, {var: endCount, onUpdate:changeNumber});
}

function changeNumber() {
  numbers.innerHTML = (num.var).toFixed();  
}

countIt();



// // LOGO ANIMATION
// const logoTL = gsap.timeline();
// logoTL.from("#logo",{delay: 5,duration: 1,scale: 20});

// export function logoAnimation(){
//   return logoTL;
// }



// LOADING BAR ANIMATION
const loadBarTL = gsap.timeline();
loadBarTL.from("#RR",{duration:1, alpha:0, x:500}, "sametime6")
          .from("#EIGHT",{duration:1, alpha:0, x:500}, "sametime6")
          .from("#red",{duration:1, x:-100, alpha:0}, "sametime6")
          .from("#white",{duration:1, x:-100, alpha:0}, "sametime6")
          .from("#yellow",{duration:1, x:-200, alpha:0}, "sametime6")
          .from("#light-grey",{duration:1, x:-300, alpha:0}, "sametime6")
          .from("#blue",{duration:1, x:-400, alpha:0}, "sametime6")
          .from("#dark-grey",{duration:1, x:-500, alpha:0}, "sametime6")
          .from("#r8-logo",{duration:.5, alpha:1})
          .to("#r8-logo",{duration:.5, alpha:0}, "sametime7")



          .from("#logo",{duration:1, scale:350, x:-11000, y:-3800}, "sametime7")
          .from("#light-right-cp",{duration:1, alpha:0}, "sametime4")
          .from("#light-right",{duration:1, alpha:0}, "sametime4")
          .from("#loadbar-right",{duration:1,  alpha:0}, "sametime4")
          .from("#light-left-cp",{duration:1, alpha:0}, "sametime4")
          .from("#light-left",{duration:1, alpha:0}, "sametime4")
          .from("#loadbar-left",{duration:1, alpha:0}, "sametime4")

          .from("#counter",{duration:1, alpha:0}, "sametime4")
          .from("#percentage",{duration:1, alpha:0}, "sametime4")
          .from("#loading-text",{duration:1, alpha:0}, "sametime4")

          .from("#loadbar-left",{duration:3, x:157, ease: "power3.out"}, "sametime")
          .from("#loadbar-right",{duration:3, x:-157, ease: "power3.out"}, "sametime")

          .to("#counter",{duration:.5, alpha:0}, "sametime2")
          .to("#percentage",{duration:.5, alpha:0}, "sametime2")
          .to("#loading-text",{duration:.5, alpha:0}, "sametime2")

          .to("#light-right-cp",{duration:1, x:500, alpha:0}, "sametime3")
          .to("#light-right",{duration:1, x:500, alpha:0}, "sametime3")
          .to("#loadbar-right",{duration:1, x:500, alpha:0}, "sametime3")
          .to("#light-left-cp",{duration:1, x:-500, alpha:0}, "sametime3")
          .to("#light-left",{duration:1, x:-500, alpha:0}, "sametime3")
          .to("#loadbar-left",{duration:1, x:-500, alpha:0}, "sametime3")
          // .to("#logo",{duration:5, scale:350, x:-11000, y:-3800, ease: CustomEase.create("custom", "M0,0,C0.336,0.066,0.972,0.026,1,1")});
          .to("#logo",{duration:3, scale:350, x:-11000, y:-3800}, "sametime5");
         



export function loadBarAnimation(){
    return loadBarTL;
}


