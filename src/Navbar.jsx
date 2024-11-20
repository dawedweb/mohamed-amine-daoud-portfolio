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

// import React, { useRef, useState } from 'react'
// import './Navbar.css'
// import logo from '../../assets/logo.avif'
// import underline from '../../assets/nav_underline.svg'
//  import AnchorLink from 'react-anchor-link-smooth-scroll'
// import menu_open from '../../assets/menu_open.svg'
// import menu_close from '../../assets/menu_close.svg'


// import { Link } from 'react-router-dom'



// const Navbar = () => {
//   const[menu,setMenu] = useState('homme');
//   const menuRef = useRef();
//   const openMenu = ()=>{
//     menuRef.current.style.right="0";
//   }

//   const closeMenu = ()=>{
//     menuRef.current.style.right="-350px";
//   }

  
//   return (
//     <div className='navbar'>
//     <h1>
//     <a href="homme"
//     className="logo ">
//         <img src={logo}
//         width={80}
//         height={80}
        
//          alt="amine daoud"/>
//     </a>
// </h1>
// <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open' />
// <ul ref={menuRef} className='nav-menu'>
// <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close'/>
//       <li><AnchorLink className='anchor-link'  href='#homme'><p onClick={()=>setMenu("homme")}>  Accueil</p></AnchorLink>{menu==="homme"?<img src={underline} alt=''/>:<></>}</li>
//     <li><AnchorLink className='anchor-link'  offset={50} href='#propos'><p onClick={()=>setMenu("propos")}>à propos</p></AnchorLink>{menu==="propos"?<img src={underline} alt=''/>:<></>} </li>
//     <li><AnchorLink className='anchor-link'  offset={50} href='#Services'><p onClick={()=>setMenu("Services")}>Services</p></AnchorLink>{menu==="Services"?<img src={underline} alt=''/>:<></>}</li>
//     <li><AnchorLink className='anchor-link'  offset={50} href='#Portfolio'><p onClick={()=>setMenu("Portfolio")}>Portfolio</p></AnchorLink>{menu==="Portfolio"?<img src={underline} alt=''/>:<></>} </li>
    
   
//     <li>  <AnchorLink className='anchor-link'  offset={50} href='#Contact'><p onClick={()=>setMenu("Contact")}>Contact</p></AnchorLink>{menu==="Contact"?<img src={underline} alt=''/>:<></>} </li>  





//  </ul>
//     <div className='nav-connect'><AnchorLink className='anchor-link'  href='/contact'> Contacter moi</AnchorLink></div>
//     </div>
//   )
// }

// export default Navbar



import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.avif';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState('homme');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className='navbar'>
      <h1>
        <Link to="/" className="logcomment o">
          <img src={logo} width={80} height={80} alt="amine daoud" />
        </Link>
      </h1>
      <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open' />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close' />
        <li>
          <Link to="/" className='anchor-link'>
            <p onClick={() => setMenu("homme")}>Accueil</p>
          </Link>
          {menu === "homme" ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <Link to="/About" className='anchor-link'>
            <p onClick={() => setMenu("propos")}>À propos</p>
          </Link>
          {menu === "propos" ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <Link to="/Services" className='anchor-link'>
            <p onClick={() => setMenu("Services")}>Services</p>
          </Link>
          {menu === "Services" ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <Link to="/Portfolio" className='anchor-link'>
            <p onClick={() => setMenu("Portfolio")}>Portfolio</p>
          </Link>
          {menu === "Portfolio" ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <Link to="/Contact" className='anchor-link'>
            <p onClick={() => setMenu("Contact")}>Contact</p>
          </Link>
          {menu === "Contact" ? <img src={underline} alt='' /> : <></>}
        </li>
      </ul>
      <div className='nav-connect'>
        <Link to="/contact" className='anchor-link'>Contacter moi</Link>
      </div>
    </div>
  );
};

export default Navbar;
