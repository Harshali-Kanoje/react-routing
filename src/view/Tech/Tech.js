import './Tech.css'
import React from 'react'
const mainDivStyle = {
  display : "flex",
  justifyContent : "space-between",
  padding : "60px",
  backgroundColor: "#4d4a4a",
  color: "white"
}


const techcontent = {
  margin : "20px"
}

export default function Tech({heading, pageTitle, imgSrc,para }) {
  return (
    <div style={mainDivStyle}>
      <div className="techimg">
        <img src={imgSrc} />
      </div>
      <div style={techcontent}>
        <h1 className='head'>{heading}</h1>
        <h3 className='title'>{pageTitle}</h3>
        <p className='para'>{para}</p>
        <button className='btn'>Know More</button>
      </div>
    </div>
  )
}

