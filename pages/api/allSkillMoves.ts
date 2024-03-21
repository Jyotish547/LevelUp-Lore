import type { NextApiRequest, NextApiResponse } from "next";

// Icon Imports

import psIcon from '/public/assets/eafc24/icons/playStation.png';
import xboxIcon from '/public/assets/eafc24/icons/xBox.png';

import rsr2 from '/public/assets/eafc24/icons/2-RSR.png';
import rsl2 from '/public/assets/eafc24/icons/2-RSL.png';
import rr3 from '/public/assets/eafc24/icons/3-RR.png';
import rl3 from '/public/assets/eafc24/icons/3-RL.png';
import flgr3 from '/public/assets/eafc24/icons/3-FLGR.png';
import frgl3 from '/public/assets/eafc24/icons/3-FRGL.png';


export type SkillMove = {
    key: any,
    name: string,
    star: number,
    psControls: {
        icon: any,
        shortLabel: any,
        label: string,
    }
    xboxControls: {
        icon: any,
        shortLabel: any,
        label: string,
    }
    video?: {
        id: string,
        start: number,
    }
}[]

export default function skillMovesAPI (req: NextApiRequest, res: NextApiResponse) {
    const skillMoves: SkillMove = [
        // Skill Moves Data here
        {
            key: 1,
            name: "Reverse Stepover Right",
            star: 2,
            psControls: {
                icon: psIcon,
                shortLabel: rsr2,
                label: "Roll RS from the right to the the top of the stick",
            },
            xboxControls: {
                icon: xboxIcon,
                shortLabel: rsr2,
                label: "Roll RS from the right to the the top of the stick",
            },
            video: {
                id: "gI-ifpUe1I0?si=RQTtaSA_tFUVp53U",
                start: 102
            }
        },
        {
            key: 2,
            name: "Reverse Stepover Left",
            star: 2,
            psControls: {
                icon: psIcon,
                shortLabel: rsl2,
                label: "Roll RS from the left to the the top of the stick",
            },
            xboxControls: {
                icon: xboxIcon,
                shortLabel: rsl2,
                label: "Roll RS from the left to the the top of the stick",
            },
            video: {
                id: "gI-ifpUe1I0?si=RQTtaSA_tFUVp53U",
                start: 102
            }
        },
        {
            key: 3,
            name: "Roulette Right",
            star: 3,
            psControls: {
                icon: psIcon,
                shortLabel: rr3,
                label: "Roll RS from the bottom and clockwise to the right",
            },
            xboxControls: {
                icon: xboxIcon,
                shortLabel: rr3,
                label: "Roll RS from the bottom and clockwise to the right",
            },
            video: {
                id: "gI-ifpUe1I0?si=RQTtaSA_tFUVp53U",
                start: 203
            }
        },
        {
            key: 4,
            name: "Roulette Left",
            star: 3,
            psControls: {
                icon: psIcon,
                shortLabel: rl3,
                label: "Roll RS from the bottom and anti-clockwise to the left",
            },
            xboxControls: {
                icon: xboxIcon,
                shortLabel: rl3,
                label: "Roll RS from the bottom and anti-clockwise to the left",
            },
            video: {
                id: "gI-ifpUe1I0?si=RQTtaSA_tFUVp53U",
                start: 203
            }
        },
        {
            key: 5,
            name: "Fake Left and Go Right",
            star: 3,
            psControls: {
                icon: psIcon,
                shortLabel: flgr3,
                label: "Roll RS from the left anti-clockwise to the right",
            },
            xboxControls: {
                icon: xboxIcon,
                shortLabel: flgr3,
                label: "Roll RS from the left anti-clockwise to the right",
            },
            video: {
                id: "gI-ifpUe1I0?si=RQTtaSA_tFUVp53U",
                start: 203
            }
        },
        {
            key: 6,
            name: "Fake Right and Go Left",
            star: 3,
            psControls: {
                icon: psIcon,
                shortLabel: frgl3,
                label: "Roll RS from the right and clockwise to the left",
            },
            xboxControls: {
                icon: xboxIcon,
                shortLabel: frgl3,
                label: "Roll RS from the right and clockwise to the left",
            },
            video: {
                id: "gI-ifpUe1I0?si=RQTtaSA_tFUVp53U",
                start: 102
            }
        }
    ];

    res.status(200).json(skillMoves);
}