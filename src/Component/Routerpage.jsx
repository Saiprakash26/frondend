import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Get from './Get'
import Post from './Post'
import Update from './Update'

export default function Routerpage() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Get/>}></Route>
                    <Route path='/post' element={<Post/>}></Route>
                    <Route path='/edit/:id' element={<Update/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
