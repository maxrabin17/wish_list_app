import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import WishCard from './WishCard'

const Wishes = ({ user, wishes, groups }) => {

    const history = useHistory()
    const handleClick = () => {
        history.push('/wishes/new')
    }

    return (
        <>
            <div className="form">
                <h1>
                    {user ? `Welcome to ${user.username}'s Wishes` : "Log in to view your wishes!"}
                    <br />
                    <Button variant="outline-success" type="click" onClick={handleClick}>
                        Create a Wish!
                </Button>
                </h1>
            </div>
            <div className="wishcard">
                {wishes ? wishes.map(wish => <WishCard groups={ groups } wish={wish} />) : null}
            </div>
        </>
    )
}

export default Wishes

//  <div className="contact-card">
//     {contacts.map(contact => <ContactCard contacts={contacts} contact={contact} setContacts={setContacts}/>)}
// </div> 