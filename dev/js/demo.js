import {gsap} from "gsap";

// NUMBER COUNTER
var startCount = 0,
    endCount,
    activeIndex = 1,
    tm = 5,
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
loadBarTL.from("#loadbar-left",{duration:2.5, x:157, delay:2.5, ease: "power4.out"})
          .from("#loadbar-right",{duration:2.5, x:-157, delay:-2.5, ease: "power4.out"});



export function loadBarAnimation(){
    return loadBarTL;
}


