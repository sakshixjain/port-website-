import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <>
    <div className='headerbody'>
      <div className=' z-20 top-0  fixed'>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/project">Skills</NavLink>
            <NavLink to="/project">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <button  className='border-2 border-white h-10 w-10 animate-bounce hover:animate-none hover:bg-white hover:text-black rounded-full'><i className="fa-solid fa-arrow-down"></i></button>
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
                    <p className='text-xl -ml-64 mt-2 text-gray-500'>I'm Sakshi Jain, a Full Stack Developer with a degree from Maharshi <br /> Dayanand University,(MDU) Rohtak. With a passion for clean  code <br /> and problem-solving,  I thrive in crafting seamless user experiences <br /> and efficient backend solutions.</p>   
                    <div className='flex -ml-64'>
                    <div className='icon-div'> 
                   <a href="https://github.com/sakshixjain"><i className="fa-brands fa-github "></i></a> 
                    <span>Github</span>
                    </div>
                    <div className='icon-div'>
                   <a href="#"><i className="fa-brands fa-linkedin "></i></a>
                    <span>Linkedin</span>
                    </div>
                    <div className='icon-div'>
                    <a href="https://leetcode.com/u/sakshijain36/"><i className="fa-solid fa-link "></i></a>
                    <span>Leetcode</span>
                    </div>  
                    <div className='icon-div'>
                    <a href="https://www.geeksforgeeks.org/user/sakshijain36/"><i className="fa-solid fa-link "></i></a>
                    <span>GForG</span>
                    </div> 
                    </div>
                    <div className='text-left justify-start text-xl font-semibold -ml-60 mt-3'>
                    <button className='border-2 border-white m-4 p-2 rounded-md hover:bg-white hover:text-black'><a href="">Hire me !</a></button>
                    <button  className='border-2 border-black text-black bg-white p-2 rounded-md animate-pulse'><a href="">Resume <i className="fa-solid fa-arrow-down"></i></a></button>
                    </div>
                    
 </div>
              <img className='w-80 h-80 photo-img object-cover rounded-full ' src="photo.jpg" alt="" />
</div>/
    </>
  )
}

export default Header
