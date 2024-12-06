import Footer from '../../widgets/footer'
import Header from '../../widgets/header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className="container m-auto">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
    </>
  )
}

export default Layout