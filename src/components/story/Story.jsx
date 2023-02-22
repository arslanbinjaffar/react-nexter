import React from 'react'
import { Heading2, Heading3 } from '../../globalstyles/typography';
import { StoryContentStyle, StoryPictureStyle } from './style';
import { Button } from '../../globalstyles/typography';
import { colorgreydark1 } from '../../globalstyles/variables';
import story from '../../assets/story-1.jpeg';
import story2 from '../../assets/story-2.jpeg';
const Story = () => {
  return (
    <>
    <StoryPictureStyle>
      <img src={story} alt='couple with new house' className="story__img--1"/>
      <img src={story2} alt='new house' className="story__img--2"/>
    </StoryPictureStyle>
    <StoryContentStyle>
      <Heading3>happy customers</Heading3>
      <Heading2 col={colorgreydark1}>&ldquo;the best decision of life&rdquo;</Heading2>
      <p className="story__text">
        Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <Button>Find your own home</Button>
    </StoryContentStyle>
    </>
  )
}

export default Story