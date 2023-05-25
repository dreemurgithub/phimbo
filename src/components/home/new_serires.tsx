import {useEffect, useState} from "react";
import Styles from "@/components/home/common.module.css";
import {URL_image} from "@/constant";

export default function New_Series(){
    const [data_list,setdata_list] = useState([])
    const [bigscreen,setscreen] =useState(true)
    useEffect(()=>{
        fetch('/api/home')
            .then(res=>res.json())
            .then(data=>setdata_list(data.new_series))
        window.addEventListener('resize',()=>{
            if(window.innerWidth>800 || window.screen.width>800) setscreen(true)
            else setscreen(false)
        })
    },[])
    if(bigscreen) return <>
        <h3 style={{textAlign:'center'}}>Phim bộ mới</h3>
        <div className={Styles.container_card_list}>
            {data_list.map((el: any) => <div key={el.id}>
                <span>Vietsub</span>
                <img src={URL_image(el.poster_path) } alt="" onClick={() => window.location.href = `/movie/${el.id}`}/>
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
    else return <>
        <h3 style={{textAlign:'center'}}>Phim bộ mới</h3>
        <div className={Styles.container_recommend}>
            {data_list.map((el: any) => <div key={el.id}>
                <span>Vietsub</span>
                <img src={URL_image(el.poster_path) } alt="" onClick={() => window.location.href = `/movie/${el.id}`}/>
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

    </>}