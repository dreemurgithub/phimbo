import type { NextApiRequest, NextApiResponse } from 'next'
import {Help_read_file} from '@/helper/index'
export default async function handler( req: NextApiRequest,res: NextApiResponse) {
    const data_string = await Help_read_file()
    res.status(200).send({
        recommend : list(0,9,data_string),
        update :  list(10,11,data_string),
        anime :   list(21,7,data_string) ,
        single :   list(29,10,data_string) ,
        new_series :   list(39,10,data_string) ,
        new_single :   list(44,10,data_string) ,
        chart :   list(49,10,data_string) ,
        trailer : list(54,7,data_string) ,
        soon_release : list(61,10,data_string) ,
        today : list(66,10,data_string) ,
    })
}

function list(start : number ,count: number , array : any){
    const arr = []
    for (let i=start;i<start + count;i++) arr.push(array[i])
    return arr
}
