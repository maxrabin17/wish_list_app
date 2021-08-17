import React from 'react'
import {Card, Button} from 'react-bootstrap'

const WishCard = ({wish, groups}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }} className = "wishcard">
                <Card.Img variant="top" src={wish.image_url} />
                <Card.Body>
                    <Card.Title>{wish.item}</Card.Title>
                    <Card.Text>
                        <p></p>
                        <p>Price: ${ wish.price }</p>
                    </Card.Text>
                    <Button variant="outline-danger">Remove Wish</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default WishCard

//  <div className="contact-card">
//     {contacts.map(contact => <ContactCard contacts={contacts} contact={contact} setContacts={setContacts}/>)}
// </div> 