import React from 'react'
// import Error from './Error'

const Errors = ({ errors }) => {
    
    const renderErrors = () => {
        return errors.map(error => <p> {error} </p>)
    }
    return (
        <div>
            {renderErrors()}
        </div>
    )
}

export default Errors
