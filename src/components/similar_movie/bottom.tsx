// bottom have 5 card on wide screem > 1023px, 4 card from 1023px to 768px(side Right go below here) , 767px and below have 6 card with 2 row(639px-767px) or 3 row 638px and below
import {URL_image} from '@/constant/index'
import Styles from './bottom.module.css';
import Link from 'next/link';

export default function Bottom() {
    const item = [{title: 'Lightyear', img: '/8qHwlezCZzOhq88mnpeqK4asz4n.jpg', id: 718789},
        {title: 'Spider-Man: No Way Home', img: '/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg', id: 634649},
        {title: 'Luck', img: '/1HOYvwGFioUFL58UVvDRG6beEDm.jpg', id: 585511},
        {title: 'Doctor Strange in the Multiverse of Madness', img: '/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg', id: 453395},
        {title: 'See', img: '/lKDIhc9FQibDiBQ57n3ELfZCyZg.jpg', id: 80752},
        {title: 'Bullet Train', img: '/nF1a7P9lUq9kNas9RIvSEQ412qN.jpg', id: 718930},
        {title: 'Better Call Saul', img: '/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg', id: 60059},
        {title: 'Thirteen Lives', img: '/yi5KcJqFxy0D6yP8nCfcF8gJGg5.jpg', id: 698948},
        {title: 'Game of Thrones', img: '/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg', id: 1399}
    ]
    return <>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', gap: '1em'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red"
                     className="bi bi-camera-reels" viewBox="0 0 16 16" style={{ position: 'relative', top: '0.7em'}}>
                    <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
                    <path
                        d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
                    <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg>
                <h2 style={{color: 'white'}}>Hôm nay xem gì</h2>
            </div>
            <div style={{ position: 'relative', top: '1.8em',color:'white'}}>
                <span> <Link href={'/'}>Xem tất cả</Link> </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-film" viewBox="0 0 16 16">
                    <path
                        d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
                </svg>
            </div>
        </div>
        <div className={Styles.bottom}>
            {item.map((el: { title: string, img: string, id: number }) => <div key={el.img}>
                    <span>Vietsub</span>
                    <Link href={`/movie/${el.id}`} target={'_blank'}>
                        <img src={URL_image(el.img)} alt="" className={Styles.img}/>
                    </Link>
                    <Link href={`/movie/${el.id}`} target={'_blank'}>
                        <div className={Styles.information_poster}>
                            <span>FHD</span>
                            <p>{el.title}</p>
                            <div>
                                <span>120 Phút</span>
                                <span>20.5k Lượt xem</span>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    </>
}
