import React from 'react'
import '../components/info.css'
function Info() {
  return (
    <>
            <h1 className='text-center justify-center mt-20 text-4xl h1pro'>About me</h1>
             <section id="resume" className="resume">
            <div className="container" >
                <div className="row" >
<div className="col-12">
<div className="resume-wrapper" >
<div className="row  row-mobile-margin">
<div className="col-12 col-lg-2">
<div
    className="resume-topics h-100 flex-column justify-content-center position-relative">
    <h3
        className="h3 line-height-1 resume-topic-item resume-topic-one fw-500 text-white position-absolute">
        Education</h3>
</div>
</div>
<div className="col-12 col-lg-10">
{/* <!-- resume education row --> */}
<div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800"
    className="resume-education bg-[#06060f]" >
    <div className="row">
        {/* <!-- education first column --> */}
        <div className="col-lg-4 resume-first-item">
            <h4 className="h4 text-[#eebcbc] font-bold">
                B-Tech in Computer Science & Engineering
            </h4>
            <p className="p secondary-black fw-400 text-xl line-height-7 mt-10">
                Maharshi Dayananad University (2021 - 2024)
            </p>
            <p className="p secondary-black fw-400 line-height-7 mt-4 text-lg">
                <b>Software development,</b> <b>web technologies</b>, and <b>data structures</b>, providing a strong foundation for my career as a full-stack web developer
            </p>
        </div>
        {/* <!-- education second column --> */}
        <div className="col-lg-4 resume-second-item">
            <h4 className="h4 text-[#eebcbc] font-bold">
                Diploma in Digital Electronics
            </h4>
            <p className="p secondary-black text-xl fw-400 line-height-7 mt-10">
                Borad Of Technical Education (2017 - 2020)
            </p>
            <p className="p secondary-black fw-400 line-height-7 mt-4 text-lg">
            Gained a solid understanding of programming, software development, and web technologies, laying the groundwork for my journey as a full-stack web developer.
            </p>
        </div>
        {/* <!-- education third column --> */}
        <div className="col-lg-4 resume-third-item">
            <h4 className="h4 text-[#eebcbc] font-bold">
                Secondary School Education
            </h4>
            <p className="p secondary-black text-xl fw-400 line-height-7 mt-10">
                VPS, Baraut (2016 - 2017)
            </p>
            <p className="p secondary-black fw-400 line-height-7 mt-4 text-lg">
            Completed with a focus on foundational subjects in mathematics, science, and computer studies, sparking my interest in technology and software development
            </p>
        </div>
    </div>
</div>
     </div>
     </div>
          </div>
         </div>
        </div>
  </div>
        </section>
        <h1 className='text-center justify-center mt-4 mb-16 text-4xl h1pro'>Software Skills</h1>

    <div className='flex  justify-center'>
      <div className="card">
  <div className="card-details">
     <i className="fa-solid fa-laptop text-center text-3xl custom-icon"></i> 
    <p className="text-title">Frontend Development</p>
    <p className="text-white">Just like this portfolio website, I can make customised web apps and websites according to user's convinience and demands in variety of tech stacks!</p>
  </div>
 <a href="https://github.com/sakshixjain"> <button className="card-button">More info</button></a>
</div>
<div className="card">
  <div className="card-details">
  <i className="fa-solid fa-gear text-3xl text-center custom-icon"></i>
    <p className="text-title">Backend Development</p>
    <p className="text-white">Making backend from scratch, connecting with database or fixing bugs, you name it and I can do it, just give me the command and I'll try my best to give you a satisfied service!!</p>
  </div>
  <a href="https://github.com/sakshixjain"> <button className="card-button">More info</button></a>
</div>
<div className="card">
  <div className="card-details">
  <i className="fa-solid fa-code text-3xl text-center custom-icon"></i>
    <p className="text-title">Problem Solving</p>
    <p className="text-white">I have a good command over variety of concepts in Data Structures and Algorithms using which I can solve bugs or implement solutions in programming language of your choice!</p>
  </div>
 <a href="https://leetcode.com/u/sakshijain36/"> <button className="card-button">More info</button></a>
</div>
<div className="card">
  <div className="card-details">
  <i className="fa-brands fa-figma text-3xl text-center custom-icon"></i>
    <p className="text-title">UI/UX Designer</p>
    <p className="text-white">Being well versed with variety of concepts in UI/UX principles and technologies, I can design as well as implement your website's interface to optimize user experience to the fullest!</p>
  </div>
 <a href="https://leetcode.com/u/sakshijain36/"> <button className="card-button">More info</button></a>
</div>
</div>

    </>
  )
}

export default Info
