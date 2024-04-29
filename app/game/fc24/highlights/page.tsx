'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots, faFilm, faVideo } from "@fortawesome/free-solid-svg-icons";

import { HighlightList } from "@/components/app/components/cardLayouts";

import { motion } from "framer-motion";
import { pageItem, pageList } from "@/components/app/components/animations";

export default function Highlights() {
    return(
        <motion.section className="flex flex-col items-start justify-center w-full space-y-6"
            variants={pageList}
            initial="hidden"
            animate="visible"
        >
            {/* Header */}
            <motion.header className="space-y-4" variants={pageItem}>
                <div className="text-2xl xl:text-3xl font-semibold flex flex-row items-center space-x-3 text-eafc w-fit">
                    <FontAwesomeIcon icon={faFilm} /> <span>Highlights</span>
                </div>
                <p className="text-sm xl:text-base text-neutral-300 font-normal leading-relaxed">
                    The &quot;Highlights&quot; section of the FC 24 page features an exciting collection of clips from FC 24 Pro matches, showcasing the best moments from top-tier gameplay. These carefully selected highlights not only entertain but also serve as valuable learning tools. <br /> By observing the strategies, skills, and techniques employed by professional players, you can gain insights into advanced tactics and decision-making processes that can be applied to your own gameplay. This section is a fantastic resource for enhancing your understanding and performance in EA FC 24, helping you to elevate your play and achieve greater success in the game.
                </p>
            </motion.header>

            <motion.hr className="w-full rounded-lg" variants={pageItem} />
            
            {/* Card Layout */}
            <motion.div className="w-full" variants={pageItem}>
                <HighlightList />
            </motion.div>

        </motion.section>
    )
}