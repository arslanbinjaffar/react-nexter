import React, { Fragment } from 'react'
import Style from './style'
import { Heading3, Heading4 } from '../../globalstyles/typography';
import { realtorsData } from '../../data/data';

const Realtors = () => {
  return (
    <Style>
      <Heading3>
        Top 3 Realtors
      </Heading3>
      <div className="realtors__list">
      {realtorsData.map(({id,img,title,detail})=>{
        return(
        <Fragment key={id}>
        <img src={img} alt={`Realtor ${id}`} className='realtors__img' />
        <div className="realtors__details">
          <Heading4 col="white">
            {title}
          </Heading4>
          <p className="realtors__sold">
            {detail} houses sold
          </p>
        </div>
          </Fragment>
        )
      })}
      </div>
    </Style>
  )
}

export default Realtors