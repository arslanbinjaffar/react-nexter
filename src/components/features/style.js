import styled from "styled-components";
import { colorprimary } from "../../globalstyles/variables";


const FeatureStyle=styled.div`
grid-column: center-start/center-end;
margin: 15rem 0;
display: grid;
/* grid-template-columns: repeat(3,1fr); */
 grid-template-columns: repeat(auto-fit,minmax(25rem,1fr)); 
grid-gap: 6rem;
align-items: start;
@media screen and (max-width:37.5em){
       margin: 7.5rem 0;
}
.feature{
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-column-gap: 1.5rem;
    grid-row-gap: 2.5rem;
    &__icon{
        fill:${colorprimary};
        width: 4.5rem;
        height: 4.5rem;
        grid-row: 1/span 2;
        transform: translateY(-1rem);
    }
    &__text{
        font-size: 1.7rem;
    }
}
`
export default FeatureStyle