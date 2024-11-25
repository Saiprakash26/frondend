import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Get() {
    const [view, setview] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:1300/find')
            .then((res) => {
                setview(res.data)
            }).catch((err) => console.log(err))
    })
    return (
        <div>
            <Link className='btn btn-danger' to={'/post'}>Add student</Link>
            <div className='table-responsive'>

                {
                    view.length > 0 ? (
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>s.no</th>
                                    <th>Student name</th>
                                    <th>Student Rollno</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    view.map((item, index) => {
                                        return (
                                            <tr key={item._id}>
                                                <td>{item.Title}</td>
                                                <td>
                                                    <img src={`http://localhost:1300/Image/${item.Img}`} height={100} width={100}></img>
                                                </td>
                                              
                                                <td>
                                                    <Link to={`/edit/${item._id}`} className='btn btn-success'>Edit</Link>
                                                    <Link onClick={() => {
                                                        axios.delete(`http://localhost:1300/delete/${item._id}`)
                                                        .then(()=>{
                                                            window.alert("deleted")
                                                            window.location.reload()
                                                        }).catch(err=>{console.log(err)})
                                                    }} className='btn btn-danger'>Delete</Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>

                        </table>
                    ) : (<div>data no found</div>)
                }

            </div>

        </div>
    )
}
