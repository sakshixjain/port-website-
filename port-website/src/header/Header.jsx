import React from 'react'
import Home from '../home/Home'
import Info from '../Information/Info'
function Header() {
  return (
    <div className='headerbody'>
      <div className='mt-8 z-20 '>
        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">service</a>
            <a href="#">Portfolio</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
           <button><i className="fa-solid fa-down-long"></i></button>
        </nav>
      </div>
    </div>
  )
}

export default Header
