import  styled  from 'styled-components';
import { fontdisplay, colorprimary, colorprimarydark, colorgreylight1 } from './variables';
export const Heading1=styled.h1`
font-family: ${fontdisplay};
font-weight: 400;
font-size: 4.5rem;
color: ${colorgreylight1};
line-height: 1;
`
export const Heading2=styled.h2`
font-family: ${fontdisplay};
font-weight: 400;
font-size: 4rem;
font-style: italic;
line-height: 1;
color: ${({col})=>col || "red"};

`
export const Heading3=styled.h3`
font-family: ${fontdisplay};
font-size: 1.6rem;
font-weight: 400;
color: ${colorprimary};
text-transform: uppercase;
`
export const Heading4=styled.h4`
font-family: ${fontdisplay};
font-weight: 400;
font-size: 1.9rem;
color: ${({col})=>col};
`
// buttons
export const Button=styled.button`
background-color: ${colorprimary};
color: #fff;
border: none;
outline: none;
border-radius: 0;
font-family: ${fontdisplay};
font-size: 1.5rem;
text-transform: uppercase;
padding: 1.8rem 3rem;
cursor: pointer;
transition: all 0.3s;
&:hover{
    background-color: ${colorprimarydark};
}
`