import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom'

const Logout = ({ setUser }) => {
    
    const history = useHistory()
    useEffect(() => {
        let config = {
            method: 'DELETE'
        }
        fetch('/logout', config)
        setUser(null)
        history.push('/login')
    })
    return (
        <div>
            Hellooooooo
        </div>
    )
}

export default Logout
