// Copyright 2024 dawed
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react'
import './about.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/imageprofile1.png'

const About = () => {
  return (
    
<div id='propos' className='about'>

           <div className='about-title'>
           <h1>à propos de moi</h1>
           <img src={theme_pattern} alt=''/>
           </div>

    <div className='about-section'>
    
          <div className='about-left'>
          <img className='imageprof' src={profile_img} alt='' />
    
          </div>
    
<div className='about-right'>
         <div className='about-para'>
          <p>  Je suis un développeur full stack autodidacte basé à Tunisie.</p> 
           <p>Je peux développer des sites Web  à partir de zéro et les transformer en expériences Web modernes et conviviales.
         
           Transformer ma créativité et mes connaissances en sites Web est ma passion depuis plus d'e 4 ans. J'ai aidé divers clients à établir leur présence en ligne.

           Je m'efforce toujours de découvrir les technologies et les frameworks les plus récents.</p>
          </div>
    
   <div className='about-skills'>
       <div className='about-skill'> <p> html & css</p> <hr style={{width:"50%"}} /></div>
        <div className='about-skill'> <p> Java SCRIPT</p> <hr style={{width:"50%"}} /></div>
        <div className='about-skill'> <p>php </p> <hr style={{width:"50%"}} /></div>
        <div className='about-skill'> <p> SQL & MYSQL </p> <hr style={{width:"50%"}} /></div>
        <div className='about-skill'> <p>Bootstrap </p> <hr style={{width:"50%"}} /></div>
       <div className='about-skill'> <p>React JS </p> <hr style={{width:"50%"}} /></div>
        <div className='about-skill'> <p> Laravel</p> <hr style={{width:"50%"}} /></div>

    </div>

 </div>
</div>

       <div className='about-achivements'>
       
       <div className='about-achivement'>
       <h1> 2+ </h1>
       <p>Annés d'experionce</p>

       </div>
       <hr  />

       <div className='about-achivement'>
       <h1> 15+ </h1>
       <p>projets complet</p>

       </div>
       <hr  />

       <div className='about-achivement'>
       <h1> 20+ </h1>
       <p>clients satisfais </p>

       </div>
       

       </div>
</div>
  )
}

export default About