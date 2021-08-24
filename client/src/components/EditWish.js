import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'


const EditWish = ({wish, wishes, setWishes, groups, setWishCard}) => {

    const {id} = wish
    const [form, setForm] = useState({item: wish.item, price: wish.price, image_url: wish.image_url})

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let config = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(form)
        }
        fetch(`/api/wishes/${wish.id}`, config)
        .then(resp => resp.json())
        .then(data => setWishes(wishes.map(singleWish => singleWish.id === id ? data : singleWish))
        )
        setWishCard(true)
    }
    const renderGroups = () => {
        return groups.map(group => <option value={group.id}>{group.title}</option>)
    }

    return (
        <>
            <Form onSubmit={ handleSubmit } className="form">
            <h1>Edit Wish!</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control name="image_url" type="text" value={form.image_url} onChange={ handleChange }/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control name="item" type="text" value={form.item} onChange={ handleChange }/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name="price" type="text" value={form.price} onChange={ handleChange }/>
                </Form.Group>
                <label for="group_id">Choose a group </label>
                <br />
                <select onChange={handleChange} name="group_id" id="group_id">
                    <option disabled selected value> -- Select a Group -- </option>
                    {renderGroups()}
                </select>
                <br/>
                <br/>
                <Button variant="outline-success" type="submit">
                    Update
                </Button>
            </Form>
        </>
    )
}

export default EditWish
