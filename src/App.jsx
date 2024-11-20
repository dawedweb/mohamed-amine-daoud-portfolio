import React from 'react'

import Hero from './components/hero/hero'
import Navbar from './components/navbar/Navbar'
import About from './components/about/about'
import Servises from './components/services/servises'
import Portfolio from './components/my-work/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Postjob from './components/my-work/postjob'
import Coffe from './components/my-work/coffe'
import Pfe_help from './components/my-work/Pfe_help'


const App = () => {

 
  
  
  return (

    
    <div>
    
    

    
    <main>

    

<BrowserRouter>
<Navbar/>


<Routes>
<Route path='/homme' element={ <Hero/>} />
<Route path='/About' element={ <About/>} />
<Route path='/Services' element={ <Servises/>} />
<Route path='/Portfolio' element={ <Portfolio/>} />
<Route path='/Contact' element={ <Contact/>} />
<Route path='/Postjob' element={ <Postjob/>} />
<Route path='/Coffe' element={ <Coffe/>} />
<Route path='/pfe-help' element={ <Pfe_help/>} />



</Routes>
</BrowserRouter>
   
    <Footer/>


    </main>
  
  
  

    

     </div>
     
  )
}

export default App