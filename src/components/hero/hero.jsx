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
import'./hero.css'
import image_profile from '../../assets/imageprofile1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom';

 const Hero = () => {
  return (
    <div id='homme' className='hero'>
<img className='imageprof' src={image_profile} alt=''/>
    
    <h1>Bonjour je m'apelle <span>Daoud Mohamed Amine</span>, développeur web basé en Tunisie.</h1>  
    <p> je suis un jeune full stack développeur  avec une éducation de bac+3 en sciense informatique et multimédia.</p>
    
    <div className='hero-action'>

    <div className='hero-connect'>
    
    <Link className='anchor-link'  offset={50} to='/Contact'>contacter moi</Link></div>

    
    <div className='hero-resumer'>voir mon cv</div>

 
    </div>
    </div>
      

  )
}
export default Hero