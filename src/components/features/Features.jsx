import React from 'react'
import Style from './style'
import { Heading4 } from '../../globalstyles/typography'
import { featureData } from '../../data/data'
import { colorgreydark1 } from '../../globalstyles/variables'
const Features = () => {
  return (
    <Style>
      {featureData.map(({id,icon,text,title},index)=>{
        return (
      <div className="feature" key={index}>
        {icon}
      <Heading4 col={colorgreydark1} className='heading-4'>{title}</Heading4>
      <p className="feature__text">
        {text}
      </p>
      </div>
        )
      })}

    </Style>
  )
}

export default Features