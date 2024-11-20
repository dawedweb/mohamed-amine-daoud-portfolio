import React from 'react'
import './portfolio.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/coffe_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { Link } from 'react-router-dom';

const Coffe = () => {
  return (

    <div id='Portfolio' className='mywork'>
        <div className='mywork-title'>
        <h1> Coffe Shop</h1>
        
        <img src={theme_pattern} alt=''  />  
        </div>
        
    <div className=' mywork-container'>
    {mywork_data.map((work,index)=>{
        return (
          
           
            <img src={work.w_img} key={index} alt={work.w_name} />
         
          
        )
        
              
    
    })}




    
    </div>
    
    
    <div className='seemoremywork '>

    <p> voir un autre projet  </p>
    <Link to='/portfolio'  >  {/* Utilisation de work.path */}
   
    

<img src={arrow_icon} alt=''   />
      </Link>
      




</div>
  
    
    
    
    
    
        </div>
    
        
    
       
        
      
    
        
  )
}

export default Coffe
