import type { NextApiRequest, NextApiResponse } from 'next'
import {Read_movie_genre_id} from '@/helper/index'
export default async function handler( req: NextApiRequest,res: NextApiResponse) {
    const {id} =  req.query
    const data_obj =await Read_movie_genre_id( parseInt(id as string))
    res.status(200).send(data_obj)
}
