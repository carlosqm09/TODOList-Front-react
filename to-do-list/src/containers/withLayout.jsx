import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

const withLayout = (Page) => (props) => {
  return (
    <>
    <Header/>
    <Page {...props} /> 
    <Footer/>
    </>
  )
}

export default withLayout