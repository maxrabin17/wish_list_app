import React, {useState} from 'react'
import { Card } from 'react-bootstrap'
import WishBody from './WishBody'
import EditWish from './EditWish'

const WishCard = ({ wish, groups, setWishes, wishes }) => {
    
    const { item, image_url, price, id } = wish;
    const [wishCard, setWishCard] = useState(true)

    const handleDeleteWish = () => {
        let config = {
            method: 'DELETE'
        }

        fetch(`/wishes/${id}`, config)
        setWishes(
            wishes.filter(wish => {
                return wish.id !== id 
            })
        )
    }

    const handleWishCardBody = () => {
        return wishCard ? <WishBody item={item} price={price} image_url={image_url} handleDeleteWish={handleDeleteWish} wishCard={wishCard} setWishCard={setWishCard}/> : <EditWish groups={groups} wish={wish} wishes={wishes} setWishes={setWishes} setWishCard={setWishCard}/>
    }

    return (
        <div>
            <Card style={{ width: '18rem' }} className = "wishcard">
                {handleWishCardBody()}
            </Card>
        </div>
    )
}

export default WishCard