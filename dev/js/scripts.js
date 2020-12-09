import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
// import { CustomeEase } from "gsap/GSDevTools";
import {loadBarAnimation} from "./demo.js";
import {dashBoardAnimation} from "./dashboard.js";

// import {countItSpeed} from "./dashboard.js";
// console.log(countItSpeed);


gsap.registerPlugin(GSDevTools);
// gsap.registerPlugin(CustomeEase);


const mainTl = gsap.timeline();


mainTl.add(loadBarAnimation())
    .add(dashBoardAnimation());

GSDevTools.create();
// CustomeEase.create();