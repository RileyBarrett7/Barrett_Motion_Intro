// import * as Demo from './demo.js';

// console.log(Demo);

import {gsap} from "gsap";

import {loadBarAnimation} from "./demo.js";


const mainTl = gsap.timeline();

mainTl.add(loadBarAnimation());
