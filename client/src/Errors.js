import React from 'react'
import Error from './Error'

const Errors = ({ errors }) => {
    
    const renderErrors = () => {
        return errors.map((error, index) => <Error key={ index } error={ error } />)
    }
    return (
        <div>
            {renderErrors()}
        </div>
    )
}

export default Errors
