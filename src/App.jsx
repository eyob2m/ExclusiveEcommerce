
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import About from './pages/About'
import Account from './pages/Account'
import Cart from './pages/Cart'
import CheckoutPage from './pages/CheckoutPage'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/LogIn'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'
import SignUp from './pages/SignUp'
import WishList from './pages/WishList'
import Layout from './pages/Layout'



const App = () => {

  return (
    <BrowserRouter>
    <Routes>

<Route path='/' element={<Layout />}>
<Route index element={<Home />} />
<Route path='about' element={<About />} />
<Route path='account' element={<Account />} />
<Route path='contact' element={<Contact />} />
<Route path='signup' element={<SignUp />} />
<Route path='login' element={<Login />} />
<Route path='wishlist' element={<WishList />} />
<Route path='checkout' element={<CheckoutPage />} />
<Route path='cart' element={<Cart />} />
<Route path='product/:id' element={<ProductDetail />} />
<Route path='*' element={<NotFound />} />

</Route>

    </Routes>

    </BrowserRouter>
  )
}

export default App