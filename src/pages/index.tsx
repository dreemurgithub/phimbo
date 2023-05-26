import Anime from "@/components/home/anime";
import Chart from "@/components/home/Chart";
import New_Series from "@/components/home/new_serires";
import New_single from "@/components/home/new_single";
import Recommend from "@/components/home/recommend";
import Single from "@/components/home/single";
import Soon from "@/components/home/Soon";
import Today from "@/components/home/Today";
import Trailer from "@/components/home/Trailer";
import Update from "@/components/home/update";
import {useEffect, useState} from "react";
import Link from "next/link";

export default function Home() {
    const [data_list, setdata_list] = useState({})
    useEffect(() => {
        fetch('/api/home')
            .then(res => res.json())
            .then(data => setdata_list(data))
    }, [])
    return <>
        <div>
            <div>
                <Header text={'PHIM ĐỀ CỬ'}/>
                <Recommend/>
            </div>
            <div>
                <Header text={'PHIM MỚI CẬP NHẬT'}/>
                <Update/>
            </div>
            <div>
                <Header text={'PHIM HOẠT HÌNH'}/>
                <Anime/>
            </div>
            <div>

                <Header text={'PHIM CHIẾU RẠP'}/>
                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor"
                     style={{position: 'relative', left: '60vw'}}
                     className="bi bi-emoji-heart-eyes-fill" viewBox="0 0 16 16">
                    <path
                        d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.559 5.448a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"/>
                </svg>
                <Single/>
            </div>
            <div>
                <Header text={'PHIM BỘ MỚI'}/>
                <New_Series/>
            </div>
            <div>
                <Header text={'PHIM LẺ MỚI'}/>
                <New_single/>
            </div>
            <div>
                <Header text={'BẢNG XẾP HẠNG'}/>
                <Chart/>
            </div>
            <div>
                <Header text={'TRAILER'}/>
                <Trailer/>
            </div>
            <div>
                <Header text={'HÔM NAY XEM GÌ'}/>
                <Today/>
            </div>
            <div>
                <Header text={'PHIM SẮP CHIẾU'}/>
                <Soon/>
            </div>
        </div>
        <div style={{ backgroundColor:'black',padding:'3em 999em',marginRight:'-999em',marginLeft:'-999em' }}>
            <h3 style={{textAlign:'center',color:'red'}}>BỘ SƯU TẬP</h3>
            <div className="footer_home">
                <div>
                    <Link href="/bo-suu-tap/disney-plus" className="grid-item img-responsive">
                        <img
                            src="https://s198.imacdn.com/ff/2021/03/08/a0d904ad483598b6_bcaf2bb0f6a9f95a_55737161520379431.jpg"
                            alt="Disney+"/>
                    </Link>
                </div>
                <div>
                    <Link href="/bo-suu-tap/phim-kinh-dien" className="grid-item img-responsive">
                        <img
                            src="https://s198.imacdn.com/ff/2019/10/26/0c2f054dbbcc519e_f5ea1f644016067e_36993157209593121.jpg"
                            alt="phim kinh điển"/>
                    </Link>
                </div>
                <div>
                    <Link href="/bo-suu-tap/phim-bom-tan" className="grid-item img-responsive">
                        <img
                            src="https://s198.imacdn.com/ff/2019/10/26/aa4cf62a8a41a8d0_a1bf98941af6ad02_40433157209595111.jpg"
                            alt="phim bom tấn"/>
                    </Link>
                </div>
                <div>
                    <Link href="/bo-suu-tap/dc-comics" className="grid-item img-responsive">
                        <img
                            src="https://s198.imacdn.com/ff/2019/10/26/f0de54c9fa04599a_31bb313de0a7d8e2_46641157209606931.jpg"
                            alt="DC Comics"/>
                    </Link>
                </div>
                <div>
                    <Link href="/bo-suu-tap/marvel" className="grid-item img-responsive">
                        <img
                            src="https://s198.imacdn.com/ff/2019/10/26/59cd8f092f6dd6fc_3aaacac701101d2a_49148157209609171.jpg"
                            alt="Marvel"/>
                    </Link>
                </div>
                <div>
                    <Link href="/bo-suu-tap/phim-bom-xit" className="grid-item img-responsive">
                        <img
                            src="https://s198.imacdn.com/ff/2019/10/26/49b4e06978defb37_8c148f128dc8d81e_41562157209621361.jpg"
                            alt="phim bom xịt"/>
                    </Link>
                </div>
                <div>
                    <Link href="/bo-suu-tap/phim-doat-giai-oscar" className="grid-item img-responsive">
                        <img
                            src="https://s198.imacdn.com/ff/2020/12/21/910d5cd341d55be1_e1c9d72b3465ab77_9058160852063491.jpg"
                            alt="phim đoạt giải oscar"/>
                    </Link>
                </div>
                <div>
                    <Link href="/bo-suu-tap/netflix-original" className="grid-item img-responsive">
                        <img
                            src="https://s198.imacdn.com/ff/2020/04/25/24875423cf93c11c_7d846b3e82c05490_29652158779284741.jpg"
                            alt="Netflix Original"/>
                    </Link>
                </div>
            </div>
        </div>
    </>
}
function Header({
    text
}:{
    text: string
}){
    return <>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', gap: '1em'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red"
                     className="bi bi-camera-reels" viewBox="0 0 16 16" style={{position: 'relative', top: '0.7em'}}>
                    <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
                    <path
                        d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
                    <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg>
                <h2 style={{color: 'white'}}>{text}</h2>
            </div>
            <div style={{position: 'relative', top: '1.8em', color: 'white'}}>
                <span> <Link href={'/'}>Xem tất cả</Link> </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-film" viewBox="0 0 16 16">
                    <path
                        d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
                </svg>
            </div>
        </div>
    </>
}
