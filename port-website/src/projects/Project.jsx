import React from 'react'
import './info.css'


function Project() {
  return (
    <>
            <h1 className='text-center justify-center mt-20 text-4xl h1pro'>My Projects</h1>
        
      <div className='image-gallery-container'>
  <div className='image-gallery'>
  <div className="image-item h-[430px]" >
            <figure><img src="/src/ecommerce.png" alt="Cinque Terre" className="image-scroll" /></figure>
              <p className='caption'>E-commerce Website</p>
              <p className='text-wrap p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis deserunt nam ea velit repellendus sequi dolorem fugit accusa aperiam?</p>
              <a href="https://github.com/sakshixjain"> <button className='skill-btn mt-3'>More info</button></a>
          </div>
<div className="image-item h-[450px]" >
            <figure><img src="/src/alarm-clock.png" alt="Cinque Terre" className="image-scroll" /></figure>
            
              <p className="caption">Alarm Clock</p>
             
              <p className='text-wrap p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis deserunt nam ea velit repellendus sequi dolorem fugit accusa aperiam?</p>
              <a href="https://github.com/sakshixjain"> <button className='skill-btn mt-3'>More info</button></a>
          </div>
          <div className="image-item h-[440px]" >
           <figure> <img src="/src/todo-list.png" alt="Cinque Terre" className="image-scroll" /></figure>
              <p className="caption">Responsive Todo App</p>
            
              <p className='text-wrap p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis deserunt nam ea velit repellendus sequi dolorem fugit accusa aperiam?</p>
              <a href="https://github.com/sakshixjain"> <button className='skill-btn '>More info</button></a>
          </div>
          <div className="image-item h-[440px]" >
            <figure><img src="/src/login-form.png" alt="Cinque Terre" className="image-scroll" /></figure>
            
              <p className="caption" >Login Form</p>
            
              <p className='text-wrap p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis deserunt nam ea velit repellendus sequi dolorem fugit accusa aperiam?</p>
              <a href="https://github.com/sakshixjain"> <button className='skill-btn'>More info</button></a>
          </div>
          <div className="image-item h-[422px]" >
           <figure> <img src="/src/chat-app.png" alt="Cinque Terre" className="image-scroll " /></figure>
            
              <p  className="caption">Chat Application</p>
             
              <p className='text-wrap p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis deserunt nam ea velit repellendus sequi dolorem fugit accusa aperiam?</p>
              <a href="https://github.com/sakshixjain"> <button className='skill-btn'>More info</button></a>
          
          </div>
          <div className="image-item h-[480px]" >
           <figure> <img src="/src/calculator.png" alt="Cinque Terre" className="image-scroll" /></figure>
          
              <p className="caption">Tip Calculator App</p>
              
                <p className='text-wrap p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis deserunt nam ea velit repellendus sequi dolorem fugit accusa aperiam?</p>
              <a href="https://github.com/sakshixjain"> <button className='skill-btn'>More info</button></a>
          
          </div>
          </div>
          </div>
    </>
  )
}

export default Project
