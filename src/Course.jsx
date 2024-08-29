import React from 'react'
import './css/Course.css';


function Course({course}) {

  const {id,title,description,price,link,image} = course;  
  return (
    <div className='course'>

            <img src={image} width={300} height={180}/>
            <h4 className='courseTitle'>{title}</h4>
            <p className='courseDesc'>{description}</p>
            <h3 className='coursePrice'>$ {price}</h3>
            <div className='courseLink'><a href={link} style={{textDecoration: 'none'}}>Watch it the trailer!</a></div>

    </div>
  )
}

export default Course