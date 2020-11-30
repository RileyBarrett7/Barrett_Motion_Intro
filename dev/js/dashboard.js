import {gsap} from "gsap";




const dashBoardTL = gsap.timeline();
dashBoardTL.from("#dashboard-full",{duration:3, alpha:0});










export function dashBoardAnimation(){
    return dashBoardTL;
}