import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLLI93S3iYlmNDtFwAhIYPPTK_PDgGG_Rq&key=AIzaSyCuahPD8XsGs16iTu-CIz7UrctpVRQgXAk&maxResults=25');
        res.status(200).json(response.data.items);
    }
    catch(error) {
        console.log('Api call error: Maps', error)
        res.status(400).json({ error: 'Failed to fetch agent data' });
    }
}