'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots, faFilm, faVideo } from "@fortawesome/free-solid-svg-icons";

import { HighlightList } from "@/components/app/components/cardLayouts";

export default function Highlights() {
    return(
        <section className="flex flex-col items-start justify-center w-full space-y-6">
            {/* Header */}
            <header className="space-y-4">
                <div className="text-3xl font-semibold flex flex-row items-center space-x-3 bg-black py-3 px-4 rounded-xl text-eafc w-fit shadow-md shadow-violet-300/30">
                    <FontAwesomeIcon icon={faFilm} /> <span>Highlights</span>
                </div>
                <p className="text-lg font-normal">
                    The &quot;Highlights&quot; section of the FC 24 page features an exciting collection of clips from FC 24 Pro matches, showcasing the best moments from top-tier gameplay. These carefully selected highlights not only entertain but also serve as valuable learning tools. <br /> By observing the strategies, skills, and techniques employed by professional players, you can gain insights into advanced tactics and decision-making processes that can be applied to your own gameplay. This section is a fantastic resource for enhancing your understanding and performance in EA FC 24, helping you to elevate your play and achieve greater success in the game.
                </p>
            </header>

            <hr className="w-full rounded-lg" />
            
            {/* Filters */}
            <div className="flex flex-row space-x-12">

            </div>
            
            {/* Card Layout */}
            <HighlightList />

        </section>
    )
}