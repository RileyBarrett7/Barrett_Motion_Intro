import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
// import { CustomeEase } from "gsap/GSDevTools";
// import { logoAnimation } from "./demo.js";
import {loadBarAnimation} from "./demo.js";
import {dashBoardAnimation} from "./dashboard.js";

gsap.registerPlugin(GSDevTools);
// gsap.registerPlugin(CustomeEase);


const mainTl = gsap.timeline();

// mainTl.add(logoAnimation());
mainTl.add(loadBarAnimation());
mainTl.add(dashBoardAnimation());

GSDevTools.create();
// CustomeEase.create();