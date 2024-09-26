import React from 'react'
import './info.css'

function Info() {
  return (
    <>
    <div className='flex m-20 justify-evenly  '>
      <div className="card">
  <div className="card-details">
     <i className="fa-solid fa-laptop text-center text-3xl custom-icon"></i> 
    <p className="text-title">Frontend Development</p>
    <p className="text-body">Just like this portfolio website, I can make customised web apps and websites according to user's convinience and demands in variety of tech stacks!</p>
  </div>
 <a href="https://github.com/sakshixjain"> <button className="card-button">More info</button></a>
</div>
<div className="card">
  <div className="card-details">
  <i className="fa-solid fa-gear text-3xl text-center custom-icon"></i>
    <p className="text-title">Backend Development</p>
    <p className="text-body">Making backend from scratch, connecting with database or fixing bugs, you name it and I can do it, just give me the command and I'll try my best to give you a satisfied service!!</p>
  </div>
  <a href="https://github.com/sakshixjain"> <button className="card-button">More info</button></a>
</div>
<div className="card">
  <div className="card-details">
  <i className="fa-solid fa-code text-3xl text-center custom-icon"></i>
    <p className="text-title">Problem Solving</p>
    <p className="text-body">I have a good command over variety of concepts in Data Structures and Algorithms using which I can solve bugs or implement solutions in programming language of your choice!</p>
  </div>
 <a href="https://leetcode.com/u/sakshijain36/"> <button className="card-button">More info</button></a>
</div>
</div>
<div className='flex image-gallery-container'>
  <div className='image-gallery'>
<div className="image-item h-[450px]" >
            <figure><img src="/src/alarm-clock.png" alt="Cinque Terre" className="image-scroll" /></figure>
            <div className="caption">
              <p>Alarm Clock</p>
             </div>  
              <p className='text-wrap p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis deserunt nam ea velit repellendus sequi dolorem fugit accusa aperiam?</p>
              <a href="https://github.com/sakshixjain"> <button className='skill-btn mt-3'>More info</button></a>
          </div>
          <div className="image-item" >
           <figure> <img src="/src/todo-list.png" alt="Cinque Terre" className="image-scroll" /></figure>
            <div className="caption">
              <p>Responsive Todo App</p>
             </div> 
              <p className='text-wrap p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis deserunt nam ea velit repellendus sequi dolorem fugit accusa aperiam?</p>
              <a href="https://github.com/sakshixjain"> <button className='skill-btn '>More info</button></a>
          </div>
          <div className="image-item" >
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

export default Info
