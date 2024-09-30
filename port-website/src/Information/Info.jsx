import React from 'react'


function Info() {
  return (
    <>
            <h1 className='text-center justify-center mb-20 mt-28 text-4xl h1pro'>About me</h1>
<div className='justify-center items-center flex'>
<a href="#" className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-[#06060f] dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/src/image-4.jpg" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
</div>


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

    </>
  )
}

export default Info
