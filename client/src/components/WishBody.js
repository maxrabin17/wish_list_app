import React from 'react'
import { Card, Button, Nav } from 'react-bootstrap'

const WishBody = ({ item, price, image_url, group, handleDeleteWish, setWishCard,  wish, wishes }) => {

    const handleClick = () => {
        setWishCard(false)
    }

    return (
        <>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{item}</Card.Title>
                <Card.Text>
                    <p>Group: { wish.group.title }</p>
                    <p>Price: ${price}</p>
                </Card.Text>
                <Button onClick={handleDeleteWish} variant="outline-danger">Remove Wish</Button>
            </Card.Body>
            <Nav id="edit-wish">
                <Nav.Item>
                    <Nav.Link onClick={ handleClick } href="#edit">Edit Wish</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default WishBody
