'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

import BorderButton from './buttons';
import { FormationsEAFC } from "./cardLayouts";

export default function Formations() {


    const callAPI = async () => {

        const res = await fetch(`/api/eafc24/formations`);
        const data = await res.json();
        if(data) {
          console.log(data.content);
        }
        else {
          console.log("No content found for the ID.");
        }

    };
    callAPI()
    return(
        <section className="flex flex-col items-start justify-center w-4/5 space-y-6">
            {/* Header */}
            <header className="space-y-4">
                <div className="text-3xl font-semibold flex flex-row items-center space-x-3 bg-black py-3 px-4 rounded-xl text-eafc w-fit shadow-md shadow-green-300/30">
                    <FontAwesomeIcon icon={faPeopleGroup} /> <span>Formations</span>
                </div>
                <p className="text-lg font-normal">
                Formations in football define the positioning and roles of players, influenced by the team's strategy, strengths, and opponent's style. It dictates the balance between defense, midfield, and attack through a numerical representation, highlighting the distribution of players across the field. <br /> <br /> These strategic blueprints guide teams in executing their playstyle, whether focusing on defense, possession, or attack, and can be adapted during the match to respond to various situations.
                </p>
            </header>

            <hr className="w-full rounded-lg" />

            <div className="flex flex-row space-x-12">
                {/* Check portfolio for toggle and categorizing button functioning */}
                <BorderButton label="Popular" />
                <div className="flex flex-row space-x-4">
                    <BorderButton label="Balanced" />
                    <BorderButton label="Offensive" />
                    <BorderButton label="Defensive" />
                </div>
            </div>

            <div className="grid grid-cols-3 grid-flow-row gap-y-8">
                <FormationsEAFC />
            </div>

        </section>
    )
}