import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Update() {


    const [names, setname] = useState('')
    const [rollnos, setrollno] = useState('')
    const navigate = useNavigate()

    const { id } = useParams()


    useEffect(() => {
        axios.get(`http://localhost:1300/find/${id}`)
            .then((res) => {
                setname(res.data.Title)
                setrollno(res.data.Img)

            })
            .catch((err) => { console.log(err) })
    },[id])


    const formData = new FormData();

    formData.append('Title', names)
    formData.append('imgsupdate', rollnos)
    function handleupadte(){
        axios.put(`http://localhost:1300/update/${id}`,formData, {

            headers: {
                'Content-Type': 'multipart/form-data'

            }
        })
        .then(()=>{
            navigate('/')
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <div className='form p-5'>
                <input
                    type="text"
                    placeholder='enter ur name'
                    className='form-control mb-3'

                    value={names}

                    onChange={(e) => setname(e.target.value)}
                />
                <input
                    type="file"
                    accept='image/*'
                    placeholder='enter ur rollno '
                    className='form-control mb-3'
                    // value={rollnos}
                    onChange={(e) => setrollno(e.target.files[0])}
                />
           
             
            </div>
            <button className='btn btn-secondary' onClick={handleupadte} >update details</button>
        </div>
    )
}
