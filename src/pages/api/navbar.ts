import type { NextApiRequest, NextApiResponse } from 'next'
import {Read_genre_list} from '@/helper/index'
export default async function handler( req: NextApiRequest,res: NextApiResponse) {
    const data_string = await Read_genre_list()
    res.status(200).send(data_string)
}
