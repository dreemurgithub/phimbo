import {Help_read_file, Read_movie_id} from "@/helper";
import {URL_image} from '@/constant/index'
import Link from 'next/link'
import Bottom from "@/components/similar_movie/bottom";
import SideRight from "@/components/similar_movie/sideRight";
import Styles from './movie.module.css';
import Component from "@/components/movie/component";
import Comment from "@/components/movie/comment";
import {useState} from "react";

export async function getStaticPaths() {
    const movie_list = await Help_read_file()
    const list: Array<any> = []
    movie_list.forEach((el: {
        "id": number,
        "name": string
    }) => list.push({params: {id: el.id.toString()}}))
    return {
        paths: list, fallback: false
    }
}

export async function getStaticProps(props_params: { params: { id: string } }) {
    const movie_infor = await Read_movie_id(parseInt(props_params.params.id))
    // const genre_filter = {id: props_params.params.id}
    return {
        props: {movie: movie_infor}
    }
}

export default function Movie({movie}: any) {
    const genre = [
        {
            "id": 28,
            "name": "Hành Động"
        },
        {
            "id": 12,
            "name": "Phiêu lưu"
        },
        {
            "id": 16,
            "name": "Hoạt hình"
        },
        {
            "id": 35,
            "name": "Hài hước"
        },
        {
            "id": 80,
            "name": "Tội phạm"
        },
        {
            "id": 99,
            "name": "Phim tài liệu"
        },
        {
            "id": 18,
            "name": "Kịch tính"
        },
        {
            "id": 10751,
            "name": "Gia đình"
        },
        {
            "id": 14,
            "name": "Giả tưởng"
        },
        {
            "id": 36,
            "name": "Lịch sử"
        },
        {
            "id": 27,
            "name": "Kinh dị"
        },
        {
            "id": 10402,
            "name": "Âm nhạc"
        },
        {
            "id": 9648,
            "name": "Bí ẩn"
        },
        {
            "id": 10749,
            "name": "Lãng mạn"
        },
        {
            "id": 878,
            "name": "Khoa học viễn tưởng"
        },
        {
            "id": 10770,
            "name": "Phim truyền hình"
        },
        {
            "id": 53,
            "name": "Hồi hộp"
        },
        {
            "id": 10752,
            "name": "Chiến tranh"
        },
        {
            "id": 37,
            "name": "Viễn tây"
        },
        {
            "id": 10759,
            "name": "Hành động và phiêu lưu"
        },
        {
            "id": 10765,
            "name": "Khoa học viễn tưởng và giả tưởng"
        }
    ]
    const genre_obj: any = {}
    genre.forEach((el: { id: number, name: string }) => genre_obj[el.id.toString()] = el.name)
    const [show,setshow] = useState(true)
    return (
        <div className={Styles.wrapper_grid}>
            <img src={URL_image(movie.backdrop_path)} alt="" className={Styles.video}/>
            <div className={Styles.description}>

                <div>
                    <Component/>
                    <h3>{movie.title} - {movie.original_title}</h3>
                    <p>Lượt xem: 200</p>
                </div>
                <div>
                    <div style={{ display:'flex' , justifyContent:'space-between' }}>
                        <div  onClick={()=>setshow(true)} style={{position:'relative',top:'1.1em',cursor:'pointer'}}>
                            <span>Description</span>
                            <hr style={ { border:'1px solid #0285b5',zIndex:'10',display: !show? 'none' : 'block'} }/>
                        </div>
                        <div onClick={()=>setshow(false)} style={{position:'relative',top:'1.1em',cursor:'pointer'}}>
                            <span>Commment</span>
                            <hr style={ {  border:'1px solid #0285b5',zIndex:'10' ,display: show? 'none' : 'block'} }/>
                        </div>
                    </div>
                    <hr style={ {zIndex:'-1' } }/>

                </div>

                <div style={{minHeight:'25em'}}>
                    <div style={ {display : show? 'none' : 'block'  } }>
                        <Comment/>
                    </div>
                    <div style={ {display : !show? 'none' : 'block'  } }>
                        <div>
                            <p>Điểm bình chọn: {movie.vote_average}</p>
                            <p>Số lượng bình chọn: {movie.vote_count}</p>
                            <p>Điểm phổ biến: {movie.popularity}</p>
                            <p>Ngày phát hành: {movie.release_date}</p>
                            <p>Thời lượng: 120 phút</p>
                            <p>Âm thanh: Vietsub</p>
                            <div style={ {display:'flex',gap:'0.5em'} }>
                                <span>Thể loại</span>
                                {movie.genre_ids.map((el: number) => <span key={el} >
                                    <Link style={{color:'#0285b5'}} href={`/category/${el}`} target={'_blank'}>{genre_obj[el.toString()]}</Link>
                                </span>)}
                            </div>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className={Styles.sideRight}>
                <SideRight/>
            </div>
            <div className={Styles.bottom}>
                <Bottom/>
            </div>
        </div>)
}
