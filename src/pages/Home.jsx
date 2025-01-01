// import { useState } from 'react'
import React from 'react'
import Header from '../components/Header'

import '../index.css'
// import Search from '../components/Search'
// import IntroPost from '../components/IntroPost'
// import Blogs from '../components/Blogs'
// import Footer from '../components/Footer'
// import './App.css'

function Home()  {
  return (

    // <div>
      
    // </div>

    <div className=' '>
       {/* {Header} */}
          <Header/>

       {/* {Search} */}
          <Search/>

       {/* {IntroPost} */}
           {/* <IntroPost/> */}

       {/* {Blogs} */}
           {/* <Blogs/> */}

       {/* {Footer} */}
           <Footer/>
 
        {/* Add */}
           <Add/>

           
        

    </div>


  )
}

export default Home