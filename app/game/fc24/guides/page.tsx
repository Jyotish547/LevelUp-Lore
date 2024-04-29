'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";

import { GuideList } from "@/components/app/components/cardLayouts";
import { motion } from "framer-motion";

import { pageItem, pageList, downChild } from "@/components/app/components/animations";

export default function Guides() {
    return(
        <motion.section className="flex flex-col items-start justify-center w-full space-y-6"
            variants={pageList}
            initial="hidden"
            animate="visible"
        >
            {/* Header */}
            <motion.header className="space-y-4" variants={pageItem}>
                <div className="text-2xl xl:text-3xl font-semibold flex flex-row items-center space-x-3 text-eafc w-fit">
                    <FontAwesomeIcon icon={faArrowUpRightDots} /> <span>Guides</span>
                </div>
                <p className="text-sm xl:text-base text-neutral-300 font-normal leading-relaxed">
                    This is your essential hub for mastering EA FC 24, providing strategic insights to elevate your gameplay. Our collection of video tutorials covers everything from basic skills for newcomers to advanced tactics for veteran players. Learn to enhance your dribbling, understand team formations, and master set-pieces through expertly crafted guides. Dive into these resources to refine your techniques and excel in EA FC 24.
                </p>
            </motion.header>

            <motion.hr className="w-full rounded-lg" variants={pageItem}/>
            
            {/* Card Layout */}
            <motion.div className="w-full" variants={pageItem}>
                <GuideList />
            </motion.div>
            

        </motion.section>
    )
}