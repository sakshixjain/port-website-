import React from 'react'
import './info.css'


function Project() {
  return (
    <>
        <div>
            <h1 className='text-center justify-center mt-20 text-4xl h1pro'>My Projects</h1>
        </div>
      <div className='flex image-gallery-container'>
  <div className='image-gallery'>
  <div className="image-item h-[430px]" >
            <figure><img src="/src/ecommerce.png" alt="Cinque Terre" className="image-scroll" /></figure>
            <div className="caption">
              <p>E-commerce Website</p>
             </div>  
              <p className='text-wrap p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis deserunt nam ea velit repellendus sequi dolorem fugit accusa aperiam?</p>
              <a href="https://github.com/sakshixjain"> <button className='skill-btn mt-3'>More info</button></a>
          </div>
<div className="image-item h-[450px]" >
            <figure><img src="/src/alarm-clock.png" alt="Cinque Terre" className="image-scroll" /></figure>
            <div className="caption">
              <p>Alarm Clock</p>
             </div>  
              <p className='text-wrap p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis deserunt nam ea velit repellendus sequi dolorem fugit accusa aperiam?</p>
              <a href="https://github.com/sakshixjain"> <button className='skill-btn mt-3'>More info</button></a>
          </div>
          <div className="image-item h-[440px]" >
           <figure> <img src="/src/todo-list.png" alt="Cinque Terre" className="image-scroll" /></figure>
            <div className="caption">
              <p>Responsive Todo App</p>
             </div> 
              <p className='text-wrap p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis deserunt nam ea velit repellendus sequi dolorem fugit accusa aperiam?</p>
              <a href="https://github.com/sakshixjain"> <button className='skill-btn '>More info</button></a>
          </div>
          <div className="image-item h-[440px]" >
            <figure><img src="/src/login-form.png" alt="Cinque Terre" className="image-scroll" /></figure>
            <div className="caption">
              <p>Login Form</p>
            </div>  
              <p className='text-wrap p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis deserunt nam ea velit repellendus sequi dolorem fugit accusa aperiam?</p>
              <a href="https://github.com/sakshixjain"> <button className='skill-btn'>More info</button></a>
          </div>
          <div className="image-item h-[422px]" >
           <figure> <img src="/src/chat-app.png" alt="Cinque Terre" className="image-scroll " /></figure>
            <div className="caption">
              <p>Chat Application</p>
             </div>  
              <p className='text-wrap p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis deserunt nam ea velit repellendus sequi dolorem fugit accusa aperiam?</p>
              <a href="https://github.com/sakshixjain"> <button className='skill-btn'>More info</button></a>
          
          </div>
          <div className="image-item h-[480px]" >
           <figure> <img src="/src/calculator.png" alt="Cinque Terre" className="image-scroll" /></figure>
            <div className="caption">
              <p>Tip Calculator App</p>
                </div>
                <p className='text-wrap p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis deserunt nam ea velit repellendus sequi dolorem fugit accusa aperiam?</p>
              <a href="https://github.com/sakshixjain"> <button className='skill-btn'>More info</button></a>
          
          </div>
          </div>
          </div>
    </>
  )
}

export default Project
