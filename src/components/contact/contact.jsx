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
import './contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import facebook_icon from '../../assets/icons8-facebook.svg'
import instagram_icon from '../../assets/icons8-instagram.svg'
import lenkeden_icon from '../../assets/icons8-linkedin-logo.svg'
import github_icon from '../../assets/icons8-github.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "50e1b3c0-5a3e-4847-b103-956cda48ce5b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
    };





  return (
    <div id='Contact' className='contact'>
        <div className='contact-title'>
        <h1 > Contact</h1>
        <img src={theme_pattern} alt=''/>
        </div>

        <div className='contact-section'>
        <div className='contact-left'>
        <h1>contacter moi</h1>
        <p>Je suis actuellement disponible pour entreprendre de nouveaux projets, alors n'hésitez pas à m'envoyer un message sur tout ce sur quoi vous souhaitez que je travaille. Vous pouvez contacter à tout moment. </p>
        <div className='contact-details'>
        <div className='contact-detail'>
        <img src={mail_icon} alt=''/> <p>dawedamine654@gmail.com</p>

        </div>

        <div className='contact-detail'>

        <img src={call_icon} alt=''/> <p>+216 20931373</p>

        </div>

       

        <div className='contact-detail'>

        <img src={facebook_icon} alt='' /> <a href="https://www.facebook.com/amine.dawed/"> <p> Amine dawed</p></a>

        </div>
        <div className='contact-detail'>

<img src={instagram_icon} alt=''/>  <a href="https://www.instagram.com/aminedawed/" target="_blank" rel="noopener noreferrer"> <p>Amine dawed</p></a>

</div>

<div className='contact-detail'>

<img src={lenkeden_icon} alt=''/> <a href="https://www.linkedin.com/in/daoud-amine-201409232/">  <p>Amine dawed</p> </a>

</div>

<div className='contact-detail'>

<img className='github' src={github_icon} alt='github'/> <a href="https://github.com/dawedweb"><p>Amine dawed</p> </a>

</div>
        </div>

        </div>
        




<form onSubmit={onSubmit} action='' className='contact-right'>
<label htmlFor=''>nom:</label>
<input type='text' placeholder='entrer votre nom' name='name'/>
<label htmlFor=''>email:</label>
<input type='email' placeholder='entrer votre email' name='email'/>
<label htmlFor=''>ecrire votre message:</label>
<textarea name='message' rows='8' placeholder='ecrire votre message ici '></textarea>
<button type='submit' className='contact-submit' >Envoyer</button>
</form>

</div>
    </div>
  )
}

export default Contact