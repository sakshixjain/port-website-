import React from 'react'

function Home() {
  return (
    <div className='homebody'>
    <div className='wrapper'>
        <div className="static-txt">I'm </div>
        <div>
            <ul className="dynamic-txt">
                <li><span>Sakshi Jain</span></li>
                <li><span>Full Stack Developer</span></li>
            </ul >
                    <p className='text-lg -ml-48 mt-8' style={{textShadow: '2px 2px 5px orange'}}>A Full Stack Developer with a degree from Maharshi Dayanand University, <br /> Rohtak. With a passion for clean  code and problem-solving,  I thrive in crafting <br />  seamless user experiences  and efficient backend solutions.</p>   
                    <div className='flex -ml-32'>
                    <div className='icon-div'> 
                   <a href="https://github.com/sakshixjain"><i className="fa-brands fa-github"></i></a> 
                    <span>Github</span>
                    </div>
                    <div className='icon-div'>
                    <i className="fa-brands fa-linkedin"></i>
                    <span>Linked-in</span>
                    </div>
                    <div className='icon-div'>
                    <a href="https://leetcode.com/u/sakshijain36/"><i className="fa-solid fa-link"></i></a>
                    <span>Leetcode</span>
                    </div>  
                    </div>
 </div>
              <img className='w-64 h-72 rounded-lg' src="/src/pexels-fathi-vee-1020478.jpg" alt="" style={{filter: 'drop-shadow(5px 5px 5px wheat)'}} />
</div>
  
    
    </div>
  )
}

export default Home
