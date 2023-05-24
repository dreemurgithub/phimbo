// SideRight go bottom when screen is <768px
// SideRight have 8 card on wide screem > 1023px(side Right-Right from backdrop+description
// 8 card from 1024px to 768px(side Right -right from description, both des and side Right below backdrop)
// 767px and below have 8 card with 2 row(639px-767px)
// or 638px and below 3 row -9 card

import {URL_image} from "@/constant";
import Styles from './SideRight.module.css'
import Link from 'next/link'

export default function SideRight() {
    const item = [
        {title: 'Prey', img: '/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg',id: 766507},
        {title: 'DC League of Super-Pets', img: '/xfNHRI2f5kHGvogxLd0C5sB90L7.jpg' , id: 539681},
        {title: 'Jurassic World Dominion', img: '/pVjrIf7iISs4KQwwbvT2pQOvQZI.jpg' , id: 507086},
        {title: 'The Sandman', img: '/eqhKMZTLcieAvoH6CBqknTTfNby.jpg' , id: 90802},
        {title: 'The Next 365 Days', img: '/6cpRpfD3isvluFwXDGSiDVyibPJ.jpg' , id: 829560},
        {title: 'Day Shift', img: '/wDyM1lIIgK4RIDAgr8iuZe9N1cf.jpg' , id: 755566},
        {title: 'Minions: The Rise of Gru', img: '/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg' , id: 438148},
        {title: 'Elvis', img: '/xyS0NgcQ2pbGWcwvSSu3xKEBhoO.jpg' , id: 614934},
        {title: 'Orphan: First Kill', img: '/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg' , id: 760161}
    ]
    return <>
        <div className={Styles.sideRight}>
            {item.map((el: { title: string, img: string,id:number }) => <div key={el.img} className={Styles.card}>
                <Link href={`/movie/${el.id}`} target={'_blank'}><img src={URL_image(el.img)} alt="" className={Styles.img}/></Link>
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
