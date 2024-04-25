import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    try {
        const apiKey = process.env.YOUTUBE_API_KEY;
        const playlist = "PLANZWGEMt69m_aHh9MIVMICMW9mElzC1S"
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlist}&key=${apiKey}&maxResults=24`);
        if (response.data && response.data.items) {
            res.status(200).json(response.data.items);
        } else {
            throw new Error('No items found in the response');
        }
    }
    catch(error) {
        console.log('Api call error: Maps', error)
        res.status(400).json({ error: 'Failed to fetch agent data' });
    }
}