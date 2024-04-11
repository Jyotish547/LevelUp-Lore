import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await axios.get("https://valorant-api.com/v1/agents");
        res.status(200).json(response.data.data);
    }
    catch(error) {
        console.log('Api call error: Agents', error);
        res.status(400).json({ error: 'Failed to fetch agent data' });
    }

}