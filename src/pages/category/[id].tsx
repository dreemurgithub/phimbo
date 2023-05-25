import {Read_genre_list, Read_genre_by_id} from '@/helper/index'
import {useEffect, useState} from "react";
import {URL_image} from '@/constant/index'
import Styles from './category.module.css';
import Style_pagination from './Pagination.module.css';
import Link from 'next/link' ;

export async function getStaticPaths() {
    const genre_list = await Read_genre_list()
    const list: Array<any> = []
    genre_list.forEach((el: {
        "id": number,
        "name": string
    }) => list.push({params: {id: el.id.toString()}}))
    return {
        paths: list, fallback: false
    }
}

export async function getStaticProps(props_params: { params: { id: string } }) {
    const genre_filter = await Read_genre_by_id(props_params.params.id)
    // const genre_filter = {id: props_params.params.id}
    return {
        props: {genre: genre_filter}
    }
}

export default function Category({genre}: { genre: { id: number, name: string } }) {
    const [movie, setMovie] = useState([])
    const [all_movie, set_all_movie] = useState([])

    const [movie_inpage, set_movieinpage] = useState(0)
    const [PageNumber, setPageNumber] = useState(0)
    useEffect(() => {
        fetch(`/api/category/${genre.id}`)
            .then(res => res.json())
            .then(data => {
                set_all_movie(data)
                const new_data = data.slice(30 * movie_inpage, 30 * (movie_inpage + 1))
                setMovie(new_data)
                let page_floor = Math.round(data.length / 30)
                // setPageNumber(+1)
                if ((data.length / 30 - page_floor) > 0) setPageNumber(page_floor + 1)
                else setPageNumber(page_floor)
            })
    }, [genre.id])
    useEffect(() => {
        const new_data = all_movie.slice(30 * movie_inpage, 30 * (movie_inpage + 1))
        setMovie(new_data)
    }, [movie_inpage])

    function change_list_category(inpage: number) {
        if (inpage < 0 || inpage >= PageNumber) return
        set_movieinpage(inpage)
    }

    return <>
        {/*<p>{JSON.stringify(movie)}</p>*/}
        <div className={Styles.container}>

            {movie.map((el: any) => <div key={el.id} >
                <span>Vietsub</span>
                <img src={URL_image(el.poster_path)} alt="" onClick={()=>window.location.href=`/movie/${el.id}` }/>
                <div className={Styles.information_poster} onClick={()=>window.location.href=`/movie/${el.id}` }>
                    <span>FHD</span>
                    <p>{el.title ? el.title : 'Error: No title'}</p>
                    <div>
                        <span>{Math.round(Math.random() * 1000) / 10}k lượt xem</span>
                        <span>{Math.round(Math.random() * 1000) / 10} phút</span>
                    </div>
                </div>

            </div>)}
        </div>
        <div>

            <div className={Style_pagination.Pagination}>
                {(function () {
                    const list = []
                    for (let i = 0; i < PageNumber; i++) list.push(i)
                    if (PageNumber < 17) return <div>
                        <button style={{backgroundColor: '#005b96'}}
                                onClick={() => change_list_category(movie_inpage - 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"/>
                            </svg>
                        </button>
                        {list.map((el: number) => <button key={el} onClick={() => change_list_category(el)}
                                                          style={{backgroundColor: el === movie_inpage ? '#2ab7ca' : '#005b96'}}
                        >{el}</button>)}
                        <button style={{backgroundColor: '#005b96'}}
                                onClick={() => change_list_category(movie_inpage + 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"/>
                            </svg>
                        </button>

                    </div>
                    if (movie_inpage < 5 && movie_inpage >= 0) {
                        const list1 = list.slice(0, 11)
                        const list2 = list.slice(list.length - 2, list.length)
                        return <div>
                            <button style={{backgroundColor: '#005b96'}}
                                    onClick={() => change_list_category(movie_inpage - 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"/>
                                </svg>
                            </button>
                            {list1.map((el: number) => <button key={el} onClick={() => change_list_category(el)}
                                                               style={{backgroundColor: el === movie_inpage ? '#2ab7ca' : '#005b96'}}
                            >{el}</button>)}
                            <button disabled={true} style={{backgroundColor: '#005b96', cursor: 'not-allowed'}}>...
                            </button>
                            {list2.map((el: number) => <button key={el} onClick={() => change_list_category(el)}
                                                               style={{backgroundColor: el === movie_inpage ? '#2ab7ca' : '#005b96'}}
                            >{el}</button>)}
                            <button style={{backgroundColor: '#005b96'}}
                                    onClick={() => change_list_category(movie_inpage + 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"/>
                                </svg>
                            </button>

                        </div>
                    }
                    if (movie_inpage >= list.length - 6) {
                        const list1 = list.slice(0, 2)
                        const list2 = list.slice(list.length - 11, list.length)
                        return <div>
                            <button style={{backgroundColor: '#005b96'}}
                                    onClick={() => change_list_category(movie_inpage - 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"/>
                                </svg>
                            </button>
                            {list1.map((el: number) => <button key={el} onClick={() => change_list_category(el)}
                                                               style={{backgroundColor: el === movie_inpage ? '#2ab7ca' : '#005b96'}}
                            >{el}</button>)}
                            <button disabled={true} style={{backgroundColor: '#005b96', cursor: 'not-allowed'}}>...
                            </button>
                            {list2.map((el: number) => <button key={el} onClick={() => change_list_category(el)}
                                                               style={{backgroundColor: el === movie_inpage ? '#2ab7ca' : '#005b96'}}
                            >{el}</button>)}
                            <button style={{backgroundColor: '#005b96'}}
                                    onClick={() => change_list_category(movie_inpage + 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"/>
                                </svg>
                            </button>

                        </div>
                    }

                    const list1 = list.slice(0, 2)
                    const list2 = []
                    for (let i = movie_inpage - 4; i < movie_inpage + 4; i++) list2.push(i)
                    const list3 = list.slice(list.length - 2, list.length)
                    return <div>
                        <button style={{backgroundColor: '#005b96'}}
                                onClick={() => change_list_category(movie_inpage - 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"/>
                            </svg>
                        </button>
                        {list1.map((el: number) => <button key={el} onClick={() => change_list_category(el)}
                                                           style={{backgroundColor: el === movie_inpage ? '#2ab7ca' : '#005b96'}}
                        >{el}</button>)}
                        <button disabled={true} style={{backgroundColor: '#005b96', cursor: 'not-allowed'}}>...</button>
                        {list2.map((el: number) => <button key={el} onClick={() => change_list_category(el)}
                                                           style={{backgroundColor: el === movie_inpage ? '#2ab7ca' : '#005b96'}}
                        >{el}</button>)}
                        <button disabled={true} style={{backgroundColor: '#005b96', cursor: 'not-allowed'}}>...</button>
                        {list3.map((el: number) => <button key={el} onClick={() => change_list_category(el)}
                                                           style={{backgroundColor: el === movie_inpage ? '#2ab7ca' : '#005b96'}}
                        >{el}</button>)}
                        <button style={{backgroundColor: '#005b96'}}
                                onClick={() => change_list_category(movie_inpage + 1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"/>
                            </svg>
                        </button>

                    </div>
                })()}
            </div>
        </div>
    </>
}
