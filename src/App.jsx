// import { useState } from 'react'
// import viteLogo from '/img/vite.svg'
// import nomralLogo from '../public/img/icon.png'
// import './shared/styles/App.css'
// Components layout
import { Header } from './features/layout/components/Header'
import { Footer } from './features/layout/components/Footer'
import { Content } from './features/layout/components/Content'
// Components view
import { Article } from './features/view/components/Article'
import { Offers } from './features/view/components/Offers'
// Components auth
import { Myaccount } from './features/auth/components/Myaccount'
import { Mybuys } from './features/auth/components/Mybuys'
import { Myfavorities } from './features/auth/components/Myfavorities'
// React Dom
import { HashRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
      <HashRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Content />}></Route>
          <Route path='/article' element={<Article />}></Route>
          <Route path='/offers' element={<Offers />}></Route>
          <Route path='/myaccount' element={<Myaccount />}></Route>
          <Route path='/mybuys' element={<Mybuys />}></Route>
          <Route path='/myfavorities' element={<Myfavorities />}></Route>
        </Routes>
        <Footer></Footer>
      </HashRouter> 
    </>
  )
}

export default App

