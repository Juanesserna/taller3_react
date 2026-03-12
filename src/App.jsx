import { Header } from './features/layout/components/Header'
import { Footer } from './features/layout/components/Footer'
import { Content } from './features/layout/components/Content'
import { Article } from './features/view/components/Article'
import { Offers } from './features/view/components/Offers'
import { MyAccount } from './features/auth/components/Myaccount'
import { MyBuys } from './features/auth/components/Mybuys'
import { MyFavorities } from './features/auth/components/Myfavorities'
import { ShopProvider } from './features/context/ShopContext'
import { HashRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <ShopProvider>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/article' element={<Article />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/myaccount' element={<MyAccount />} />
          <Route path='/mybuys' element={<MyBuys />} />
          <Route path='/myfavorities' element={<MyFavorities />} />
        </Routes>
        <Footer />
      </HashRouter>
    </ShopProvider>
  )
}

export default App