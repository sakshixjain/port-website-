
import {  useEffect } from 'react';
import '../components/about.css'
import '../components/skeleton.css'
function Info() {
  
  useEffect(() => {
    const h = document.querySelectorAll('.h3');
    const h1pro= document.querySelectorAll('.h1pro');
    const h2pro= document.querySelectorAll('.h2pro');
    const textResponse= document.querySelectorAll('.text-response');
    const img= document.querySelectorAll('.aboutimg');
    const h1= document.querySelectorAll('.h1');
   const card= document.querySelectorAll('.card');
    const resumeEducation= document.querySelectorAll('.resume-education');
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

   h.forEach((section) => {
      observer.observe(section);
    });
    h1pro.forEach((section) => {
      observer.observe(section);
    });
    h2pro.forEach((section) => {
      observer.observe(section);
    });
    textResponse.forEach((section) => {
      observer.observe(section);
    });
    img.forEach((section) => {
      observer.observe(section);
    });
    h1.forEach((section) => {
      observer.observe(section);
    });
    card.forEach((section) => {
      observer.observe(section);
    });
    resumeEducation.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      h.forEach((section) => {
        observer.unobserve(section);
      });
      h1pro.forEach((section) => {
        observer.unobserve(section);
      });
      h2pro.forEach((section) => {
        observer.unobserve(section);
      });
      textResponse.forEach((section) => {
        observer.unobserve(section);
      });
      img.forEach((section) => {
        observer.unobserve(section);
      });
      h1.forEach((section) => {
        observer.unobserve(section);
      });
      card.forEach((section) => {
        observer.unobserve(section);
      });
      resumeEducation.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  return (
    <>
               <h1
        id="about"
        className="text-center justify-center mt-32 mb-8 text-5xl h1pro animationn7">
        About me
      </h1>
      <section id="resume" className="resume">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="resume-wrapper">
                <div className="row row-mobile-margin">
                  <div className="col-12 col-lg-2">
                    <div
                      className="resume-topics h-100 flex-column justify-content-center position-relative "
                      
                    >
                      <h3 className="h3 animationn2 line-height-1 resume-topic-item resume-topic-one font-medium text-white position-absolute">
                        Education
                      </h3>
                    </div>
                  </div>
                  <div className="col-12 col-lg-10">
                    <div
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="800"
                      id="box"
                      className="resume-education animationn5 gradient-border bg-[#06060f] wn"
                      
                    >
                      <div className="row">
                        <div className="col-lg-4 resume-first-item">
                          <h4 className="h4 mt-4 text-[#f54982] font-bold">
                            B-Tech in Computer Science & Engineering
                          </h4>
                          <p className="p secondary-black font-semibold text-xl line-height-12 mt-10">
                            Maharshi Dayananad University (2021 - 2024)
                          </p>
                          <p className="p secondary-black fw-400 line-height-12 mt-10 text-lg text-gray-400">
                            <b>Software development,</b> <b>web technologies</b>, and{' '}
                            <b>data structures</b>, providing a strong foundation for my
                            career as a full-stack web developer.
                          </p>
                        </div>
                        <div className="col-lg-4 resume-second-item">
                          <h4 className="h4 mt-4 text-[#f54982] font-bold">
                            Diploma in Digital Electronics
                          </h4>
                          <p className="p secondary-black text-xl font-semibold line-height-12 mt-10">
                            Board Of Technical Education (2017 - 2020)
                          </p>
                          <p className="p secondary-black fw-400 line-height-12 mt-10 text-lg text-gray-400">
                            Gained a solid understanding of programming, software
                            development, and web technologies, laying the groundwork for
                            my journey as a full-stack web developer.
                          </p>
                        </div>
                        <div className="col-lg-4 resume-third-item">
                          <h4 className="h4 mt-4 text-[#f54982] font-bold">
                            Secondary School Education
                          </h4>
                          <p className="p secondary-black text-xl font-semibold line-height-12 mt-10">
                            VPS, Baraut (2016 - 2017)
                          </p>
                          <p className="p secondary-black fw-400 line-height-12 mt-10 text-lg text-gray-400">
                            Completed with a focus on foundational subjects in
                            mathematics, science, and computer studies, sparking my
                            interest in technology and software development.
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
                               {/* main section */}

        <section>
        <h1 className='text-center justify-center mt-4 mb-20 text-[#e92b6a] text-4xl h2pro animationn8' ><span className='dot'></span> Awards</h1> 
        <div className='flex award-response '>
          <img src="ABOU.jpg" alt="" className='ml-16 w-[700px] h-[500px] aboutimg animationn8' />
          <div>
          <h1 className='text-[#f54982] ml-8 -mt-4 font-bold text-4xl animationn1 h1'>Software Developer</h1>
          <br />
          <p className='text-gray-500 text-xl ml-8 mr-16 -mt-2 text-response1 animation4'>Good at problem solving by implementing DSA and Web Development using variety of stacks</p>
          
          
          <div className='text-left justify-start text-xl ml-4 font-semibold award-btn1 '>
                    <button className='border-2 border-white m-3 p-2 rounded-md hover:bg-white hover:text-black '><a href="">Main Skills</a></button>
                    <button  className='border-2 border-black text-black bg-white p-2 rounded-md '><a href="">Awards</a></button>
                    </div>  
                  <h1 className='text-gray-500 text-xl ml-8 mr-16 text-response '>Data Structures and Algorithms</h1>

                <p className='text-[#f54892] text-xl ml-8 mr-16 text-response animationn4'>Execute and design algorithms and implement data structures</p>
                <br />
                <h1 className='text-gray-500 text-xl ml-8 mr-16 text-response '>Frontend development</h1>
                <p className='text-[#f54892] text-xl ml-8 mr-16 text-response animationn4'>Delight the user and make it work.</p>
                <br />
                <h1 className='text-gray-500 text-xl ml-8 mr-16 text-response '>Backend development</h1>

                <p className='text-[#f54892] text-xl ml-8 mr-16 text-response animationn4'>Manage backend, database, hosting and deployment</p>
                <div className='text-left justify-start text-xl ml-8 font-semibold mt-8  header-btn'>
                    <button  className='border-2 text-black bg-white p-2 rounded-md hover:bg-black hover:text-white award-btn'><a href="">Resume &nbsp; <i className="fa-solid fa-arrow-down"></i></a></button>
                    </div>
                    </div>
                    </div>
        </section>
                 
                                  {/* award section */}

                                  

        <h1 id="skill"  className='text-center justify-center mt-16 mb-8  text-5xl h1pro animationn9'>Software Skills</h1>
        <h1 className='text-center justify-center mt-4 mb-24 text-[#e92b6a] text-4xl h2pro' ><span className='dot'></span> My Service</h1>
    <div className='flex  justify-center card-response'>
      <div className="card animationn1" >
  <div className="card-details">
     <i className="fa-solid fa-laptop text-center text-3xl custom-icon"></i> 
    <p className="text-title">Frontend Development</p>
    <p className="text-gray-400 text-[17px]">Just like this portfolio website, I can make customised web apps and websites according to user's convinience and demands in variety of tech stacks!</p>
  </div>
 <a href="https://github.com/sakshixjain"> <button className="card-button">More info</button></a>
</div>

<div className="card animationn6" >
  <div className="card-details">
  <i className="fa-solid fa-gear text-3xl text-center custom-icon"></i>
    <p className="text-title">Backend Development</p>
    <p className="text-gray-400 text-[17px]">Making backend from scratch, connecting with database or fixing bugs, you name it and I can do it, just give me the command and I'll try my best to give you a satisfied service!!</p>
  </div>
  <a href="https://github.com/sakshixjain"> <button className="card-button">More info</button></a>
</div>
<div className="card animationn7">
  <div className="card-details">
  <i className="fa-solid fa-code text-3xl text-center custom-icon"></i>
    <p className="text-title">Problem Solving</p>
    <p className="text-gray-400 text-[17px]">I have a good command over variety of concepts in Data Structures and Algorithms using which I can solve bugs or implement solutions in programming language of your choice!</p>
  </div>
 <a href="https://leetcode.com/u/sakshijain36/"> <button className="card-button">More info</button></a>
</div>
<div className="card animationn2" >
  <div className="card-details">
  <i className="fa-brands fa-figma text-3xl text-center custom-icon"></i>
    <p className="text-title">UI/UX Designer</p>
    <p className="text-gray-400 text-[17px]">Being well versed with variety of concepts in UI/UX principles and technologies, I can design as well as implement your website's interface to optimize user experience to the fullest!</p>
  </div>
 <a href="https://leetcode.com/u/sakshijain36/"> <button className="card-button">More info</button></a>
</div>
</div>

    </>
  )
}

export default Info

