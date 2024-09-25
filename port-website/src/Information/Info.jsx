import React from 'react'

function Info() {
  return (
    <div className='flex m-20 justify-around '>
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
  )
}

export default Info
