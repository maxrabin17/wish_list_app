import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'


const CreateGroup = ({handleCreateGroup}) => {

    const [form, setForm] = useState({})
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(form)
        }
        fetch('/api/groups', config)
            .then(res => res.json())
            .then(data => handleCreateGroup(data))
            // errors ? history.push('/login') : history.push('/wishes')
    }

    return (
        <div>
            <Form onSubmit={ handleSubmit } className="form">
            <h1>Create Group!</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name="title" type="text" placeholder="Enter Group Name" onChange={ handleChange }/>
                </Form.Group>
                <Button variant="outline-success" type="submit">
                    Create Group
                </Button>
            </Form>
        </div>
    )
}

export default CreateGroup
