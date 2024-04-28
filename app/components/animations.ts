import { motion, AnimatePresence } from "framer-motion";
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

// Page Animations

export const agentAnim: Variants = {
    hidden: { opacity: 0.3 },
    visible: {
        opacity: 1,
        transition: {
            type: "inertia",
            ease: "",
            opacity: 1,
            duration: 1
        }
    },
    tap: {
      transition: {
        transition: {
            type: "tween",
            ease: "easeIn",
            duration: 1,
        }
      }  
    }
}

export const overlays: Variants = {
    hidden: { opacity: 0.3 },
    visible: {
        opacity: 1,
        transition: {
            type: "inertia",
            ease: "",
            opacity: 1,
            duration: 0.5
        }
    },
    tap: {
      transition: {
        transition: {
            type: "tween",
            ease: "easeIn",
            duration: 1,
        }
      }  
    },
    exit: {
        opacity: 0.3,
        transition: {
            type: "inertia",
            ease: "",
            opacity: 1,
            duration: 0.5
        }
    }
}

export const imageSliderLeft: Variants = {
    hidden: { y: -900, opacity: 0.5, position: "absolute" },
    visible: {
        opacity: 1,
        y: 0,
        position: "relative",
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.4,
        }
    },
    exit: {
        opacity: 0,
        position: "absolute",
    }
}

export const imageSliderRight: Variants = {
    hidden: { y: 900, opacity: 0.5, position: "absolute" },
    visible: {
        opacity: 1,
        y: 0,
        position: "relative",
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.4,
        }
    },
    exit: {
        opacity: 0,
        position: "absolute",
    }
}

