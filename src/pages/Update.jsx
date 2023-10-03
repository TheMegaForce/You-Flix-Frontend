import React, { useState } from 'react'
import { useLoaderData, Form } from 'react-router-dom'

const Update = () => {
    const profile = useLoaderData()
    const [formData, setFormData] = useState(profile)

    const handleChange = (e) =>{
        setFormData(prevState =>{
            return{...prevState, [e.target.name] : e.target.value}
        })
    }

  return (
    <div>
        <Form action={`/update/${profile._id}`} method="post">
            <input value = {formData.name} type="text" name="text" onChange={handleChange} placeholder="Display Name"/>
            <input value = {formData.username} type="text" name="text" onChange={handleChange} placeholder="Username"/>
            <input value = {formData.password} type="text" name="text" onChange ={handleChange} placeholder="Password"/>

        </Form>
    </div>
  )
}

export default Update