import styled,{css} from "styled-components";
import { mb_md, mb_sm } from '../../globalstyles/ultities';
import bg from '../../assets/back.jpg'
import { colorprimary } from "../../globalstyles/variables";

export const StoryPictureStyle=styled.div`
    /* background-color: green; */
    grid-column: full-start/col-end 4;
    background-image:linear-gradient(rgba(198,153,99,.5),rgba(198,153,99,.5)),url(${bg}) ;
    background-size:cover;
  display: grid;
  grid-template-rows: repeat(6,1fr);
  grid-template-columns: repeat(6,1fr);
  align-items: center;
  @media screen and (max-width:50em){
    grid-column:full-start/full-end;
    padding: 6rem;
}
  .story__img--1{
    width: 100%;
    grid-column: 2/6;
    grid-row: 2/6;
    box-shadow: 0 2rem 6rem rgba(#000,.15);
    @media screen and (max-width:50em){
        grid-column: 1/5;
        grid-row: 1/-1;
}
  }
  .story__img--2{
    width: 110%;
    grid-column: 4/7;
    grid-row: 4/6;
    z-index: 10;
    box-shadow: 0 2rem 6rem rgba(#000,.2);
    @media screen and (max-width:50em){
        grid-row: 1/-1;
        width: 100%;}
  }

`
export const StoryContentStyle=styled.div`
    grid-column: col-start 5/full-end;
    padding:6rem 8vw;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; */
    display: grid;
    align-content: center;
    justify-items: start;
    @media screen and (max-width:50em){
    grid-column:full-start/full-end;
    grid-row: 5/6;
}
@media screen and (max-width:37.5em){
    padding: 4.5rem 8vw;

}
    h2{
        ${mb_sm};
    }
    h3{
        ${mb_md};
    }
    .story__text{
      font-size: 1.5rem;
      font-style: italic;
      ${mb_md};
    }
`