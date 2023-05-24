// SideRight go bottom when screen is <768px
// SideRight have 8 card on wide screem > 1023px(side Right-Right from backdrop+description
// 8 card from 1024px to 768px(side Right -right from description, both des and side Right below backdrop)
// 767px and below have 8 card with 2 row(639px-767px)
// or 638px and below 3 row -9 card

import {URL_image} from "@/constant";

export default function SideRight(){
    const item = ['/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg',
        '/r7XifzvtezNt31ypvsmb6Oqxw49.jpg',
        '/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg',
        '/q54qEgagGOYCq5D1903eBVMNkbo.jpg',
        '/dlyzCeI8wojBsUWdkNdO5AXtmZq.jpg',
        '/bI7lGR5HuYlENlp11brKUAaPHuO.jpg',
        '/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
        '/qBOKWqAFbveZ4ryjJJwbie6tXkQ.jpg',
        '/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg'
    ]
    return <>
        <div>
        <h3>Side Right</h3>
        {item.map((el: string) => <div key={el}>
                <img src={URL_image(el)} alt=""/>
            </div>
        ) }
        </div>

    </>
}
