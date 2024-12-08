import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import PreHeader from "../components/PreHeader"

const Layout = () => {
  return (
  <>
   <PreHeader />
   <Header />
   <Outlet />
   <Footer />
  </>
  )
}

export default Layout