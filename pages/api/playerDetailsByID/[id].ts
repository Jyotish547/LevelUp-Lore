import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

import { PlayersData } from "@/components/app/components/types/fc24Type";

export default async function playerDetailsAPI(req: NextApiRequest, res: NextApiResponse) {

    const playerQueryParam = req.query.id;

    try {
        const response = await axios.get<{ items: PlayersData[] }>('https://drop-api.ea.com/rating/fc-24');
        if(!response) {
            throw new Error(`Failed to fetch data: ${response}`)
        }
        
        const players = response.data.items;

        console.log(players);

        // This is a basic example; adjust the condition to match how you need to filter players
        const filteredPlayers = players.filter(player => player.rank === Number(playerQueryParam));

        // Log the filtered players
        console.log(filteredPlayers);
        res.status(200).json(filteredPlayers);
    }
    catch (error) {
        console.error(`Error Fetching player data:`, error);
    }

}