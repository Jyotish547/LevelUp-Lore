'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessBoard, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

import BorderButton from '../../../components/buttons';
import { FormationsEAFC } from "../../../components/cardLayouts";
import { F1Filter } from "@/components/app/components/filterComp";
import { useState, useEffect } from "react";
import axios from "axios";

const matchedElements: HTMLElement[] = []

// Change matchedElements

function filterElementsByCategory(targetCategory: string) {
    matchedElements.forEach((element: any) => {
        if (element.classList.contains(targetCategory)) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        } 
    });
}

import { SingleFormationData } from "@/components/pages/api/allFormations";
import { FormType, DiffType } from "@/components/app/components/types/fc24Type";

export default function Formations() {
    const [selectedForms, setSelectedForms] = useState<FormType[]>([]);
    const [selectedDiffs, setSelectedDiffs] = useState<DiffType[]>([]);
    const [formationData, setFormationData] = useState<SingleFormationData[]>([]);

    useEffect(() => {
        const fetchFormationData = async () => {
            try {
                const response = await axios.get<{content: SingleFormationData[]}>('/api/allFormations');
                setFormationData(response.data.content);
            } catch (error) {
                console.error('Error fetching formation data:', error);
            }
        };

        fetchFormationData();
    }, []);

    // console.log(selectedForms);

    
    return(
        <section className="flex flex-col items-start justify-center w-full space-y-6 ">
            {/* Header */}
            <header className="space-y-4">
                <div className="text-3xl font-semibold flex flex-row items-center space-x-2 rounded-xl text-eafc w-fit ">
                    <FontAwesomeIcon icon={faChessBoard} /> <span>Team Tactics</span>
                </div>
                <p className="text-base text-neutral-300 font-normal leading-relaxed">
                    Team Tactics in football define the positioning and roles of players, influenced by the team&apos;s strategy, strengths, and opponent&apos;s style. It dictates the balance between defense, midfield, and attack through a numerical representation, highlighting the distribution of players across the field. <br />These strategic blueprints guide teams in executing their playstyle, whether focusing on defense, possession, or attack, and can be adapted during the match to respond to various situations.
                </p>
            </header>

            <hr className="w-full rounded-lg" />

            {/* Filter */}

            <F1Filter selectForm={selectedForms} setSelectForm={setSelectedForms} selectDiff={selectedDiffs} setSelectDiff={setSelectedDiffs} />

            <div className="grid grid-cols-3 grid-flow-row gap-y-8">
                <FormationsEAFC formationData={formationData?.filter(f => selectedForms.length > 0 || selectedDiffs.length > 0 ? selectedForms.toString().includes(f.flow) || selectedDiffs.toString().includes(f.difficulty) : f)} setFormationData={setFormationData} />
            </div>

        </section>
    )
}