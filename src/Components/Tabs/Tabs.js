import React from 'react'

const Tabs = () => {
  return (
    <div className='tabsectioncontainer'>

        <div className='tabscontainer'> 
           <div className='tabsgridcontainer'>

             <div className='tabsleftcontainer'>
                <div className='tabslefttopcontainer'>
                    <span>Resume</span>
                    <h3><span>Al</span>l Over My <br></br>Details <br></br>Here...</h3>
                </div>

                <div className='tableleftbottomcontainer'>
                    <button>About me
                      <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </span>
                    </button>
                    <button>Experience
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </span>
                    </button>
                    <button>Education
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </span>
                    </button>
                    <button>Skills
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </span>
                    </button>
                    <button>Awards
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </span>
                    </button>
                </div>

             </div>


             <div className='tabsrightcontainer'>
                <h4>Based In German</h4>
                <p>Mark Henry, Product Designer, based in German. That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for,</p>
                <p>but words that truly land with those that read them, calling your audience in and making them</p>
                <div>
                <ul className='tabsdetailsitems'>
                  <li>
                    <span>Name</span>
                    <span>Mark Henry</span>
                  </li>
                  <li>
                    <span>Nationality</span>
                    <span>German</span>
                  </li>
                  <li>
                    <span>phone</span>
                    <span>870174302</span>
                  </li>
                  <li>
                    <span>Email</span>
                    <span>hello@henry.com</span>
                  </li>
                  <li>
                    <span>Experience</span>
                    <span>12+ years</span>
                  </li>
                  <li>
                    <span>Freelance</span>
                    <span>Available</span>
                  </li>
                  <li>
                    <span>Skype</span>
                    <span>henry.halk23</span>
                  </li>
                  <li>
                    <span>Language</span>
                    <span>German,English</span>
                  </li>
                </ul>
                </div>
             </div>

           </div>

            
         </div>          
    </div>

  )
}

export default Tabs