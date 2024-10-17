import React from 'react'
import '../components/project.css'

function Project () {

  return (
    <>
            <h1 id="project" className='text-center justify-center mt-28 mb-16 text-5xl h1pro'>My Projects</h1>
            <h1 className='text-center justify-center mt-4 mb-12 text-white text-3xl h2pro animationn5' ><span className='dot'></span> My Latest work</h1>
      <div className='image-gallery-container '>
  <div className='image-gallery'>
  <div className="image-item h-[450px]" >
           <figure> <img src="todo-list.png" alt="Cinque Terre" className="image-scroll" /></figure>
              <p className="caption text-[#f54982]">Responsive Todo App</p>
            
              <p className='text-wrap p-3 text-gray-400'>A responsive todo app Built with React's component-based architecture, the app features an intuitive interface where users can add, edit, delete, and mark tasks as completed.</p>
              <a href="https://github.com/sakshixjain"> <button className='skill-btn '>More info</button></a>
          </div>
          <div className="image-item h-[500px]" >
            <figure><img src="login-form.png" alt="Cinque Terre" className="image-scroll" /></figure>
            
              <p className="caption text-[#f54982]" >Login Form</p>
            
              <p className='text-wrap p-3 text-gray-400'>
              A login form with theme mode allows users to switch between light and dark themes while providing a user-friendly authentication interface. Built with HTML, CSS, and Vanilla JavaScript, the form includes input fields for a username and password, along with a login button. </p>
              <a href="https://github.com/sakshixjain"> <button className='skill-btn'>More info</button></a>
          </div>
          <div className="image-item h-[490px]" >
           <figure> <img src="Screenshot 2024-10-16 145727.png" alt="Cinque Terre" className="image-scroll " /></figure>
            
              <p  className="caption text-[#f54982]">Chat Application</p>
             
              <p className='text-wrap p-3 text-gray-400'>A real-time chat application enables users to send and receive messages instantly. It typically uses <b>MERN</b> Stack for maintaining a continuous connection between the client and server, ensuring messages are delivered without the need for frequent page refreshes.</p>
              <a href="https://github.com/sakshixjain"> <button className='skill-btn'>More info</button></a>
          
          </div>
          <div className="image-item h-[465px]" >
           <figure> <img src="calculator.png" alt="Cinque Terre" className="image-scroll" /></figure>
          
              <p className="caption text-[#f54982]">Digital Calculator App</p>
              
                <p className='text-wrap p-3 text-gray-400'>A digital calculator built with HTML, CSS, and Vanilla JavaScript allows users to perform basic arithmetic operations.</p>
              <a href="https://github.com/sakshixjain"> <button className='skill-btn'>More info</button></a>
          
          </div>
          <div className="image-item h-[490px]" >
            <figure><img src="ecommerce.png" alt="Cinque Terre" className="image-scroll" /></figure>
            
              <p className='caption text-[#f54982]'>E-commerce Website</p>
              <p className='text-wrap p-3 text-gray-400'>An e-commerce website for purchasing food allows users to browse a variety of food items, including fresh produce, packaged goods, and Gifts. It features categories  filters to sort items by price, cuisine,Recipes of an item.</p>
              <a href="https://github.com/sakshixjain"> <button className='skill-btn mt-2'>More info</button></a>
          </div>
<div className="image-item h-[520px]" >
            <figure><img src="alarm-clock.png" alt="Cinque Terre" className="image-scroll" /></figure>
            
              <p className="caption text-[#f54982]">Alarm Clock</p>
             
              <p className='text-wrap p-3 text-gray-400'>An alarm clock built with HTML, CSS, and Vanilla JavaScript allows users to set specific times for alerts directly in their web browser. JavaScript handles the logic, comparing the current time with the set time and triggering a sound when they match</p>
              <a href="https://github.com/sakshixjain"> <button className='skill-btn mt-2'>More info</button></a>
          </div>
          <div className="image-item h-[450px]" >
           <figure> <img src="todo-list.png" alt="Cinque Terre" className="image-scroll" /></figure>
              <p className="caption text-[#f54982]">Responsive Todo App</p>
            
              <p className='text-wrap p-3 text-gray-400'>A responsive todo app Built with React's component-based architecture, the app features an intuitive interface where users can add, edit, delete, and mark tasks as completed.</p>
              <a href="https://github.com/sakshixjain"> <button className='skill-btn '>More info</button></a>
          </div>
  
          </div>
          </div>
    </>
  )
}

export default Project
