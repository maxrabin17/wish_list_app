import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'

const Home = ({ user }) => {
    
    const history = useHistory()
    const handleClick = () => {
        history.push('/wishes')
    }

    return (
        <div className="home-page">
            <h1 id="home" >Wishlist App</h1>
            <p id="welcome">An easy to use app to create and save wishes.</p>
            <img id="home-image" src="https://clipartion.com/wp-content/uploads/2015/11/shooting-star-icons-free-download.jpg" alt="Girl in a jacket" width="400" height="300"/>
            {/* <h1>
                {user ? `Welcome to ${user.username}'s Wishlist` : null}
            </h1> */}
            <h1 id="home-links">
            <a className="link" href = "/login">Login</a> or <a className="link" href = "/signup">Sign Up</a> to begin making your wishes!
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
