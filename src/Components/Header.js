import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillAppstore } from 'react-icons/ai';


const Header = () => {
  return (
    <div className='header-container'>
       <div className='top-header'>
          <div className='content1'>
           <a href="index.html">
                <img src="https://www.hiveart.xyz/perez/assets/images/logo/logo.png" alt="logo"></img>
             </a>
          </div>
          <div className='content2'>
            <h1>Lets Talk</h1>
             <div className='icon'>
                <img className='hamburger' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' alt='hamburger-icon'></img>
             </div>
          </div>      
       </div>

       <div className='bottom-container'>
          <div className='container'>
            <div className='grid'>
                <div className='grid-content'>
                    <div>
                     <span className='blackline'></span>
                     <span>Hello, I'm 🖐️</span>
                    </div>
                    
                    <span>
                     <h1><span style={{ width: '60px', height: '60px', backgroundColor: 'sandybrown', borderRadius: '9999px' }}>M</span>ark</h1>
                     <h1>Hentry</h1>
                    </span>  
                    <p>Product Designer | Based in Germany</p>
                    <div className='mywork'>
                        <span>Let's Talk</span>
                        <span>My Work</span>
                    </div>
                    <div className='sub-content'>
                      <div className='like'>
                            <h1>1.2K +</h1>
                             <p>World Wide content</p>
                       </div>
                        <div>
                            <ul className='social-mediaicons'>
                                <li><span><AiFillAppstore /></span></li>
                                <li><span><FaLinkedin/></span></li>
                                <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.989 11.572C19.907 9.99792 19.3596 8.4836 18.416 7.221C18.1285 7.53061 17.8212 7.82123 17.496 8.091C16.4969 8.92086 15.3805 9.5982 14.183 10.101C14.35 10.451 14.503 10.79 14.638 11.11V11.113C14.665 11.174 14.688 11.231 14.732 11.342L14.749 11.382C16.262 11.212 17.858 11.275 19.405 11.485C19.611 11.512 19.805 11.541 19.989 11.572ZM10.604 4.122C11.5786 5.49516 12.4772 6.92062 13.296 8.392C14.519 7.91 15.53 7.302 16.344 6.625C16.674 6.351 16.938 6.093 17.14 5.87C15.701 4.65972 13.8803 3.99733 12 4C11.524 4 11.058 4.042 10.604 4.121V4.122ZM4.253 9.997C4.93423 9.97981 5.61464 9.93878 6.293 9.874C7.93264 9.72734 9.55828 9.4525 11.155 9.052C10.3205 7.60221 9.41956 6.19171 8.455 4.825C7.42472 5.3354 6.51626 6.06141 5.79124 6.95379C5.06623 7.84617 4.54162 8.88404 4.253 9.997ZM5.783 17.035C6.25195 16.3575 6.77894 15.7221 7.358 15.136C8.812 13.646 10.528 12.486 12.514 11.846L12.576 11.828C12.411 11.464 12.256 11.139 12.1 10.833C10.264 11.368 8.33 11.702 6.403 11.875C5.463 11.96 4.62 11.997 4 12.003C3.99815 13.8356 4.62722 15.6128 5.783 17.035ZM15.004 19.415C14.6184 17.4703 14.0725 15.5607 13.372 13.706C11.372 14.433 9.776 15.496 8.543 16.764C8.0454 17.2664 7.60382 17.8213 7.226 18.419C8.60481 19.4478 10.2797 20.0025 12 20C13.0299 20.0015 14.0504 19.8035 15.005 19.417L15.004 19.415ZM16.878 18.34C18.4393 17.1398 19.5028 15.4057 19.865 13.47C19.525 13.385 19.094 13.3 18.62 13.234C17.5661 13.0823 16.4968 13.0712 15.44 13.201C16.035 14.8799 16.5154 16.5961 16.878 18.34ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z" fill="currentColor" fill-opacity="0.9"></path>
                                            </svg>
                                        </li>
                                <li><span><FaGithub/></span></li>
                            </ul>        
                        </div>
               </div>
               </div>
               <div className='profile-pic'>
                      <img src='https://www.hiveart.xyz/perez/assets/images/hero/hero.png' alt='profile-pic'></img>
                </div>
        
          </div>
       </div>
   </div>
 </div>
  )
}

export default Header