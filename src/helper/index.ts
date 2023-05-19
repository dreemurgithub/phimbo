import {promises as fs} from 'fs' ;
import path from 'path'
export async function Help_read_file(){
    const file_path = path.join(process.cwd(),'file','movie.json')
    const data_string = await fs.readFile(file_path,'utf-8')
    return data_string
}

export async function Help_read_file2(){
    const file_path = path.join(process.cwd(),'file','genreList.json')
    const data_string = await fs.readFile(file_path,'utf-8')
    return data_string
}
