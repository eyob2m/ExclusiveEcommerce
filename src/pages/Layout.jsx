import { Outlet, useLocation } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import PreHeader from "../components/PreHeader"

const Layout = () => {
    const location = useLocation()
    let page = location.pathname.split('/')[1] ? location.pathname.split('/')[1].toLowerCase() : "home"
  
  return (
  <>
   <PreHeader />
   <Header page={page} />
   <Outlet />
   <Footer />
  </>
  )
}

export default Layout