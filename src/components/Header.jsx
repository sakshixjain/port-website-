import React from 'react'
import { useRef,useEffect } from 'react';
import './Skeleton.css'
function Header() {
  const elementsRef = useRef([]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
            } else {
              entry.target.classList.remove('animate'); // Optional: remove this line if you want the animation to stay once visible.
            }
          });
        },
        {
          threshold: 0.1, // Trigger when 20% of the element is in view
        }
      );
  
      elementsRef.current.forEach((element) => {
        if (element) {
          observer.observe(element);
        }
      });
      return () => {
        elementsRef.current.forEach((element) => {
          if (element) {
            observer.unobserve(element);
          }
        });
      };
    }, []);
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
            <a className= " hidden ham text-white"><span className='text-[#f54892]'>S</span>akshi </a>
        </nav>
      </div>
    </div>
          <h1 className='mt-8 -mb-16 ml-44 text-gray-300 text-3xl world slide-in-right'
        ref={(el) => elementsRef.current.push(el)}>Welcome to my World !...</h1>
        <div className='wrapper'>
         
         <div className="static-txt slide-in-up' ref={(el) => elementsRef.current.push(el)}">I'm </div>
        <div>
            <ul className="dynamic-txt slide-in-bottom-left' ref={(el) => elementsRef.current.push(el)}">
                <li><span>Sakshi Jain</span></li>
                <li><span>Full Stack Developer</span></li>
            </ul >
                    <p className='text-xl -ml-56 mt-2 text-gray-500 text-respo slide-in-down'
          ref={(el) => elementsRef.current.push(el)}>I'm Sakshi Jain, a Full Stack Developer with a degree from Maharshi <br /> Dayanand University,(MDU) Rohtak. With a passion for clean  code <br /> and problem-solving,  I thrive in crafting seamless user experiences <br /> and efficient backend solutions.</p>   
                    <div className='flex -ml-60 icon-anima slide-in-up' ref={(el) => elementsRef.current.push(el)}>
                    <div className='icon-div'> 
                   <a href="https://github.com/sakshixjain">
                   <i className="fa-brands fa-github "></i></a> 
                    <span>Github</span>
                    </div>
                    <div className='icon-div'>
                   <a href="#"><i className="fa-brands fa-linkedin "></i></a>
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
                    <div className='text-left justify-start text-xl font-semibold -ml-60 mt-12 header-btn'>
                    <button className='border-2 border-white m-4 p-3 rounded-md hover:bg-white hover:text-black'><a href="">Hire me Now !</a></button>
                    <button  className='border-2 border-black text-black bg-white p-3 rounded-md animate-pulse'><a href="">Resume &nbsp; <i className="fa-solid fa-arrow-down"></i></a></button>
                    </div>
                    
 </div>
              <div className='imgbox slide-in-bottom-right' ref={(el) => elementsRef.current.push(el)}>
                <div className="content">
                  <img src="photo.jpg"/>
                  <h2>A Younger<br /><span>Full Stack Developer</span></h2>
                  <a href="#">Hire me</a>
                </div>
              
              </div>
</div>
    </>
  )
}

export default Header




// import React, { useEffect, useRef } from 'react';
// import './skeleton.css';

// function Header() {
//   const elementsRef = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate');
//           } else {
//             entry.target.classList.remove('animate'); // Optional: remove this line if you want the animation to stay once visible.
//           }
//         });
//       },
//       {
//         threshold: 0.2, // Trigger when 20% of the element is in view
//       }
//     );

//     elementsRef.current.forEach((element) => {
//       if (element) {
//         observer.observe(element);
//       }
//     });

//     return () => {
//       elementsRef.current.forEach((element) => {
//         if (element) {
//           observer.unobserve(element);
//         }
//       });
//     };
//   }, []);

//   return (
//     <div className='headerbody'>
//       <div className='z-20 hrefp-0 fixed'>
//         <nav>
//           <div
//             className='slide-in-left'
//             ref={(el) => elementsRef.current.push(el)}
//           >
//             <a href="/">Home</a>
//             <a href="#about">About</a>
//             <a href="#skill">Skills</a>
//             <a href="#project">Projects</a>
//             <a href="#contact">Contact</a>
//           </div>
//         </nav>
//       </div>
//       <h1
//         className='mt-8 -mb-16 ml-44 text-gray-300 text-3xl world slide-in-right'
//         ref={(el) => elementsRef.current.push(el)}
//       >
//         Welcome to my World !...
//       </h1>
//       <div className='wrapper'>
//         <div className='static-txt slide-in-up' ref={(el) => elementsRef.current.push(el)}>
//           I'm
//         </div>
//         <div className='dynamic-txt slide-in-bottom-left' ref={(el) => elementsRef.current.push(el)}>
//           <ul>
//             <li><span>Sakshi Jain</span></li>
//             <li><span>Full Stack Developer</span></li>
//           </ul>
//         </div>
//         <p
//           className='text-xl -ml-56 mt-2 text-gray-500 text-respo slide-in-down'
//           ref={(el) => elementsRef.current.push(el)}
//         >
//           I'm Sakshi Jain, a Full Stack Developer with a degree from Maharshi Dayanand University (MDU) Rohtak. With a passion for clean code and problem-solving, I thrive in crafting seamless user experiences and efficient backend solutions.
//         </p>
//         <div className='flex -ml-60 icon-anima slide-in-up' ref={(el) => elementsRef.current.push(el)}>
//           <div className='icon-div'>
//             <a href="https://github.com/sakshixjain">
//               <i className="fa-brands fa-github"></i>
//             </a>
//             <span>Github</span>
//           </div>
//           <div className='icon-div'>
//             <a href="#"><i className="fa-brands fa-linkedin"></i></a>
//             <span>Linkedin</span>
//           </div>
//           <div className='icon-div'>
//             <a href="https://leetcode.com/u/sakshijain36/">
//               <i className="fa-solid fa-link"></i>
//             </a>
//             <span>Leetcode</span>
//           </div>
//         </div>
//         <div className='imgbox slide-in-bottom-right' ref={(el) => elementsRef.current.push(el)}>
//           <div className="content">
//             <img src="photo.jpg" alt="Sakshi Jain" />
//             <h2>
//               A Younger<br />
//               <span>Full Stack Developer</span>
//             </h2>
//             <a href="#">Hire me</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;
