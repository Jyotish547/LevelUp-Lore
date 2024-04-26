"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons";

import { RateType } from "@/components/app/components/types/fc24Type";
import { useEffect, useState } from "react";

import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

import { SkillMoves } from "@/components/app/components/cardLayouts";
import { SkillMove } from "@/components/pages/api/allSkillMoves";

import { F3Filter } from "@/components/app/components/filterComp";

import { motion } from "framer-motion";
import { pageItem, pageList } from "@/components/app/components/animations"; 

export default function SkillMovesFC() {

    const [rating, setRating] = useState<RateType[]>([]);
    const [skillData, setSkillData] = useState<SkillMove[]>([])

    useEffect(() => {
        const fetchSkillData = async () => {
            try {
                const response = await axios.get<SkillMove[]>(`/api/allSkillMoves`);
                setSkillData(response.data);
            } catch(error) {
                console.log('Unable to fetch skills data:', error);
            }
        }
        fetchSkillData();
    }, [])

    // console.log(rating)

    return(
        <motion.section className="flex flex-col items-start justify-center w-full space-y-6"
            variants={pageList}
            initial="hidden"
            animate="visible"
        >
            {/* Header */}
            <motion.header className="space-y-4" variants={pageItem}>
                <div className="text-3xl font-semibold flex flex-row items-center space-x-3 text-eafc w-fit">
                    <FontAwesomeIcon icon={faRankingStar} /> <span>Skill Moves</span>
                </div>
                <p className="text-base text-neutral-300 font-normal leading-relaxed">
                This an essential guide for players seeking to improve their gameplay through effective dribbling and skillful maneuvers. It features a variety of moves rated from basic to advanced, complete with star levels and specific controller commands for seamless execution.
                <br />
                This resource aims to equip gamers with the techniques needed to navigate past opponents with ease, enhancing the tactical depth and enjoyment of matches. By mastering these skills, players can significantly boost their team&apos;s performance and enjoy a more dynamic and engaging football experience in EA FC 24.
                </p>
            </motion.header>

            <motion.hr className="w-full rounded-lg" variants={pageItem} />

            <motion.div className="w-full" variants={pageItem}>
                {/* Filter Div */}
                <F3Filter selectRate={rating} setSelectRate={setRating} />
            </motion.div>
            <motion.div className="w-full" variants={pageItem}>
                <SkillMoves skillData={skillData.filter(r => rating.length > 0 ? rating.some(rate => rate === r.star.toString()) : true)} setSkillData={setSkillData} />
            </motion.div>
        </motion.section>
    )
}