import styled from "styled-components";
import { colorgreylight1, colorsecondary, fontdisplay } from "../../globalstyles/variables";
import { colorprimary } from '../../globalstyles/variables';


const HomesStyle=styled.section`
grid-column: center-start/center-end;
margin: 15rem 0;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
grid-gap: 7rem;
@media screen and (max-width:37.5em){
    margin: 7.5rem 0;

}
.home{
 background-color: ${colorgreylight1};
 display: grid;
 grid-template-columns: repeat(2,1fr);
 grid-row-gap: 3.5rem;
 &__img{
    width: 100%;
    grid-column: 1/-1;
    grid-row: 1/2;
    z-index: 1;
 }
&__name{
    width: 80%;
    justify-self: center;
    align-self: end;
    grid-row: 1/2;
    grid-column: 1/-1;
    font-family: ${fontdisplay};
    font-size: 1.6rem;
    background-color: ${colorsecondary};
    font-weight: 400;
    text-align: center;
    padding: 1.25rem;
    color: #fff;
    z-index: 3;
    transform: translateY(50%);
 }
 &__like{
  fill: ${colorprimary};
    grid-column: 2/3;
    grid-row: 1/2;
    height: 2rem;
  width: 2rem;
  z-index: 2;
  justify-self: end;
  margin: 1rem;
 }
 .home__location,
 .home__rooms{
    margin-top:2.5rem;
 }
 .home__location,
 .home__rooms,
 .home__area,
 .home__price{
    font-size:1.5rem;
    margin-left: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
svg{
  fill: ${colorprimary};
  height: 2rem;
  width: 2rem;
  /* margin-right: 1rem; */
    }

 }
 &__btn{
    grid-column: 1/-1;
 }
}
`
export default HomesStyle