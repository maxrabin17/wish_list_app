import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Errors from './Errors'

const CreateWish = ({errors, groups, handleCreateWish}) => {

    const history = useHistory()
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
        fetch('/api/wishes', config)
            .then(res => res.json())
            .then(data => handleCreateWish(data))
            errors ? history.push('/wishes/new') : history.push('/wishes')
    }

    const renderGroups = () => {
        return groups.map(group => <option value={group.id}>{group.title}</option>)
    }

    // const handleClick = () => {
    //     history.push('/group/new')
    // }

    return (
        <div>
            <Form onSubmit={handleSubmit} className="form">
            <h1>Create a Wish!</h1>
                <Form.Group className="mb-3">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control name="item" type="text" placeholder="Enter Item's Name" onChange={ handleChange }/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control name="image_url" type="text" placeholder="Enter Image URL" onChange={ handleChange }/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Wish Price</Form.Label>
                    <Form.Control name="price" type="text" placeholder="Enter Item Price" onChange={ handleChange }/>
                </Form.Group>
                <label for="group_id">Choose a group </label>
                <br />
                <select onChange={handleChange} name="group_id" id="group_id">
                    <option disabled selected value> -- Select a Group -- </option>
                    {renderGroups()}
                </select>
                <br />
                <br />
                <Button variant="outline-success" type="submit">
                    Create Wish
                </Button>
            </Form>
            <Errors errors={ errors }/>
        </div>
    )
}

export default CreateWish
