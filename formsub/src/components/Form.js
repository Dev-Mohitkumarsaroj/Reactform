import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [data, setData] = useState({ name: "", email: "", phone: "", collage: "", branch: "", message1: "", message2: "" })
    const handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value })
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        alert(data)


    }
    return (
        <form method='post' onSubmit={handlesubmit}>
            <h1>To apply, <span>Complete this form</span></h1>

            <label for="html">Full Name</label>
            <input type='text' name='name' id='' onChange={handlechange}
                value={data.name} placeholder='Enter your Full name' />

            <label for="html">Email Address</label>
            <input type='email' name='email' id='' onChange={handlechange}
                value={data.email} placeholder='Enter your Email Address' />

            <label for="html">Contact </label>
            <input type='phone' name='phone' id='' onChange={handlechange}
                value={data.phone} placeholder='Enter your Contact number' />

            <label for="html">Collage Name</label>
            <input type='text' name='collage' id='' onChange={handlechange}
                value={data.collage} placeholder='Enter your College name' />

            <label for="html">Branch Name</label>
            <input type='text' name='branch' id='' onChange={handlechange}
                value={data.branch} placeholder='Enter your branch name' />

            <label for="html">Your Skills</label>
            <textarea name="message1" id="" cols="10" rows="4" onChange={handlechange}
                value={data.message1} placeholder='Enter your Technical and Personal skills'></textarea>

            <label for="html">Write what makes you fit for this programme</label>
            <textarea name="message2" id="" cols="10" rows="8" onChange={handlechange}
                value={data.message2} placeholder='Write what makes you fit for this programme'></textarea>

            <label for="formFileLg" class="form-label">Upload Your resume</label>
            <input id="formFileLg" type="file"></input>

            <div>
                <select className='type' aria-label="Large select example">
                    <option selected>Internship Type</option>
                    <option value="1">Hybrid </option>
                    <option value="2">Remote</option>


                </select>
            </div>

            <div>
                <select className='time' aria-label="Large select example">
                    <option selected>FullTime/PartTime</option>
                    <option value="1">Full Time</option>
                    <option value="2">Part Time</option>
                </select>
            </div>
            <button type='submit'>Submit</button>

        </form >
    )
}

export default Form