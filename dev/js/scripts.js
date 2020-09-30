import {gsap} from "gsap";

import {redBoxAnimation} from "./redBox.js"
import {blueBoxAnimation} from "./blueBox.js"
import {blackRectangleAnimation} from "./blackRectangle.js"


const mainTL = gsap.timeline({pasued:true});

    mainTL.add(redBoxAnimation())
        .add(blueBoxAnimation())
        .add(blackRectangleAnimation())
        .play();
