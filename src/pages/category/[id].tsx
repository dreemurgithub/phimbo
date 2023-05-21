import {Read_genre_list , Read_genre_by_id} from '@/helper/index'
import {useEffect, useState} from "react";
import {URL_image} from '@/constant/index'

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
    },[genre.id])
    return <>
        {/*<p>{JSON.stringify(movie)}</p>*/}
        {movie.map((el : any)=> <div key={el.id}>
            <h4>{el.title}</h4>
            <img src={URL_image(el.poster_path )} alt=""/>
            <img src={URL_image(el.backdrop_path )} alt=""/>
            <p>{el.overview}</p>
        </div>)}
    </>
}
