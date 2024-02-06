import React from 'react'
import Head from './Head'
import { Outlet } from 'react-router'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
    <Head />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout