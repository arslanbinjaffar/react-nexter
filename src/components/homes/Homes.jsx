import React from 'react';
import Style from './style';
import {IoPersonOutline,FaExpand,ImKey,BsSuitHeartFill,SlLocationPin, } from 'react-icons/all'
import { Button } from '../../globalstyles/typography';
import { homesData } from '../../data/data';
const Homes = () => {
  return (
    <Style>
      {homesData.map(({id,img,length,location,price,rooms,title})=>{
        return(
      <div className="home" key={id}>
        <img src={img} alt="house1" className="home__img" />
        <BsSuitHeartFill className='home__like'/>
        <h5 className='home__name'>
          {title}
        </h5>
        <div className="home__location">
        <SlLocationPin/>
        <p>{location}</p>
        </div>
        <div className="home__rooms">
          <IoPersonOutline/>
        <p>{rooms} rooms</p>
        </div>
        <div className="home__area">
        <FaExpand/>

        <p>{length} m<sup>2</sup></p>
        </div>
        <div className="home__price">
        <ImKey/>
        <p>${price}</p>
        </div>
        <Button className='home__btn'>
          contact realtors
        </Button>
      </div>
        )
      })}
    </Style>
  )
}

export default Homes