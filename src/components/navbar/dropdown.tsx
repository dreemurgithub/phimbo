import Styles from './dropdown.module.css'
import {useEffect, useState} from "react";
import Link from 'next/link'

export default function Dropdown(){
    const [nav_list, setNav] = useState<Array<any>>([])
    useEffect(() => {
        fetch('/api/navbar')
            .then(res => res.json())
            .then(data => setNav(data))
    }, [])
    return <ul className={Styles.dropdown}>
        {nav_list.map((el:any)=><li key={el.id} ><Link href={`/category/${el.id}`}>{el.name} - Link 1</Link> </li>)}
    </ul>
}
export function Dropdown2(){
    const [nav_list, setNav] = useState<Array<any>>([])
    useEffect(() => {
        fetch('/api/navbar')
            .then(res => res.json())
            .then(data => setNav(data))
    }, [])
    return <ul className={Styles.dropdown}>
        {nav_list.map((el:any)=><li key={el.id} ><Link href={`/category/${el.id}`}>{el.name} - Link 2</Link> </li>)}
    </ul>
}

export function Dropdown3(){
    const [nav_list, setNav] = useState<Array<any>>([])
    useEffect(() => {
        fetch('/api/navbar')
            .then(res => res.json())
            .then(data => setNav(data))
    }, [])
    return <ul className={Styles.dropdown}>
        {nav_list.map((el:any)=><li key={el.id} ><Link href={`/category/${el.id}`}>{el.name} - Link 3</Link> </li>)}
    </ul>
}

export function Dropdown4(){
    const [nav_list, setNav] = useState<Array<any>>([])
    useEffect(() => {
        fetch('/api/navbar')
            .then(res => res.json())
            .then(data => setNav(data))
    }, [])
    return <ul className={Styles.dropdown}>
        {nav_list.map((el:any)=><li key={el.id} ><Link href={`/category/${el.id}`}>{el.name} - Link 4</Link> </li>)}
    </ul>
}
