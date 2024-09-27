import React from 'react'

function Home() {
  return (
    <>
    <div className='wrapper'>
        <div className="static-txt">I'm </div>
        <div>
            <ul className="dynamic-txt">
                <li><span>Sakshi Jain</span></li>
                <li><span>Full Stack Developer</span></li>
            </ul >
                    <p className='text-lg -ml-64 mt-8' style={{textShadow: '2px 2px 5px orange'}}>I'm Sakshi Jain, a Full Stack Developer with a degree from Maharshi Dayanand <br /> University, Rohtak. With a passion for clean  code and problem-solving,  I thrive in <br /> crafting seamless user experiences  and efficient backend solutions.</p>   
                    <div className='flex -ml-64'>
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
                    <div className='icon-div'>
                    <a href="https://www.geeksforgeeks.org/user/sakshijain36/"><i className="fa-solid fa-link"></i></a>
                    <span>G-For-G</span>
                    </div> 
                       <button><i className="fa-solid fa-down-long custom-ic"></i></button>

                    </div>
 </div>
              <img className='w-64 h-72 rounded-xl' src="/src/pexels-fathi-vee-1020478.jpg" alt="" />
</div>
  
    
    </>
  )
}

export default Home
