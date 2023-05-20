import {promises as fs} from 'fs' ;
import path from 'path'
export async function Help_read_file(){
    const file_path = path.join(process.cwd(),'file','movie.json')
    const data_string = await fs.readFile(file_path,'utf-8')
    return data_string
}

export async function Read_genre_list(){
    const file_path = path.join(process.cwd(),'file','genreList.json')
    const data_string = await fs.readFile(file_path,'utf-8')
    return JSON.parse(data_string)
//     not neccessary
}
export async function Read_genre_by_id(id : string ){
    const file_path = path.join(process.cwd(),'file','genreList.json')
    const data_string = await fs.readFile(file_path,'utf-8')
    const id_num = parseInt(id)
    const data_obj = JSON.parse(data_string)
    for(let i=0;i<data_obj.length;i++){
        if(data_obj[i].id===id_num) return data_obj[i]
    }
//     not neccessary
}
export async function Read_movie_id(id: number){
    const file_path = path.join(process.cwd(),'file','movie.json')
    const data_string = await fs.readFile(file_path,'utf-8')
    const data_obj = JSON.parse(data_string)
    const data_obj_filter = data_obj.filter((el:any)=>el.genre_ids.includes(id))
    return data_obj_filter
//     work!
}
