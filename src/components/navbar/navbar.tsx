import {useState,useEffect} from "react";
import Link from 'next/link'
import Styles from './navStyle.module.css'
export default function Navbar(){
    const [nav_list,setNav] = useState<Array<any>>([])
    useEffect(()=>{
        fetch('/api/navbar')
            .then(res=>res.json())
            .then(data=>setNav(data))
    },[])
    return <>
        <p>{JSON.stringify(nav_list)}</p>
        <ul>
           <li><Link href={'/'}>Home</Link></li>
            {nav_list.map((el:any)=><li key={el.id}><Link href={`/category/${el.id}`}>{el.name}</Link> </li>)}
        </ul>
    </>
}
