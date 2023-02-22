import styled from "styled-components";
import { colorsecondary, fontdisplay, colorgreylight2 } from '../../globalstyles/variables';


const FooterStyle=styled.footer`
background-color: ${colorsecondary};
grid-column: full-start/full-end;
padding: 8rem;
@media screen and (max-width:37.5em){
    padding: 4rem;
}
.nav{
    display: grid;
grid-template-columns: repeat(auto-fit,minmax(15rem,1fr));
grid-gap: 2rem;
align-items: center;
list-style: none;

    &__link
{  &:is(:visited,:link){
    transition: all 0.2s;
          font-family: ${fontdisplay};
        font-size: 1.4rem;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        text-align: center;
        padding: 1.5rem;
        display: block; 
      }
      &:is(:hover,:active){
    background-color: rgba(255,255,255,.05);
    transform: translateY(-3px);
      }

    }
}
.copyright{
    font-size:1.4rem;
    color: ${colorgreylight2};
    margin: 0 auto;
    margin-top: 6rem;
    text-align: center;
    width: 70%;
    @media screen and (max-width:37.5em){
      margin-top: 4rem;
}
}

`
export default FooterStyle