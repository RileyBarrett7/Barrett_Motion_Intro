import {gsap} from "gsap";




const dashBoardTL = gsap.timeline();
// dashBoardTL.from("#RR",{duration:1, alpha:0, x:500}, "sametime6")










export function dashBoardAnimation(){
    return dashBoardTL;
}