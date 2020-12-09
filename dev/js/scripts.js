import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
// import { CustomeEase } from "gsap/GSDevTools";
import {loadBarAnimation} from "./demo.js";
import {dashBoardAnimation} from "./dashboard.js";

// import {speedCounter} from "./dashboard.js";
// console.log(speedCounter);


gsap.registerPlugin(GSDevTools);
// gsap.registerPlugin(CustomeEase);


const mainTl = gsap.timeline();


mainTl.add(loadBarAnimation())
    .add(dashBoardAnimation());

GSDevTools.create();
// CustomeEase.create();