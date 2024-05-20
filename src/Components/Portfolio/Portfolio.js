const Portfolio = () => {
    return (
      <div className='portfoliosectioncontainer'>
        <div className='portfoliocontainer'>
          <div className='portfoliotitle'>
            <span>Portfolio</span>
            <h3>My Recent Work</h3>
          </div>
        <div className='portfoliogridcontainer'>
          <div className='portfolioleftgrid'>
            <div className='portfolioimagegrid'>
              <img src='https://www.hiveart.xyz/perez/assets/images/projects/project1.png' alt='portfoliogridimage'></img>
            </div>
            <div className='portfolioappgrid'>
              <div>
                <a href="contact.html">App</a>
                <a href="contact.html">Development</a>
              </div>
              <div>
                <h3>Basinik Finance App</h3>
                <a href="contact.html">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z" fill="currentColor" fill-opacity="0.9"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z" fill="currentColor" fill-opacity="0.9"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className='portfoliorightgrid'>
            <div className='portfolioimagegrid'>
              <img src='https://www.hiveart.xyz/perez/assets/images/projects/project2.png' alt="portfolioimage"></img>
            </div>
            <div className='portfolioappgrid'>
              <div>
                <a href="contact.html">App</a>
                <a href="contact.html">Development</a>
              </div>
              <div>
                <h3>Oxilex Dashboard Design</h3>
                <a href="contact.html">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z" fill="currentColor" fill-opacity="0.9"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z" fill="currentColor" fill-opacity="0.9"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='portfolioproject'>
          <span>View All Project</span>
          <a href="contact.html">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>    
          </a>
        </div>
       </div>
      </div>
    )
  }

  export default Portfolio
  