import styled from "styled-components";
import hero from '../../assets/hero.jpeg'
import { colorgreylight1 } from "../../globalstyles/variables";
const HeaderStyle=styled.div`

background-color: brown;
grid-column: full-start / col-end 6;
background-image:linear-gradient(
rgba(16,29,44,.93),rgba(16,29,44,.93)
),url(${hero});
background-size: cover;
background-position: center;
padding: 8rem;
display: grid;
grid-template-rows: 1fr min-content minmax(6rem,min-content) 1fr;
grid-template-columns: minmax(min-content,max-content);
grid-row-gap: 1.5rem;
padding-top: 4rem;
justify-content: center;
@media screen and (max-width:50em){
    grid-column:full-start/full-end;
}
@media screen and (max-width:37.5em){
    padding: 5rem;
}
.header {
  &__logo {
    height: 3rem;
    margin-top: 1rem;
    justify-self: center;
  }
  &__seenon-logos {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-column-gap:3rem;
    justify-items: center;
    align-items: center;
    img{
        max-height: 2.5rem;
        max-width: 100%;
        filter: brightness(70%);
    }
  }
  &__seenon-text {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-column-gap: 1.5rem;
    align-items: center;
    font-size: 1.6rem;
    color: ${colorgreylight1};

    &::before,&::after{
        content: "";
        height: 1px;
        background-color: currentColor;
        display:block;
    }
    
  }
  &__btn{
    align-self:start;
    justify-self: start;
  }
}

`
export default HeaderStyle