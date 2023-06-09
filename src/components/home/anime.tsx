import {useEffect, useState} from "react";
import Styles from "@/components/home/common.module.css";
import {URL_image} from "@/constant";

export default function Anime(){
    const [data_list,setdata_list] = useState([])
    useEffect(()=>{
        fetch('/api/home')
            .then(res=>res.json())
            .then(data=>setdata_list(data.anime))

    },[])

    return <>
        <div className={Styles.container_card_anime_trailer}>
            {data_list.map((el: any) => <div key={el.id}>
                <span>Vietsub</span>
                <img src={URL_image(el.backdrop_path) } alt="" onClick={() => window.location.href = `/movie/${el.id}`}/>
                <div className={Styles.information_poster} onClick={() => window.location.href = `/movie/${el.id}`}>
                    <span>FHD</span>
                    <p>{el.title ? el.title : 'Error: No title'}</p>
                    <div>
                        <span>{Math.round(Math.random() * 1000) / 10}k lượt xem</span>
                        <span>{Math.round(Math.random() * 1000) / 10} phút</span>
                    </div>
                </div>

            </div>)}

        </div>

    </>
}
