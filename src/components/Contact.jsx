import React from 'react'

const Contact=()=> {

//     let number1= document.getElementById("number1");
//     let number2= document.getElementById("number2");
//     let number3= document.getElementById("number3");
//     let number4= document.getElementById("number4");

//     let counter1= 0,counter2=0,counter3=0, counter4=0;
//     setInterval(()=>{
//         if(counter1 ==80){
//             clearInterval();
//         }
//         else{
//             counter1 += 1;
//         number1.innerHTML = counter1+ "%";    
//         }
    
//     },40);
//     setInterval(()=>{
//       if(counter2 ==77){
//           clearInterval();
//       }
//       else{
//           counter2 += 1;
//       number2.innerHTML = counter2+ "%";    
//       }

//   },39);
//   setInterval(()=>{
//     if(counter3 ==71){
//         clearInterval();
//     }
//     else{
//         counter3 += 1;
//     number3.innerHTML = counter3+ "%";    
//     }

// },39);
// setInterval(()=>{
//   if(counter4 ==50){
//       clearInterval();
//   }
//   else{
//       counter4 += 1;
//   number4.innerHTML = counter4+ "%";    
//   }

// },39);

  return (

<div id="contact" className="my-6 ">
<h1 className='text-center justify-center mt-16 mb-16 text-5xl h1pro'>Contact me</h1>
    
    <div className='flex '>
            <div className=" sm:grid-cols-2 items-center gap-16 p-8 ml-20 max-w-xl bg-[#06060f] shadow-[0_2px_10px_-3px_rgba(231,231,231,0.9)] rounded-3xl text-[#fffce7] font-[sans-serif]">
                <div>
                    <h1 className="text-3xl font-extrabold">Let's Talk</h1>
                    <p className="text-sm text-gray-200 mt-3">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>
                            
                <form className="ml-auo space-y-4">
                    <div className='flex mt-4'>
                    <input type='text' placeholder='First Name'
                        className="w-full rounded-md py-2.5 px-4 border text-sm bg-[#06060f]" />
                        <input type='text' placeholder='Last Name'
                        className="w-full ml-2 rounded-md py-2.5 px-4 border text-sm bg-[#06060f]" />
                        </div>
                    <input type='email' placeholder='Email'
                        className="w-full rounded-md py-2.5 px-4 border text-sm bg-[#06060f]" />
                    <input type='text' placeholder='Subject'
                        className="w-full rounded-md py-2.5 px-4 border text-sm bg-[#06060f] " />
                    <textarea placeholder='Message' rows="6"
                        className="w-full rounded-md px-4 border text-sm pt-2.5  bg-[#06060f] "></textarea>
                    <button type='button'
                        className="text-black bg-[#f35187] hover:bg-orange-100 font-semibold rounded-md text-sm px-4 py-3 ml-28 w-60">Send</button>
                </form>
            </div>
            </div>
 
            <div className=" sm:grid-cols-1 items-center gap-16 p-8 ml-20 max-w-xl w-full bg-[#06060f] shadow-[0_2px_10px_-3px_rgba(231,231,231,0.9)] rounded-3xl text-[#fffce7] font-[sans-serif]">
            <h1 className="text-3xl text-center font-extrabold">My Skills</h1> 
            <div className='flex flex-wrap justify-center'>
 
   <div className="skill">
    <div className="outer">
        <div className="inner">
            <div id="number1">
                
            </div>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#e2ebea" />
            </linearGradient>
         </defs>
         <circle className='circle1' cx="80" cy="80" r="70" strokeLinecap="round" />
 </svg>
<h1 className='text-center text-xl mt-3'>Frontend</h1>
   </div>
   <div className="skill">
    <div className="outer">
        <div className="inner">
            <div id="number2">
                
            </div>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#e2ebea" />
            </linearGradient>
         </defs>
         <circle className='circle2' cx="80" cy="80" r="70" strokeLinecap="round" />
 </svg>
 <h1 className='text-center text-xl mt-3'>DSA</h1>

   </div>
   <div className="skill">
    <div className="outer">
        <div className="inner">
            <div id="number3">
                
            </div>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#e2ebea" />
            </linearGradient>
         </defs>
         <circle className='circle3' cx="80" cy="80" r="70" strokeLinecap="round" />
 </svg>
 <h1 className='text-center text-xl mt-3'>Backend</h1>
   </div>
   <div className="skill">
    <div className="outer">
        <div className="inner">
            <div id="number4">
                
            </div>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#e2ebea" />
            </linearGradient>
         </defs>
         <circle className='circle4' cx="80" cy="80" r="70" strokeLinecap="round" />
 </svg>
<h1 className='text-center text-xl mt-3'>UI/UX</h1>
   </div>
  </div>
  </div>
</div>
        </div>
    
  )
}

export default Contact
