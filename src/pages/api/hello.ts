import type { NextApiRequest, NextApiResponse } from 'next'
import {Help_read_file} from '@/helper/index'

export default async function handler( req: NextApiRequest,res: NextApiResponse) {
  const data_string = await Help_read_file()
  res.status(200).send(data_string)
}
