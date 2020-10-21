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




// LOADING BAR ANIMATION
const saveButtonTL = gsap.timeline();
saveButtonTL.from("#load-bar",{duration:5, x:-100})
            .from("#percentage",{duration:.05, x:100});



export function saveButtonAnimation(){
    return saveButtonTL;
}

