import React from 'react'
import { galleryData } from '../../data/data'
import Style from './style'
const Gallery = () => {
  
  return (
    <Style>
     {galleryData.map(({img,id})=>{
      return(
        <figure className={`gallery__item gallery__item--${id}`} key={id}>
        <img src={img} alt={`gallery image ${id}`} className='gallery__image'/>
        </figure>
      )
     })}
     
    </Style>
  )
}

export default Gallery