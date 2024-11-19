
import {  useEffect,useState } from 'react';
import '../components/about.css'
import '../components/skeleton.css'
function Info() {
  
  const [activeDiv, setActiveDiv] = useState("main-div");

  useEffect(() => {
    const h = document.querySelectorAll('.h3');
    const h1pro= document.querySelectorAll('.h1pro');
    const h2pro= document.querySelectorAll('.h2pro');
    const textResponse= document.querySelectorAll('.text-response');
    const imgbox= document.querySelectorAll('.imgbox1');
    const about2= document.querySelectorAll('.about2');
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
    imgbox.forEach((section)=>{
      observer.observe(section);
    })
    about2.forEach((section)=>{
      observer.observe(section);
    })
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
      imgbox.forEach((section)=>{
        observer.unobserve(section);
      })
      about2.forEach((section)=>{
        observer.observe(section);
      })
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
        className="text-center justify-center mt-32 text-5xl h1pro animationn7">
        About me
      </h1>

   
        <div className='flex justify-around ml-16 mt-24 mb-24 aboutkiimg'>
       <div className='imgbox1 h-[450px] w-[450px] shadow-none animationn6' >
                <div className="content">
                  <img src="photo.jpg"/>
                  <h2>A Younger<br /><span>Full Stack Developer</span></h2>
                  <a href="https://www.linkedin.com/in/sakshi-jain-a0048621b/">Hire me</a>
                </div>
              
              </div>
        <div className='about2 animationn4'>
          <h1 className='text-5xl text-[#f54982] font-semibold mb-8'>I Can Develop And Design <br /> Anything You Want</h1>
       <p className='text-lg mt-2 text-gray-500 text-respo flex-wrap mr-8'
> I’m a dedicated Full-Stack Web Developer with experience in building  <br /> responsive,high-performance web applications.  Skilled in front-end technologies <br />like React, JavaScript, and HTML5, and back-end tools like Node.js, Express, <br /> and MongoDB, I specialize in creating seamless user experiences and scalable <br /> solutions. With a passion for problem-solving  and continuous learning, I enjoy <br /> turning ideas into functional products and  integrating services like Google login <br /> for added functionality.</p> 
<div className='flex mt-8 '>
<i className="fa-regular fa-circle-check text-5xl border-2 border-stone-900 bg-slate-950 rounded-lg p-2 m-2"></i>
  <p> <span className='text-3xl text-pink-700'>10+</span><br /> <span className='text-2xl'>Complete Project</span></p>
</div>
<div className='text-left justify-start text-xl font-semibold mt-4 pl-4 header-btn'>
                   
                    <button  className='border-2 border-black mb-4 text-black bg-white p-2.5 rounded-md animate-pulse'><a href="cv.docx"download> Resume &nbsp; <i className="fa-solid fa-arrow-down"></i></a></button>
                    </div>
</div>
</div>
<h1 className='text-center justify-center text-slate-500 text-5xl h2pro' >Education</h1>

      <section id="resume" className="resume">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="resume-wrapper">
                <div className="row row-mobile-margin">
                  <div className="col-12 col-lg-2">
                    <div
                      className="resume-topics h-100 flex justify-content-center position-relative ">
                        <h3
                                            className="h3 line-height-3 resume-topic-item resume-topic-one fw-500 text-white position-absolute">
                                            </h3>
                                            <h3
                                            className="h3 line-height-3 resume-topic-item resume-topic-two fw-500 text-white position-absolute">
                                            </h3>
                                            <h3
                                            className="h3 line-height-3 resume-topic-item resume-topic-three fw-500 text-white position-absolute">
                                            </h3>
                                            
                    </div>
                  </div>
                  <div className="col-12 col-lg-9">
                  
                                        
                    <div
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="800"
                      id="box"
                      className="resume-education animationn5 bg-[#06060f] wn">
                      <div className="row">
                        <div className="col-lg resume-first-item">
                          <h4 className="h4 mt-4 text-[#f54982] font-bold">
                           Maharshi Dayananad University , Rohtak 
                          </h4>
                          <p className="p secondary-black font-medium text-xl line-height-12 mt-10">
                             B-Tech - Computer Science & Engineering
                          </p>
                          <p className='text-gray-500'>Sep 2021 - May 2024</p>
                          <p>Grade: 77%</p>
                          
                          <p className="p secondary-black fw-400 line-height-12 text-lg mt-2 text-gray-400">
                             Learning: <b>Software development,</b> <b>web technologies</b>, and{' '}
                            <b>data structures</b>, providing a strong foundation for my
                            career as a full-stack web developer.
                            
                          </p>
                        </div>
                    
                      </div>
                      
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="800"
                      id="box"
                      className="resume-education animationn5 bg-[#06060f] wn">
                      <div className="row">
                      
                        <div className="col-lg resume-second-item">
                          <h4 className="h4 mt-4 text-[#f54982] font-bold">
                            Board Of Technical Education, New Delhi 
                          </h4>
                          
                          <p className="p secondary-black text-xl font-medium line-height-12 mt-10">
                            Diploma - Electronics and Communication Engineering
                          </p>
                          <p className='text-gray-500'> July 2017 - Sep 2020 </p>
                          <p> Grade: 78%</p>
                          <p className="p secondary-black fw-400 line-height-12 mt-2 text-lg text-gray-400">
                            Gained a solid understanding of programming, software
                            development, and web technologies, laying the groundwork for
                            my journey as a full-stack web developer.
                          </p>
                        </div>
                        
                      </div>
                      
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="800"
                      id="box"
                      className="resume-education animationn5 bg-[#06060f] wn">
                      <div className="row">
                       
                        <div className="col-lg resume-third-item">
                          <h4 className="h4 mt-4 text-[#f54982] font-bold">
                             Vanasthali Public School , Baraut UP
                          </h4>
                          <p className="p secondary-black text-xl font-medium line-height-12 mt-10">
                           CBSE(X)
                          </p>
                          <p className='text-gray-500'>April 2016 - May 2017 </p>
                          <p> Grade: 95%</p>
                          <p className="p secondary-black fw-400 line-height-12 mt-2 text-lg text-gray-400">
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

        <section id="skill">
   
        <div className='flex award-response mt-20'>
          <img src="ABOU.jpg" alt="" className='ml-16 w-[700px] h-[500px] aboutimg animationn6' />
          <div>
          <h1  className='text-[#f54982] ml-8 -mt-4 font-bold text-4xl animationn1 h1'>Software Developer</h1>
          <br />
          <p className='text-gray-500 text-xl ml-8 mr-16 -mt-2 text-response1 animation4'>Good at problem solving by implementing DSA and Web Development using variety of stacks</p>
          
          <div className='text-left justify-start text-xl ml-4 font-medium award-btn1 '>
                    <button onClick={() => setActiveDiv("main-div")}  className='border-2 border-white m-3 
                    p-2.5 rounded-md hover:bg-white hover:text-black '>Main Skills</button>
<button onClick={() => setActiveDiv("award-div")}  className='border-2 border-black text-black bg-white hover:bg-black hover:text-white p-2.5 rounded-md '>Awards</button>

{activeDiv === "main-div" ? (
          <div className='main-div'>
                  <h1 className='text-gray-500 text-xl ml-8 mr-16 text-response '>Data Structures and Algorithms</h1>

                <p className='text-[#f54892] text-xl ml-8 mr-16 text-response animationn4'>Execute and design algorithms and implement data structures</p>
                <br />
                <h1 className='text-gray-500 text-xl ml-8 mr-16 text-response '>Frontend development</h1>
                <p className='text-[#f54892] text-xl ml-8 mr-16 text-response animationn4'>Delight the user and make it work.</p>
                <br />
                <h1 className='text-gray-500 text-xl ml-8 mr-16 text-response '>Backend development</h1>

                <p className='text-[#f54892] text-xl ml-8 mr-16 text-response animationn4'>Manage backend, database, hosting and deployment</p>
                </div>
      ) : (
       <div className='award-div'>
                  <h1 className='text-gray-500 text-xl ml-8 mr-16 text-response '>Leetcode</h1>

                <p className='text-[#f54892] text-xl ml-8 mr-16 text-response animationn4'>I have solved over 350+ problems on Leetcode</p>
                <br />
                <h1 className='text-gray-500 text-xl ml-8 mr-16 text-response '>Geeks for Geeks</h1>
                <p className='text-[#f54892] text-xl ml-8 mr-16 text-response animationn4'>I have solved 300+ problems on Geeks for Geeks and hold a rank of 45 at MDU, Rohtak. </p>
                <br />
                <h1 className='text-gray-500 text-xl ml-8 mr-16 text-response '>Database</h1>

                <p className='text-[#f54892] text-xl ml-8 mr-16 text-response animationn4'>have Completed 50+ MySQL questions on Leetcode, demonstrating proficiency in database querying and problem-solving.</p>
                </div> 
      )}
                  
                    
                    </div> 
                    
                <div className='text-left justify-start text-xl ml-8 font-semibold mt-8  header-btn'>
                    <button  className='border-2 text-black bg-white p-2.5 rounded-md hover:bg-black hover:text-white award-btn'><a href="cv.docx"download>Resume &nbsp; <i className="fa-solid fa-arrow-down"></i></a></button>
                    </div>
                    </div>
                    </div>
        </section>
                 
                                  {/* award section */}

                                  

        <h1 id="service"  className='text-center justify-center mt-24 text-5xl h1pro animationn3'>Software Skills</h1>
        <h1 className='text-center justify-center mt-4 mb-24 text-slate-500 text-3xl h2pro' >My Service</h1>
    <div className='flex  justify-center card-response '>
      <div className="card animationn7" >
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
<div className="card animationn6" >
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

