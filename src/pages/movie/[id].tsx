import {Help_read_file, Read_movie_id} from "@/helper";
import {URL_image} from '@/constant/index'
import Link from 'next/link'
import Bottom from "@/components/similar_movie/bottom";
import SideRight from "@/components/similar_movie/sideRight";
import Styles from './movie.module.css'
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
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]
    const genre_obj: any = {}
    genre.forEach((el: { id: number, name: string }) => genre_obj[el.id.toString()] = el.name)

    return (
        <div className={Styles.wrapper_grid}>
            <img src={URL_image(movie.backdrop_path)} alt="" className={Styles.video}/>
            <div className={Styles.description}>
                <h3>{movie.title}</h3>
                <p>Điểm bình chọn: {movie.vote_average}</p>
                <p>Số lượng bình chọn: {movie.vote_count}</p>
                <p>Điểm phổ biến: {movie.popularity}</p>
                <p>Ngày phát hành: {movie.release_date}</p>
                <ul>
                    <li>Thể loại</li>
                    {movie.genre_ids.map((el: number) => <li key={el}>
                        <Link href={`/category/${el}`} target={'_blank'}>{genre_obj[el.toString()]}</Link>
                    </li>)}
                </ul>
                <p>{movie.overview}</p>
            </div>
            <div className={Styles.sideRight}>
                <SideRight/>

            </div>
            <div className={Styles.bottom}>
                <Bottom/>
            </div>
        </div>)
}
