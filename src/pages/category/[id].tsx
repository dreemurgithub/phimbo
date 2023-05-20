import {Read_genre_list , Read_genre_by_id} from '@/helper/index'
import {useEffect, useState} from "react";

export async function getStaticPaths() {
    const genre_list = await Read_genre_list()
    const list : Array<any>  = []
    genre_list.forEach((el: {
        "id": number,
        "name": string
    }) => list.push({ params: { id: el.id.toString() }})  )
    return {
        paths : list,fallback : false
    }
}
export async function getStaticProps( props_params : {params: {id : string } } ){
    const genre_filter = await Read_genre_by_id(props_params.params.id)
    // const genre_filter = {id: props_params.params.id}
    return {
        props : { genre : genre_filter }
    }
}
export default function Category({genre} : {genre :{id : number, name : string} } ) {
    const [movie,setMovie] = useState([])
    useEffect(()=>{
        fetch(`/api/category/${genre.id}`)
            .then(res=>res.json())
            .then(data=>setMovie(data))
    },[])
    return <>
        <h3>{JSON.stringify(genre)}</h3>
        <p>{JSON.stringify(movie)}</p>
    </>
}
