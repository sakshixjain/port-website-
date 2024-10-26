
import { useEffect } from 'react';
import './skeleton.css'
function Header() {
  
    useEffect(() => {
      const world = document.querySelectorAll('.world');
      const iconAnima= document.querySelectorAll('.icon-anima');
      const image= document.querySelectorAll('.imgbox');
      const para= document.querySelectorAll('.text-respo');
      const observerOptions = {
        threshold: 0.2, // Trigger when 10% of the element is visible
      };
  
      const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      };
  
      const observer = new IntersectionObserver(observerCallback, observerOptions);
  
      world.forEach((section) => {
        observer.observe(section);
      });
      iconAnima.forEach((section) => {
        observer.observe(section);
      });
      image.forEach((section) => {
        observer.observe(section);
      });
      para.forEach((section) => {
        observer.observe(section);
      });
      return () => {
        world.forEach((section) => {
          observer.unobserve(section);
        });
        iconAnima.forEach((section) => {
          observer.unobserve(section);
        });
        image.forEach((section) => {
          observer.unobserve(section);
        });
        para.forEach((section) => {
          observer.unobserve(section);
        });
      };
    }, []);
  return (
    <>
    <div className='headerbody'>
      <header className=' z-20 top-0 fixed'>
        <nav>
        <p className= " ham mr-96 text-white text-2xl"><i className="fa-brands fa-algolia"></i> <span className='text-[#f54892] '> S</span>akshi </p>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#skill">Skills</a>
            <a href="#service">Service</a>
            <a href="#project">Projects</a>
            <a href="#contact">Contact us</a>
      
        </nav>
      </header>
    </div>
  
          <h1 className='mt-28 -mb-8 ml-44 text-gray-600 text-3xl world animationn1'
        >Welcome to my World !...</h1>
     <div className=' wrapper '>
     
        <div>
          <div className='flex dynastat'>
             <p className="static-txt ">I'm </p> 
            <ul className="dynamic-txt" >
                <li><span>Sakshi Jain</span></li>
                <li><span>Full Stack Developer</span></li>
            </ul >
            </div>
                    <p className='text-xl mt-2 text-gray-500 text-respo animationn8'
          >I'm Sakshi Jain, a Full Stack Developer with a degree from Maharshi <br /> Dayanand University,(MDU) Rohtak. With a passion for clean  code <br /> and problem-solving,  I thrive in crafting seamless user experiences . <br /> I am always eager to learn and adapt to new technologies, <br />striving to build user-centric, efficient, and high-quality web solutions.</p>   
                    <div className='flex icon-anima animationn6' >
                    <div className='icon-div'> 
                   <a href="https://github.com/sakshixjain">
                   <i className="fa-brands fa-github "></i></a> 
                    <span>Github</span>
                    </div>
                    <div className='icon-div'>
                   <a href="https://www.linkedin.com/in/sakshi-jain-a0048621b/"><i className="fa-brands fa-linkedin "></i></a>
                    <span>Linkedin</span>
                    </div>
                    <div className='icon-div'>
                    <a href="https://leetcode.com/u/sakshijain36/">
                    <i className="fa-solid fa-link "></i></a>
                    <span>Leetcode</span>
                    </div>  
                    <div className='icon-div'>
                    <a href="https://www.geeksforgeeks.org/user/sakshijain36/">
                    <i className="fa-solid fa-link "></i></a>
                    <span>GForG</span>
                    </div> 
                    </div>
                    <div className='text-left justify-start text-xl font-semibold mt-8 header-btn'>
                    <button className='border-2 border-white m-4 p-2.5 rounded-md hover:bg-white hover:text-black'><a href="https://www.linkedin.com/in/sakshi-jain-a0048621b/">Hire me Now !</a></button>
                    <button  className='border-2 border-black text-black bg-white p-2.5 rounded-md animate-pulse'><a href="cv.docx"download>Resume &nbsp; <i className="fa-solid fa-arrow-down"></i></a></button>
                    </div>
                    
 </div>
              <div className='imgbox h-[480px] w-[480px] animationn2 ' >
                <div className="content">
                  <img src="photo.jpg"/>
                  <h2>A Younger<br /><span>Full Stack Developer</span></h2>
                  <a href="https://www.linkedin.com/in/sakshi-jain-a0048621b/">Hire me</a>
                </div>
              
              </div>
</div>

    </>
  )
}

export default Header
