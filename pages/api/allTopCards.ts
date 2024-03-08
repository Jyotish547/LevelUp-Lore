import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Forward the request to the external API
    const response = await axios.get('https://drop-api.ea.com/rating/fc-24');
    // Respond with the data from the external API
    res.status(200).json(response.data);
  } catch (error) {
    // Handle errors
    console.error('API call error:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}