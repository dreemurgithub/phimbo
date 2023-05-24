import type { NextApiRequest, NextApiResponse } from 'next'
import {Read_movie_id} from '@/helper/index'
export default async function handler( req: NextApiRequest,res: NextApiResponse) {
    const {id} = req.query
    const data_string = await Read_movie_id(parseInt(id as string))
    res.status(200).send(data_string)
}
