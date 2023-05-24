// bottom have 5 card on wide screem > 1023px, 4 card from 1034px to 768px(side Right go below here) , 767px and below have 6 card with 2 row(639px-767px) or 3 row 638px and below
import {URL_image} from '@/constant/index'

export default function Bottom() {
    const item = [{title: 'Lightyear', img: '/8qHwlezCZzOhq88mnpeqK4asz4n.jpg'},
        {title: 'Spider-Man: No Way Home', img: '/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg'},
        {title: 'Luck', img: '/1HOYvwGFioUFL58UVvDRG6beEDm.jpg'},
        {title: 'Doctor Strange in the Multiverse of Madness', img: '/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg'},
        {title: 'See', img: '/lKDIhc9FQibDiBQ57n3ELfZCyZg.jpg'},
        {title: 'Bullet Train', img: '/nF1a7P9lUq9kNas9RIvSEQ412qN.jpg'},
        {title: 'Better Call Saul', img: '/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg'},
        {title: 'Thirteen Lives', img: '/yi5KcJqFxy0D6yP8nCfcF8gJGg5.jpg'},
        {title: 'Game of Thrones', img: '/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg'}
    ]
    return <>
        <div>
            <h3>Bottom</h3>
            {item.map((el: { title: string, img: string }) => <div key={el.img}>
                    <h4>{el.title}</h4>
                    <img src={URL_image(el.img)} alt=""/>
                    <div>
                        <p>120 Phút</p>
                        <p>20.5k Lượt xem</p>
                    </div>

                </div>
            )}
        </div>
    </>
}
