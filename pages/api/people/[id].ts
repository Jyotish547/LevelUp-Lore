import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  key: any,
  gameName : string
  section: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const id = req.query.id
  res.status(200).json({
      key: 1,
      gameName: 'Fifa 2024',
      section: 'Formations'
  })
}