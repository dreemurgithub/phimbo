import {useState, useEffect} from "react";
import Link from 'next/link'
import Styles from './navStyle.module.css'
import Dropdown0, {Dropdown2, Dropdown3, Dropdown1} from "@/components/navbar/dropdown";

export default function Navbar() {
    const [list_display, set_display] = useState(['none', 'none', 'none', 'none'])
    const [list_display_mobile, set_display_mopbile] = useState(['none', 'none', 'none', 'none'])

    function display_dropdown(dropdown_po: number) {
        const list_new = ['none', 'none', 'none', 'none']
        list_new[dropdown_po] = 'block'
        if (window.screen.width > 1023) {
            set_display(list_new)
            if (dropdown_po > 3) set_display(['none', 'none', 'none', 'none'])
        }
        // else set_display_mopbile(list_new)
    }

    function display_dropdown_mobile(dropdown_po: number) {
        const list_new = list_display_mobile
        if(list_new[dropdown_po]==='none') list_new[dropdown_po] = 'grid'
        else list_new[dropdown_po] ='none'
        if (window.screen.width <= 1023) {
            set_display_mopbile(list_new.map(el=>el))
        }
    }

    return <>

        <nav className={Styles.nav_all}>
            <div>
                <div className={Styles.nav_icon}>
                    <img src="https://phim1080.in/assets/img/phim1080.png" alt=""/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-list" viewBox="0 0 16 16">
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
            <div className={Styles.sidebar}>
                <div className={Styles.side_list}>
                    <ul className={Styles.navbar_display}>
                        <div className={Styles.nav_item} onMouseEnter={() => display_dropdown(0)}
                             onMouseLeave={() => display_dropdown(5)} onClick={()=>display_dropdown_mobile(0)}>
                            <div>
                                <span>Thể Loại</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                </svg>
                                <div style={{display: list_display_mobile[0]}}>
                                    <Dropdown0/>
                                </div>


                            </div>
                        </div>
                        <div className={Styles.nav_item} onMouseEnter={() => display_dropdown(1)}
                             onMouseLeave={() => display_dropdown(5)} onClick={()=>display_dropdown_mobile(1)}>
                            <div>

                                Quốc Gia
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                </svg>
                                <div style={{display: list_display_mobile[1]}}>
                                    <Dropdown1/>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.nav_item} onMouseEnter={() => display_dropdown(2)}
                             onMouseLeave={() => display_dropdown(5)} onClick={()=>display_dropdown_mobile(2)}>
                            <div>

                                Phim Lẻ
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                </svg>
                                <div style={{display: list_display_mobile[2]}}>
                                    <Dropdown2/>
                                </div>

                            </div>
                        </div>
                        <div className={Styles.nav_item} onMouseEnter={() => display_dropdown(3)}
                             onMouseLeave={() => display_dropdown(5)} onClick={()=>display_dropdown_mobile(3)}>
                            <div>Phim Bộ
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                </svg>
                                <div style={{display: list_display_mobile[3]}}>
                                    <Dropdown3/>
                                </div>
                            </div>
                        </div>
                        <li><Link href={'/'}>Chiếu Rạp</Link></li>
                        <li><Link href={'/'}>Sắp Chiếu</Link></li>

                    </ul>
                </div>
                <div className={Styles.side_search}>
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


    </>

}

function DropDown_display() {

}
