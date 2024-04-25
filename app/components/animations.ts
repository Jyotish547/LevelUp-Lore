import { motion } from "framer-motion";
import { animate, stagger } from "framer-motion";
import { Variants } from "framer-motion";

const navItem = document.querySelector('navItem');

// Navbar

export const navLinkAnim: Variants = {
    hidden: { },
    visible: {
        transition: {
            staggerChildren: 0.05
        }
    }
}

export const navItemAnim: Variants = {
    hidden: { x: -400, opacity: 0 }, 
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            ease: 'easeOut',
            duration: 0.6
        }
    }
}

export const navEndAnim: Variants = {
    hidden: { },
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

export const navEndItem: Variants = {
    hidden: { opacity: 0, y: 600 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            ease: "easeOut",
            duration: 0.6
        }
    }
}