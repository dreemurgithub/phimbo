// bottom have 5 card on wide screem > 1023px, 4 card from 1034px to 768px(side Right go below here) , 767px and below have 6 card with 2 row(639px-767px) or 3 row 638px and below
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
        <div className={Styles.bottom}>
            {item.map((el: { title: string, img: string, id: number }) => <div key={el.img}>
                <Link href={`/movie/${el.id}`} target={'_blank'}>
                    <img src={URL_image(el.img)} alt="" className={Styles.img}/>
                </Link>
                <Link href={`/movie/${el.id}`} target={'_blank'}>

                    <div>
                        <h4>{el.title}</h4>
                        <p>120 Phút</p>
                        <p>20.5k Lượt xem</p>
                    </div>
                </Link>

                </div>
            )}
        </div>
    </>
}
