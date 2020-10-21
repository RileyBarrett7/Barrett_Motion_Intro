// import * as Demo from './demo.js';

// console.log(Demo);

import {gsap} from "gsap";

import {saveButtonAnimation} from "./demo.js";


const mainTl = gsap.timeline();

mainTl.add(saveButtonAnimation());
