import {React, useProps} from 'react'
import Header from './Header'
import Footer from './Footer'
import HomePage from '../../pages/HomePage'

const Layout = ( {children} ) => {
  return (
    <>
    <Header/>

    <div className='content'>  {children} </div>

    <Footer/>
    </>
  )
}

export default Layout
