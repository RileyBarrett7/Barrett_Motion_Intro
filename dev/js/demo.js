import {gsap} from "gsap";

// NUMBER COUNTER
var startCount = 0,
    endCount,
    activeIndex = 1,
    tm = 3,
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
loadBarTL.from("#loadbar-left",{duration:3, x:157, ease: "power4.out"}, "sametime")
          .from("#loadbar-right",{duration:3, x:-157, ease: "power4.out"}, "sametime");



export function loadBarAnimation(){
    return loadBarTL;
}


