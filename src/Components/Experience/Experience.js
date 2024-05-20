import React from 'react'

const Experience = () => {
  return (
    <div className='container'>
    <div className='experiencecontainer'>
        <div className='experienceleftcontainer'>
            <img src='https://www.hiveart.xyz/perez/assets/images/about/about1.png' alt='profilepic'></img>
            <div className='experienceleftchildren2'>
                <span>12+</span>
                <span>Years Of <br></br>Experience</span>
            </div>
        </div>

        <div className='experiencerightcontainer'>
            <span>Hello I'm</span>
            <h3>Mark Henry,<span></span><br></br>Product Designer</h3>
            <h4>Based in German</h4>
            <p>That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them .</p>
            <ul className='experiencelistitems'>
                <li>
                    <span>08</span>
                    <p>Award Winner</p>
                </li>
                <li>
                    <span>1.2K</span>
                    <p>World wide Client</p>
                </li>
                <li>
                    <span>3.5K</span>
                    <p>Jobs Done Successfully</p>
                </li>
            </ul>
            <div className='experienceresume'>
                <a href='contact.html'> Download My Resume
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    </div>
</div>

  )
}

export default Experience