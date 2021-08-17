import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'

const Home = ({ user }) => {
    
    const history = useHistory()
    const handleClick = () => {
        history.push('/wishes')
    }

    return (
        <div className = "form">
            <h1>
                {user ? `Welcome to ${user.username}'s Wishlist` : "Log in or Sign up to View/Create your wishes!"}
            </h1>
            <div className="buttons">
                <Button variant="outline-success" type="click" onClick={ handleClick }>
                    View Wishes
                </Button>
            </div>
        </div>
    )
}

export default Home
