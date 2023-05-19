import type { NextApiRequest, NextApiResponse } from 'next'
import {Help_read_file2} from '@/helper/index'

export default async function handler( req: NextApiRequest,res: NextApiResponse) {
    const data_string = await Help_read_file2()
    res.status(200).send(data_string)
}
