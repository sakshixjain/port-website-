import React from 'react'

function Header() {
  return (
    <>
    <div className='headerbody'>
      <div className='mt-8 z-20 '>
        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
        </nav>
      </div>
    </div>
        <div className='wrapper'>
        <div className="static-txt">I'm </div>
        <div>
            <ul className="dynamic-txt">
                <li><span>Sakshi Jain</span></li>
                <li><span>Full Stack Developer</span></li>
            </ul >
                    <p className='text-xl -ml-56 mt-1' style={{textShadow: '1px 1px 8px wheat'}}>I'm Sakshi Jain, a Full Stack Developer with a degree from Maharshi <br /> Dayanand University,(MDU) Rohtak. With a passion for clean  code <br /> and problem-solving,  I thrive in crafting seamless user experiences <br /> and efficient backend solutions.</p>   
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

                    </div>
 </div>
              <img className='w-64 h-64 mr-28 rounded-full' src="pexels-fathi-vee-1020478.jpg" alt="" />
</div>/
    </>
  )
}

export default Header
