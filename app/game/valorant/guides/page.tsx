'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";

import { GuideList } from "@/components/app/components/valoComp";

export default function Guides() {
    return(
        <section className="flex flex-col items-start justify-center w-4/5 space-y-6">
            {/* Header */}
            <header className="space-y-4">
                <div className="text-3xl font-semibold flex flex-row items-center space-x-3 bg-black py-3 px-4 rounded-xl text-valo w-fit shadow-md shadow-violet-300/30">
                    <FontAwesomeIcon icon={faArrowUpRightDots} /> <span>Guides</span>
                </div>
                <p className="text-lg font-normal">
                    This is your go-to destination for mastering the game&apos;s mechanics, gaining strategic insights, and elevating your gameplay. This comprehensive collection of video tutorials covers a wide range of topics, from basic skills for beginners to advanced tactics for seasoned players. Whether you&apos;re looking to improve your shooting accuracy, learn about effective agent combinations, or discover new strategies for each map, these carefully curated guides have you covered.
                </p>
            </header>

            <hr className="w-full rounded-lg" />
            
            {/* Filters */}
            <div className="flex flex-row space-x-12">

            </div>
            
            {/* Card Layout */}
            <GuideList />

        </section>
    )
}