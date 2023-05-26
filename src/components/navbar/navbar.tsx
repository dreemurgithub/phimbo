import {useState, useEffect} from "react";
import * as React from "react";

import Link from 'next/link'
import Styles from './navStyle.module.css'
import Dropdown0, {Dropdown2, Dropdown3, Dropdown1} from "@/components/navbar/dropdown";

export default function Navbar() {
    const [list_display, set_display] = useState(['none', 'none', 'none', 'none'])
    const [list_display_mobile, set_display_mopbile] = useState(['none', 'none', 'none', 'none'])
    const [Sidebar_state, setSidebar] = useState('none')

    function display_dropdown(dropdown_po: number) {
        const list_new = ['none', 'none', 'none', 'none']
        list_new[dropdown_po] = 'block'
        if (window.screen.width > 1023 && window.innerWidth > 1023) {
            set_display(list_new)
            if (dropdown_po > 3) set_display(['none', 'none', 'none', 'none'])
        }
        // else set_display_mopbile(list_new)
    }

    function display_dropdown_mobile(dropdown_po: number) {
        const list_new = list_display_mobile.map(el => el)
        if (list_new[dropdown_po] === 'none') list_new[dropdown_po] = 'grid'
        else list_new[dropdown_po] = 'none'
        if (window.screen.width <= 1023 || window.innerWidth <= 1023) {
            set_display_mopbile(list_new)
        }
    }

    function display_sidebar() {
        if (Sidebar_state === 'none') setSidebar('grid')
        else setSidebar('none')
    }

    // must create a re render method on screen change
    useEffect(() => {
        if (window.innerWidth <= 1023) setSidebar('none')
        else setSidebar('grid')
        window.addEventListener('resize', () => {
            // alert('onresize')

            if (window.innerWidth <= 1023 || window.screen.width <= 1023) {
                setSidebar('none')
                set_display(['none', 'none', 'none', 'none'])
                set_display_mopbile(['none', 'none', 'none', 'none'])
            } else {
                setSidebar('grid')
                set_display(['none', 'none', 'none', 'none'])
                set_display_mopbile(['none', 'none', 'none', 'none'])

            }

        })


    }, [])

    return <>
        <div className={Styles.nav_wrapper}>

            <nav className={Styles.nav_all} onMouseLeave={() => display_dropdown(5)}>
                {/*will hide dropdown pc on mouse leave navbar*/}
                <div>
                    <div className={Styles.nav_icon}>
                        <img src="https://phim1080.in/assets/img/phim1080.png" alt=""
                             onClick={() => window.location.href = '/'}/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-list" viewBox="0 0 16 16" onClick={display_sidebar}>
                            <path fillRule="evenodd"
                                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <div style={{height: '0em', padding: '0em'}}>
                            <div style={{display: list_display[0]}}>
                                <Dropdown0/>
                            </div>
                            <div style={{display: list_display[1]}}>
                                <Dropdown1/>
                            </div>
                            <div style={{display: list_display[2]}}>
                                <Dropdown2/>
                            </div>
                            <div style={{display: list_display[3]}}>
                                <Dropdown3/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={Styles.sidebar} style={{display: Sidebar_state}}>
                    <div className={Styles.sidebar_mobile}>
                        <img src="https://phim1080.in/assets/img/logo.svg" alt=""
                             onClick={() => window.location.href = '/'}/>
                        <span onClick={display_sidebar}>X</span>
                    </div>
                    <div className={Styles.side_list}>
                        <ul className={Styles.navbar_display}>
                            <div className={Styles.nav_item} onMouseEnter={() => display_dropdown(0)}
                                 onClick={() => display_dropdown_mobile(0)}>
                                <div>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                               className="bi bi-book" viewBox="0 0 16 16">
                                        <path
                                            d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                                    </svg></span>
                                    <span>Thể Loại</span>
                                </div>
                                <div style={{display: list_display_mobile[0]}}>
                                    <Dropdown0/>
                                </div>
                            </div>
                            <div className={Styles.nav_item} onMouseEnter={() => display_dropdown(1)}
                                 onClick={() => display_dropdown_mobile(1)}>
                                <div>
                                    <span>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-globe-americas" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
                                    </svg>
                                    </span>
                                    <span>Quốc Gia</span>
                                </div>
                                <div style={{display: list_display_mobile[1]}}>
                                    <Dropdown1/>
                                </div>
                            </div>
                            <div className={Styles.nav_item} onMouseEnter={() => display_dropdown(2)}
                                 onClick={() => display_dropdown_mobile(2)}>
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-film" viewBox="0 0 16 16">
                                        <path
                                            d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
                                    </svg>
                                    </span>
                                    <span>Phim Lẻ</span>
                                </div>
                                    <div style={{display: list_display_mobile[2]}}>
                                        <Dropdown2/>
                                    </div>
                            </div>
                            <div className={Styles.nav_item} onMouseEnter={() => display_dropdown(3)}
                                 onClick={() => display_dropdown_mobile(3)}>
                                <div>
                                    <span>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-filter-square" viewBox="0 0 16 16">
                                        <path
                                            d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                        <path
                                            d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                    </span>
                                    <span>Phim Bộ</span>
                                </div>
                                <div style={{display: list_display_mobile[3]}}>
                                    <Dropdown3/>
                                </div>
                            </div>
                            <div className={Styles.nav_item}>
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-gem" viewBox="0 0 16 16">
                                        <path
                                            d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"/>
                                    </svg>
                                    </span>
                                    <Link href={'/'} style={{textDecoration: 'none'}}>Chiếu Rạp</Link>
                                </div>
                            </div>
                            {/*<li><Link href={'/'} style={{textDecoration: 'none', color: 'white'}}>Chiếu Rạp</Link></li>*/}
                            {/*<li><Link href={'/'} style={{textDecoration: 'none', color: 'white'}}>Sắp Chiếu</Link></li>*/}
                            <div className={Styles.nav_item}>
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-file-bar-graph" viewBox="0 0 16 16">
                                        <path
                                            d="M4.5 12a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1z"/>
                                        <path
                                            d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                                    </svg>
                                    </span>
                                    <Link href={'/'} style={{textDecoration: 'none'}}>Sắp chiếu</Link>
                                </div>
                            </div>

                        </ul>
                    </div>
                    <div className={Styles.side_search}>
                        <div className={Styles.nav_search}>
                            <span></span>
                            <input type="text" placeholder={'Tìm kiếm'}/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white"
                                 className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <div className={Styles.nav_social}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-facebook" viewBox="0 0 16 16">
                                <path
                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fillRule="evenodd"
                                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
                        </div>
                    </div>
                </div>

            </nav>
            <div className={Styles.side_exit} style={{display: Sidebar_state}} onClick={display_sidebar}></div>
        </div>


    </>

}


