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
import './services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import  servises_data from '../../assets/services_data'
import arrows_icon from '../../assets/arrow_icon.svg'
const Servises = () => {
  return (
    <div id='Services' className='servises'>
    <div className='servises-title'>
    <h1> Mes Servises</h1>
    <img src={theme_pattern} alt=''/>
    </div>

 <div className='servises-container'>

 
   {servises_data.map((servises,index)=>{
    return <div key={index} className='servises-format'>
    <h3>{servises.s_no}</h3>
    <h2>{servises.s_name}</h2>
    <p> {servises.s_desc}</p>
    {/* <div className='servises-readmore'>
        <p>Read more</p>
        <img src={arrows_icon} alt=''/>
    </div> */}

    </div>
    
   })}
</div>

    </div>
  )
}

export default Servises