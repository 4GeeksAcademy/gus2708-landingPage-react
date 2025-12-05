import React from 'react'
import Card from './Card'

let cards = [
    {
        imgUrl: "https://i.guim.co.uk/img/media/bf8784bae4dc2cce998db526e6ab42763306c690/60_0_1800_1080/master/1800.jpg?width=700&quality=85&auto=format&fit=max&s=96c8b438d490e051c89cc11f8a502738",
        text: "Aerial view of a lush green landscape with mountains in the distance."
    },
    {
        imgUrl: "https://images.rpgsite.net/image/da49c9a1/124242/original/tears-of-the-kingdom-review-scrn-02.png",
        text: "Link glides through the sky on a paraglider above floating islands in Tears of the Kingdom."
    },
    {
        imgUrl: "https://sm.ign.com/ign_es/gallery/t/the-legend/the-legend-of-zelda-tears-of-the-kingdom-april-2023-screensh_9hjd.jpg",
        text: "Link stands on a cliff overlooking Hyrule with vast landscapes"
    },
    {
        imgUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/24424100/Switch_TLOZ_TOTK_Screen_14.jpg?w=1600&h=900&fit=crop",
        text: "Link battles a large stone golem-like enemy in Tears of the Kingdom."
    },
    {
        imgUrl: "https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/24649232/zelda_tears_kingdom_link_running_1920.jpg?q=50&fit=crop&w=825&dpr=1.5",
        text: "Link runs across grassy terrain with a sword in hand in Tears of the Kingdom.."
    },
    {
        imgUrl: "https://media.newyorker.com/photos/64668974328537f70292d631/16:9/w_1920,h_1080,c_limit/Zelda%20Screenshot1.jpg",
        text: "Link explores a sunlit grassy field with distant ruins in Tears of the Kingdom."
    }
]

const Album = () => {
    return (
        <div className="album marginContainer mt-5 py-5 bg-body-tertiary rounded-3">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                    {cards.map((card) => (
                        <Card imgUrl={card.imgUrl} text={card.text} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Album