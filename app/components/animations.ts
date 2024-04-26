import { motion } from "framer-motion";
import { animate, stagger } from "framer-motion";
import { Variants } from "framer-motion";

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

// Default Page load

export const pageList: Variants = {
    hidden: { },
    visible: {
        transition: {
            staggerChildren: 0.15,
        }
    }
}

export const pageItem: Variants = {
    hidden: { opacity: 0, x: 400 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.6
        }
    }
}

export const downChild: Variants = {
    hidden: { opacity: 0, y: 400 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.6
        }
    }
}

export const downHome: Variants = {
    hidden: { opacity: 0, y: 400 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.5
        }
    }
}

export const upChild: Variants = {
    hidden: { opacity: 0, y: -400 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.6
        }
    }
}

export const upHome: Variants = {
    hidden: { opacity: 0, y: -400 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.5
        }
    }
} 

export const appear: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.6
        }
    }
}