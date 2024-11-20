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
import './portfolio.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

import { Link } from 'react-router-dom';

const Portfolio = () => {




  return (
    

<div id='Portfolio' className='mywork'>
    <div className='mywork-title'>
    <h1> mon portfolio</h1>
    
    <img src={theme_pattern} alt=''  />  
    </div>
    
<div className=' mywork-container'>
{mywork_data.map((work,index)=>{
    return (
      
      <Link key={index} to={work.path}>  {/* Utilisation de work.path */}
        <img src={work.w_img} alt={work.w_name} />
      </Link>
      
    )
    
          

})}

</div>



<div className='seemoremywork '>
<p>  plus de travaille  </p>


<img src={arrow_icon} alt=''   />




</div>





    </div>

    

   
    
  
    
    
  )
}

export default Portfolio