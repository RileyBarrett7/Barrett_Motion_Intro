import {gsap} from "gsap";




const dashBoardTL = gsap.timeline();
dashBoardTL.from("#dashboard",{duration:5, alpha:0});










export function dashBoardAnimation(){
    return dashBoardTL;
}