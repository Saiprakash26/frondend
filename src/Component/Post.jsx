import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Post() {
    const [name, setname] = useState('')
    const [rollno, setrollno] = useState(0)
    // const [date, setdate] = useState('')
    // const [email, setemail] = useState('')
    // const [age, setage] = useState(0)
    const navigate = useNavigate()



    const formData = new FormData();

    formData.append('Title', name)
    formData.append('imgs', rollno)
    
    function handlesumbit() {


        axios.post('http://localhost:1300/create', formData, {

            headers: {
                'Content-Type': 'multipart/form-data'

            }
        })
            .then(() => {
                window.alert("data is send ")
                navigate('/')
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <div className='form p-5'>
                <input
                    type="text"
                    placeholder='enter ur name'
                    className='form-control mb-3'

                    value={name}

                    onChange={(e) => setname(e.target.value)}
                />
                <input
                    type="file"
                    placeholder='enter ur rollno '
                    className='form-control mb-3'
                    accept='image/*'

                    onChange={(e) => setrollno(e.target.files[0])}
                />
                {/* <input
                    type="email"
                    placeholder='enter ur email'
                    className='form-control mb-3'
                    value={email}

                    onChange={(e) => setemail(e.target.value)}
                /> */}
                {/* <input
                    type="number"
                    placeholder='enter ur age'
                    className='form-control mb-3'
                    value={age}
                    onChange={(e) => setage(e.target.value)}
                />
                <input
                    type="date"
                    placeholder='enter ur dob'
                    className='form-control mb-3'
                    value={date}
                    onChange={(e) => setdate(e.target.value)}
                /> */}
            </div>
            <button className='btn btn-secondary' onClick={handlesumbit}>Add details</button>
        </div>
    )
}
