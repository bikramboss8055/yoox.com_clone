import { useState } from 'react'

import './App.css'
import AllRoutes from './Sections/AllRoutes/AllRoutes'
import HomePage from "./Sections/HomepageSection/HomePage"
import Navbar from './Sections/HomepageSection/Navbar'
import MenProductPage from './Sections/MenProductPage/MenProductPage'
import SignUpAndLogInPage from './Sections/SignUp&LogInPage/SignUp&LogInPage'
import WomenProductPage from './Sections/WomenProductPage/WomenProductPage'




function App() {


  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <SignUpAndLogInPage/> */}
      {/* <MenProductPage/> */}
      {/* <WomenProductPage/> */}
      {/* <Navbar/> */}
      <AllRoutes/>
      

    </div>
  )
}

export default App
