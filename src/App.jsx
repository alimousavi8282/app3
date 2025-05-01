import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './Components/page1'
import Show from './Components/page2'

import { Routes, Route, Link } from "react-router-dom";

function App() {


  return (
    <>

<Routes>
<Route path='/information' element={<Show/>}></Route>
<Route path='/home' element={<Main/>}></Route>
<Route path='/' element={<Main/>}></Route>
</Routes>


    </>
  )
}

export default App
