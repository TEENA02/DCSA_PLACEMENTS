import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider ,Navigate} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from '../components/Home.jsx'
import Placement_23 from '../components/Placement_23.jsx'
import Placement_24 from '../components/Placement_24.jsx'
import Placemnet_25 from '../components/Placemnet_25.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
  <Route index element={<Home />} />
      <Route path='home' element={<Home/>}/>
      <Route path='placement_23' element={<Placement_23/>}/>
      <Route path='placement_24' element={<Placement_24/>}/>
      <Route path='placement_25' element={<Placemnet_25/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}/>

)
