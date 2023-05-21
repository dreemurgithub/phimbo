import {useState, useEffect} from "react";
import Link from 'next/link'
import Styles from './navStyle.module.css'

export default function Navbar() {
    const [nav_list, setNav] = useState<Array<any>>([])
    useEffect(() => {
        fetch('/api/navbar')
            .then(res => res.json())
            .then(data => setNav(data))
    }, [])
    return <nav className={Styles.nav_all}>
        <div>
            <div className={Styles.nav_icon}>
                <img src="https://phim1080.in/assets/img/phim1080.png" alt=""/>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
        </div>
        <div>
            <ul className={Styles.navbar_display}>
                <li className={Styles.nav_item}><Link href={'/'}>Thể Loại</Link></li>
                <li className={Styles.nav_item}><Link href={'/'}>Quốc Gia</Link></li>
                <li className={Styles.nav_item}><Link href={'/'}>Phim Lẻ</Link></li>
                <li className={Styles.nav_item}><Link href={'/'}>Phim Bộ</Link></li>
                <li className={Styles.nav_item}><Link href={'/'}>Chiếu Rạp</Link></li>
                <li className={Styles.nav_item}><Link href={'/'}>Sắp Chiếu</Link></li>
                {/*{nav_list.map((el:any)=><li key={el.id} className={Styles.nav_item}><Link href={`/category/${el.id}`}>{el.name}</Link> </li>)}*/}
            </ul>
        </div>
        <div>
            <div className={Styles.nav_search}>
                <span></span>
                <input type="text" placeholder={'Tìm kiếm'}/>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-search" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </div>
        </div>
        <div>
            <div>

                <div className={Styles.nav_icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-facebook" viewBox="0 0 16 16">
                        <path
                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd"
                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                </div>
            </div>
        </div>
    </nav>
}
