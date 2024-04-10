import type { NextApiRequest, NextApiResponse } from "next";

import dpIcon from '/public/assets/displayPicture.png';

import { LineupMap } from "@/components/app/components/types/valorantType";

export default function lineupAPI (req: NextApiRequest, res: NextApiResponse) {
    const lineups: LineupMap = [
        // Main Object
        {
            id: 1,
            map: "Breeze",
            username: "ActionHDYT",
            date: "5/8/2022",
            // Agent Array
            agents: [
                {
                    id: 1,
                    name: "Viper",
                    // Lineup Array
                    lineups: [
                        {
                            id: 1,
                            source: "https://lineupsvalorant.com/?id=413",
                            ability: "Snake Bite",
                            location: ["A Lobby", "A Pyramids"],
                            thumbnail: "https://lineupsvalorant.com/static/lineup_images/413/1.webp",
                            title: "Viper Lineup from A Lobby to A Pyramids",
                            description: [
                                "Walk Against the mettal piller in A Lobby",
                                "Align the star of your molly with the edge of the tube",
                                "simple shoot"
                            ],
                            side: true,
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
                            source: "https://lineupsvalorant.com/?id=746",
                            ability: "Snake Bite",
                            location: ["A Lobby", "A Pyramids"],
                            thumbnail: "https://lineupsvalorant.com/static/lineup_images/413/1.webp",
                            title: "Viper Lineup from A Lobby to A Pyramids",
                            description: [
                                "Walk Against the mettal piller in A Lobby",
                                "Align the star of your molly with the edge of the tube",
                                "simple shoot"
                            ],
                            side: true,
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
                        }
                    ]
                }
            ]

        }
    ]
}