import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./component/shared/Layout";
import AddData from './pages/AddData';
import AllData from './pages/AllData';
import UpdateData from './pages/UpdateData';


function App() {

  return (
    <Layout>      

<Routes>
        <Route path="/" element={<AllData />}></Route>
        <Route path="/add-data" element={<AddData />}></Route>
        <Route path="/update-data/:id" element={<UpdateData />}></Route>

      </Routes>
    </Layout>
  )
}

export default App
