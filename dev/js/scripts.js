// import * as Demo from './demo.js';

// console.log(Demo);

import {gsap} from "gsap";

// import {logoAnimation} from "./demo.js";
import {loadBarAnimation} from "./demo.js";


const mainTl = gsap.timeline();

// mainTl.add(logoAnimation());
mainTl.add(loadBarAnimation());

