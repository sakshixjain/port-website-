import React from 'react'
function Header() {
  return (
    <>
    <div className='headerbody'>
      <div className=' z-20 hrefp-0  fixed'>
        <nav>
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#skill">Skills</a>
            <a href="#project">Projects</a>
            <a href="#contact">Contact</a>
         
        </nav>
      </div>
    </div>
        <div className='wrapper'>
          {/* <div>
          <h1>Welcome href my portfolio</h1>
          </div> */}
        <div className="static-txt">I'm </div>
        <div>
            <ul className="dynamic-txt">
                <li><span>Sakshi Jain</span></li>
                <li><span>Full Stack Developer</span></li>
            </ul >
                    <p className='text-xl -ml-56 mt-2 text-gray-500'>I'm Sakshi Jain, a Full Stack Developer with a degree from Maharshi <br /> Dayanand University,(MDU) Rohtak. With a passion for clean  code <br /> and problem-solving,  I thrive in crafting seamless user experiences <br /> and efficient backend solutions.</p>   
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
                    <div className='text-left justify-start text-xl font-semibold -ml-60 mt-9'>
                    <buthrefn className='border-2 border-white m-4 p-3 rounded-md hover:bg-white hover:text-black'><a href="">Hire me Now !</a></buthrefn>
                    <buthrefn  className='border-2 border-black text-black bg-white p-3 rounded-md animate-pulse'><a href="">Resume &nbsp; <i className="fa-solid fa-arrow-down"></i></a></buthrefn>
                    </div>
                    
 </div>
              <div className='imgbox'>
                <div className="content">
                  <img src="photo.jpg"/>
                  <h2>A Younger<br /><span>Full Stack Developer</span></h2>
                  <a href="#">Hire me</a>
                </div>
              
              </div>
</div>/
    </>
  )
}

export default Header
