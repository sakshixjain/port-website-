import React from 'react'
import { useEffect,useState,useRef } from 'react';

const Contact=()=> {
    useEffect(() => {
        const h1 = document.querySelectorAll('.h1pro');
        const response1= document.querySelectorAll('.response1');
        const response2= document.querySelectorAll('.response2');
       const number1= document.querySelectorAll(".number1");
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
    
        h1.forEach((section) => {
          observer.observe(section);
        });
        response1.forEach((section) => {
          observer.observe(section);
        });
        response2.forEach((section) => {
          observer.observe(section);
        });
        number1.forEach((section) => {
          observer.observe(section);
        });
        
     
        return () => {
          h1.forEach((section) => {
            observer.unobserve(section);
          });
          response1.forEach((section) => {
            observer.unobserve(section);
          });
         response2.forEach((section) => {
            observer.unobserve(section);
          });
          number1.forEach((section) => {
            observer.unobserve(section);
          });
          
       
        };
      }, []);


  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const counterSectionRef = useRef(null);

  const startCounting = () => {
    const interval1 = setInterval(() => {
      setCounter1((prev) => {
        if (prev === 80) {
          clearInterval(interval1);
          return prev;
        }
        return prev + 1;
      });
    }, 26);

    const interval2 = setInterval(() => {
      setCounter2((prev) => {
        if (prev === 77) {
          clearInterval(interval2);
          return prev;
        }
        return prev + 1;
      });
    }, 25);

    const interval3 = setInterval(() => {
      setCounter3((prev) => {
        if (prev === 71) {
          clearInterval(interval3);
          return prev;
        }
        return prev + 1;
      });
    }, 30);

    const interval4 = setInterval(() => {
      setCounter4((prev) => {
        if (prev === 50) {
          clearInterval(interval4);
          return prev;
        }
        return prev + 1;
      });
    }, 33);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true); 
          startCounting();
          observer.disconnect(); // Stop observing after counting starts
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }

    return () => {
      if (observer && counterSectionRef.current) {
        observer.unobserve(counterSectionRef.current);
      }
    };
  }, []);


  return (

<div id="contact" className="my-6 ">
<h1 className='text-center justify-center mt-16 mb-16 text-5xl h1pro'>Contact me</h1>
    
    <div className='flex contact-response mb-12'>
            <div className="response1 animationn5 border-x-2 border-x-pink-400 rounded-lg sm:grid-cols-2 items-center gap-16 p-8 ml-28 max-w-xl  bg-[#06060f] shadow-[0_2px_10px_-3px_rgba(50,50,50,0.9)] text-[#fffce7] font-[sans-serif]">
                <div className='contact-1'>
                    <h1 className="text-3xl font-extrabold">Let's Talk</h1>
                    <p className="text-base text-gray-400 mt-3 mb-12"> I'd love to hear about your project and provide help.</p>
                            
                <form className="ml-auo space-y-4">
                    <div className='name flex mt-4'>
                    <input type='text' placeholder='First Name'
                        className="w-full rounded-md py-3 px-4 border text-sm bg-[#06060f]" />
                        <input type='text' placeholder='Last Name'
                        className="w-full ml-2 rounded-md py-2.5 px-4 border text-sm bg-[#06060f]" />
                        </div>
                    <input type='email' placeholder='Email'
                        className="w-full rounded-md py-3 px-4 border text-sm bg-[#06060f]" />
                    <input type='text' placeholder='Subject'
                        className="w-full rounded-md py-3 px-4 border text-sm bg-[#06060f] " />
                    <input placeholder='Message' rows="6"
                        className="w-full rounded-md px-4 py-48 border text-sm pt-2.5  bg-[#06060f] "></input>
                    <button type='button'
                        className="text-black bg-[#f35187] hover:bg-orange-100 font-semibold rounded-md text-sm px-4 py-3  w-full">Send</button>
                </form>
            </div>
            </div>
 
            <div className=" response2 animationn4 sm:grid-cols-1 border-x-2 rounded-lg border-x-pink-400 gap-16 p-8 ml-8 max-w-2xl bg-[#06060f] shadow-[0_2px_10px_-3px_rgba(50,50,50,0.9)] text-[#fffce7] font-[sans-serif]">
            <h1 className="text-3xl text-center font-extrabold">My Skills</h1> 
            <p className="text-lg text-gray-400 mt-3 text-center"> Let me help you</p>
            <div className='flex flex-wrap justify-evenly' ref={counterSectionRef}>
 
   <div className="skill">
    <div className="outer">
        <div className="inner">
            <div id="number1">
            {counter1}
            </div>
            %
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#e2ebea" />
            </linearGradient>
         </defs>
         <circle  className={isInView ? "circle1" : ""}  cx="100" cy="100" r="90" strokeLinecap="round"  />
 </svg>
<h1 className='text-center text-xl mt-3'>Frontend</h1>
   </div>
   <div className="skill">
    <div className="outer">
        <div className="inner">
            <div id="number2">
            {counter2}
            </div>
            %
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#e2ebea" />
            </linearGradient>
         </defs>
         <circle className={isInView ? "circle2" : ""}  cx="100" cy="100" r="90" strokeLinecap="round" />
 </svg>
 <h1 className='text-center text-xl mt-3'>DSA</h1>

   </div>
   <div className="skill">
    <div className="outer">
        <div className="inner">
            <div id="number3">
            {counter3}
            </div>
            %
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#e2ebea" />
            </linearGradient>
         </defs>
         <circle className={isInView ? "circle3" : ""}  cx="100" cy="100" r="90" strokeLinecap="round" />
 </svg>
 <h1 className='text-center text-xl mt-3'>Backend</h1>
   </div>
   <div className="skill">
    <div className="outer">
        <div className="inner">
            <div id="number4">
            {counter4}
            </div>
            %
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#e2ebea" />
            </linearGradient>
         </defs>
         <circle className={isInView ? "circle4" : ""}  cx="100" cy="100" r="90" strokeLinecap="round" />
 </svg>
<h1 className='text-center text-xl mt-3'>UI/UX</h1>
   </div>
  </div>
  </div>
</div>

<hr />
<footer className='flex p-1.5 mt-4 text-lg justify-between ml-16 mr-16'>
<p>All Rights Reserved &copy; 2024</p>
<p>Terms & condition</p>
<p>Privacy Policy</p>

</footer>
        </div>
    
  )
}

export default Contact
