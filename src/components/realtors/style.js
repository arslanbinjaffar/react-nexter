import styled from "styled-components";
import { colorgreylight2, colorsecondary } from "../../globalstyles/variables";


const RealtorStyle=styled.div`
background-color:${colorsecondary};
grid-column: col-start 7/full-end;
padding: 3rem;
display: grid;
align-content: center;
justify-content: center;
grid-row-gap: 2rem;
justify-items: center;
@media screen and (max-width:50em){
    grid-column:full-start/full-end;

}
.realtors {
    &__list {
    display: grid;
    grid-template-columns: min-content max-content;
    grid-column-gap: 2rem;
    grid-row-gap: 5vh;
    align-items: center;
    @media screen and (max-width:50em){
    grid-template-columns: repeat(3,min-content max-content);
}
@media screen and (max-width:37.5em){
    grid-template-columns: min-content max-content;
}
  }
  &__details {
  }
  &__img {
    /* width:16.1%; */
    width: 7rem;
    border-radius: 50%;
    display: block;
  }

  
  &__sold {
    text-transform: uppercase;
    color: ${colorgreylight2};
    margin-top: -3px;
  }
}


`
export default RealtorStyle