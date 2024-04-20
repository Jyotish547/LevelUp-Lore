import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

import { PlayersData } from '@/components/app/components/types/fc24Type';

import { LeagueFilter, Club, League, Nation } from '@/components/app/components/types/fc24Type';

// export default async function allLeagues(req: NextApiRequest, res: NextApiResponse) {
//     try {
//       const apiKey = '62fca8e7-3b80-4ae2-bbcb-f77e33bfd633';
//       const headers = {
//         'X-AUTH-TOKEN': apiKey
//       };
  
//       // Set base URL for the requests
//       const baseURL = 'https://futdb.app/api';
  
//       // Make requests to each endpoint
//       const clubsResponse = await axios.get(`${baseURL}/clubs?page=1`, { headers });
//       const leaguesResponse = await axios.get(`${baseURL}/leagues?page=1`, { headers });
//       const nationsResponse = await axios.get(`${baseURL}/nations?page=1`, { headers });
  
//       // Combine the responses into a single object to respond with
//       const responseData: LeagueFilter = {
//         clubs: clubsResponse.data.items,
//         leagues: leaguesResponse.data.items,
//         nations: nationsResponse.data.items
//       };
  
//       // Respond with the combined data
//       res.status(200).json(responseData);
//     } catch (error) {
//       // Handle errors
//       console.error('API call error:', error);
//       res.status(500).json({ error: 'Failed to fetch data' });
//     }
//   }

// A simple cache object to store data


