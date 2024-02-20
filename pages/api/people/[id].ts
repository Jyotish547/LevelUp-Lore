import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  key: any,
  gameName : string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const id = req.query.id
  res.status(200).json({
      key: id,
      gameName: 'Fifa 2024'
  })
}