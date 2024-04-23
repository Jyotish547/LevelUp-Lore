import type { NextApiRequest, NextApiResponse } from "next";

import dpIcon from '/public/assets/displayPicture.png';

import { LineupData } from "@/components/app/components/types/valorantType";



export default function lineupAPI (req: NextApiRequest, res: NextApiResponse) {
    const lineups: LineupData[] = [
        // Main Object
        {
            id: 1,
            map: "Breeze",
            // Agent Array
            agents: [
                {
                    id: 1,
                    name: "Viper",
                    // Lineup Array
                    lineups: [
                        {
                            id: 1,
                            username: "ActionHDYT",
                            date: "5/8/2022",
                            source: "https://lineupsvalorant.com/?id=413",
                            ability: "Snake Bite",
                            location: ["A Lobby", "A Pyramids"],
                            thumbnail: "https://lineupsvalorant.com/static/lineup_images/413/3.webp",
                            title: "Viper Lineup from A Lobby to A Pyramids",
                            description: [
                                "Walk Against the mettal piller in A Lobby",
                                "Align the star of your molly with the edge of the tube",
                                "simple shoot"
                            ],
                            side: 'Attack',
                            note: "If you aim to low you molly will hit the roof",
                            images: [
                                {
                                    id: 1,
                                    url: "https://lineupsvalorant.com/static/lineup_images/413/1.webp"
                                },
                                {
                                    id: 2,
                                    url: "https://lineupsvalorant.com/static/lineup_images/413/2.webp"
                                },
                                {
                                    id: 3,
                                    url: "https://lineupsvalorant.com/static/lineup_images/413/3.webp"
                                },
                            ]
                        },
                        {
                            id: 2,
                            username: "Meo",
                            date: "6/26/2022",
                            source: "https://lineupsvalorant.com/?id=746",
                            ability: "Snake Bite",
                            location: ["Mid Cannon", "B Default"],
                            thumbnail: "https://lineupsvalorant.com/static/lineup_images/746/3.webp",
                            title: "Mid Cannon to B Default",
                            description: [
                                "Stand against the little wooden box, NOT on top of it!",
                                "Align your crosshair with the bottom of the leaf sticking out.",
                                "Left click."
                            ],
                            side: 'Attack',
                            note: "If you hear the enemy tap the spike it's already too late if you throw it during that time due to travel time.",
                            images: [
                                {
                                    id: 1,
                                    url: "https://lineupsvalorant.com/static/lineup_images/746/1.webp"
                                },
                                {
                                    id: 2,
                                    url: "https://lineupsvalorant.com/static/lineup_images/746/2.webp"
                                },
                                {
                                    id: 3,
                                    url: "https://lineupsvalorant.com/static/lineup_images/746/3.webp"
                                },
                            ]
                        }
                    ]
                }
            ]

        },
        {
            id: 2,
            map: "Ascent",
            // Agent Array
            agents: [
                {
                    id: 1,
                    name: "Brimstone",
                    // Lineup Array
                    lineups: [
                        {
                            id: 1,
                            username: "donyadam93",
                            date: "7/22/2022",
                            source: "https://lineupsvalorant.com/?id=1046",
                            ability: "Incendiary",
                            location: ["B Lobby", "B Site"],
                            thumbnail: "https://lineupsvalorant.com/static/lineup_images/1046/4.webp",
                            title: "B Triple Denials From B Lobby",
                            description: [
                                "Plant Spike in default behind Triple Denials (Image 1)",
                                "Wedge yourself to corner of B Lobby (Image 2)",
                                "Aim your crosshair with bottom cable but between intersection of cable-rooftop and edge of building wall as shown in (Image 3)",
                                "Shoot your molly and it will land perfectly in planted spike (Image 4)"
                            ],
                            side: 'Attack',
                            images: [
                                {
                                    id: 1,
                                    url: "https://lineupsvalorant.com/static/lineup_images/1046/1.webp"
                                },
                                {
                                    id: 2,
                                    url: "https://lineupsvalorant.com/static/lineup_images/1046/2.webp"
                                },
                                {
                                    id: 3,
                                    url: "https://lineupsvalorant.com/static/lineup_images/1046/3.webp"
                                },
                                {
                                    id: 4,
                                    url: "https://lineupsvalorant.com/static/lineup_images/1046/4.webp"
                                },
                            ]
                        },
                    ]
                },
                {
                    id: 2,
                    name: "Viper",
                    // Lineup Array
                    lineups: [
                        {
                            id: 1,
                            username: "Smoke",
                            date: "7/22/2022",
                            source: "https://lineupsvalorant.com/?id=1064",
                            ability: "Snake Bite",
                            location: ["B Lobby", "B Site"],
                            thumbnail: "https://lineupsvalorant.com/static/lineup_images/1064/3.webp",
                            title: "B Lobby to B Site Deafult Plant",
                            description: [
                                "Stand in the corner of B Lobby",
                                "Align the second line of your HUD like the image above with the corner of the box sticking out.",
                                "Left click (No run-up or jump needed)",
                            ],
                            side: 'Attack',
                            images: [
                                {
                                    id: 1,
                                    url: "https://lineupsvalorant.com/static/lineup_images/1064/1.webp"
                                },
                                {
                                    id: 2,
                                    url: "https://lineupsvalorant.com/static/lineup_images/1064/2.webp"
                                },
                                {
                                    id: 3,
                                    url: "https://lineupsvalorant.com/static/lineup_images/1064/3.webp"
                                },
                            ]
                        },
                        
                    ]
                }
            ]

        },
        {
            id: 3,
            map: "Haven",
            // Agent Array
            agents: [
                {
                    id: 1,
                    name: "Brimstone",
                    // Lineup Array
                    lineups: [
                        {
                            id: 1,
                            username: "Meo",
                            date: "5/14/2022",
                            source: "https://lineupsvalorant.com/?id=459",
                            ability: "Incendiary",
                            location: ["C Cubby", "C Site"],
                            thumbnail: "https://lineupsvalorant.com/static/lineup_images/459/3.webp",
                            title: "Post Plant C Default From Cubby",
                            description: [
                                "Step in this corner of the cubby in C long.",
                                "Aim your crosshair a bit to the right of the corner (image 2).",
                                "Left click to throw, it lands perfectly in default plant spot of C site."
                            ],
                            side: 'Attack',
                            images: [
                                {
                                    id: 1,
                                    url: "https://lineupsvalorant.com/static/lineup_images/459/1.webp"
                                },
                                {
                                    id: 2,
                                    url: "https://lineupsvalorant.com/static/lineup_images/459/2.webp"
                                },
                                {
                                    id: 3,
                                    url: "https://lineupsvalorant.com/static/lineup_images/459/3.webp"
                                },
                            ]
                        },
                        {
                            id: 2,
                            username: "Fuji",
                            date: "7/19/2022",
                            source: "https://lineupsvalorant.com/?id=1012",
                            ability: "Incendiary",
                            location: ["A Long", "A Site"],
                            thumbnail: "https://lineupsvalorant.com/static/lineup_images/1012/3.webp",
                            title: "Post Plant Molly From A Long to A Site Default",
                            description: [
                                "Stand next to sand bags.",
                                "Line up left distal hud with roof corner.",
                                "Simple left click."
                            ],
                            side: 'Attack',
                            images: [
                                {
                                    id: 1,
                                    url: "https://lineupsvalorant.com/static/lineup_images/1012/1.webp"
                                },
                                {
                                    id: 2,
                                    url: "https://lineupsvalorant.com/static/lineup_images/1012/2.webp"
                                },
                                {
                                    id: 3,
                                    url: "https://lineupsvalorant.com/static/lineup_images/1012/3.webp"
                                },
                            ]
                        },
                    ]
                },
            ]

        }
    ]
    res.status(200).json(lineups);
}

export async function fetchLineup() {
    const agentUrl = "/api/valorant/allAgents";
    const mapUrl = "/api/valorant/allMaps";
    const lineupUrl = "/api/valorant/allLineups";

    try {
        const [agentRes, mapRes, lineupRes] = await Promise.all([
            fetch(agentUrl),
            fetch(mapUrl),
            fetch(lineupUrl),
        ]);

        const [agents, maps, lineups] = await Promise.all([
            agentRes.json(),
            mapRes.json(),
            lineupRes.json()
        ]);

        return { agents, maps, lineups };
    }
    catch(error) {
        console.error("Failed to fetch data:", error);
        return { agents: [], maps: [], lineups: [] };
    }
}