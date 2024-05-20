import React from 'react'

const Price = () => {
  return (
    <div className='pricesectioncontainer'>
        <div className='pricecontainer'>
            <div className='priceheadercontainer'>
                <div>
                    <span>pricing</span>
                    <h3>Stay chill and pick your <span style={{width:'64px',height:'64px',backgroundColor:'sandybrown',borderRadius:'9999px'}}>pl</span>an</h3>
                </div>
                <div>
                    <a href='contact.html'>Contact For Custom Project
                     <span class="inline-block ml-3 group-hover:animate-arrow-move-up">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                    </a>
                </div>
            </div>

            <div className='pricegridcontainer'>
                <div className='pricecardcontainer'>
                    <div className='pricecardtopcontainer'>
                        <span>Basic</span>
                        <span>$48/h</span>
                    </div>
                    <div className='pricecardbottomcontainer'>
                        <div>
                            <h4>20 hrs</h4>
                            <p>10 hours per week</p>
                        </div>
                        <a>
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="transition-all" d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path class="transition-all" d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                         </svg>
                        </a>
                    </div>
                </div>
                <div className='pricecardcontainer'>
                    <div className='pricecardtopcontainer'>
                        <span>Premium</span>
                        <span>$60/h</span>
                    </div>
                    <div className='pricecardbottomcontainer'>
                        <div>
                            <h4>30 hrs</h4>
                            <p>15 hours per week</p>
                        </div>
                        <a>
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="transition-all" d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path class="transition-all" d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                         </svg>
                        </a>
                    </div>
                </div>
                <div className='pricecardcontainer'>
                    <div className='pricecardtopcontainer'>
                        <span>platinum</span>
                        <span>$60/h</span>
                    </div>
                    <div className='pricecardbottomcontainer'>
                        <div>
                            <h4>20 hrs</h4>
                            <p>80 hours per week</p>
                        </div>
                        <a>
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="transition-all" d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path class="transition-all" d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                         </svg>
                        </a>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Price