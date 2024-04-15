'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";

import { GuideList } from "@/components/app/components/cardLayouts";

export default function Guides() {
    return(
        <section className="flex flex-col items-start justify-center w-4/5 space-y-6">
            {/* Header */}
            <header className="space-y-4">
                <div className="text-3xl font-semibold flex flex-row items-center space-x-3 bg-black py-3 px-4 rounded-xl text-eafc w-fit shadow-md shadow-violet-300/30">
                    <FontAwesomeIcon icon={faArrowUpRightDots} /> <span>Guides</span>
                </div>
                <p className="text-lg font-normal">
                    This is your essential hub for mastering EA FC 24, providing strategic insights to elevate your gameplay. Our collection of video tutorials covers everything from basic skills for newcomers to advanced tactics for veteran players. Learn to enhance your dribbling, understand team formations, and master set-pieces through expertly crafted guides. Dive into these resources to refine your techniques and excel in EA FC 24.
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