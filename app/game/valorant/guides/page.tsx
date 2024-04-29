'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";

import { GuideList } from "@/components/app/components/valoComp";

import { motion } from "framer-motion";
import { pageItem, pageList } from "@/components/app/components/animations"; 

export default function Guides() {
    return(
        <motion.section className="flex flex-col items-start justify-center w-full space-y-6"
            variants={pageList}
            initial="hidden"
            animate="visible"
        >
            {/* Header */}
            <motion.header className="space-y-4" variants={pageItem}>
                <div className="text-2xl xl:text-3xl font-semibold flex flex-row items-center space-x-3 text-valo w-fit">
                    <FontAwesomeIcon icon={faArrowUpRightDots} /> <span>Guides</span>
                </div>
                <p className="text-sm xl:text-base text-neutral-300 font-normal leading-relaxed">
                    This is your go-to destination for mastering the game&apos;s mechanics, gaining strategic insights, and elevating your gameplay. This comprehensive collection of video tutorials covers a wide range of topics, from basic skills for beginners to advanced tactics for seasoned players. Whether you&apos;re looking to improve your shooting accuracy, learn about effective agent combinations, or discover new strategies for each map, these carefully curated guides have you covered.
                </p>
            </motion.header>

            <motion.hr className="w-full rounded-lg" variants={pageItem} />
            
            {/* Card Layout */}
            <motion.div className="w-full" variants={pageItem}>
                <GuideList />
            </motion.div>
            

        </motion.section>
    )
}