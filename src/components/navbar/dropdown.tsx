import Styles from './dropdown.module.css'
import {useEffect, useState} from "react";
import Link from 'next/link'

export default function Dropdown0(){
    const [nav_list, setNav] = useState<Array<any>>([])
    useEffect(() => {
        fetch('/api/navbar')
            .then(res => res.json())
            .then(data => setNav(data))
    }, [])
    return <ul className={Styles.dropdown}>
        {nav_list.map((el:any)=><li key={el.id} ><Link href={`/category/${el.id}`}>{el.name}-0</Link> </li>)}
    </ul>
}
export function Dropdown1(){
    const [nav_list, setNav] = useState<Array<any>>([])
    useEffect(() => {
        fetch('/api/navbar')
            .then(res => res.json())
            .then(data => setNav(data))
    }, [])
    return <ul className={Styles.dropdown}>
        {nav_list.map((el:any)=><li key={el.id} ><Link href={`/category/${el.id}`}>{el.name}++2</Link> </li>)}
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
        {nav_list.map((el:any)=><li key={el.id} ><Link href={`/category/${el.id}`}>3++{el.name}</Link> </li>)}
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
        {nav_list.map((el:any)=><li key={el.id} ><Link href={`/category/${el.id}`}>4-{el.name}</Link> </li>)}
    </ul>
}
