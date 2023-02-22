import styled, {createGlobalStyle, css} from 'styled-components'
import { fontprimary,colorgreydark2 } from './variables'







//typography end
// 1200px/16 75em
//1000px/16 62.5em
const GlobalStyles=createGlobalStyle`
 *,*::before,*::after{
    margin:0;
    padding: 0;
    box-sizing:inherit;
 }
 html{
    box-sizing: border-box;
    font-size: 62.5%;
    @media screen and(max-width:75em){
      font-size: 50%;
    }
 }
 body{
  font-family: ${fontprimary};
  color: ${colorgreydark2};
  font-weight: 300;
  line-height: 1.6;
 }
 .App{
   display: grid;
   grid-template-rows: 80vh min-content 40vw repeat(3,min-content);
   grid-template-columns:[sidebar-start] 8rem [sidebar-end full-start] minmax(6rem,1fr) [center-start] repeat(8, [col-start] minmax(min-content,14rem) [col-end]) [center-end] minmax(6rem,1fr) [full-end];
   @media screen and (max-width:62.5em){
   grid-template-rows:6rem 80vh min-content 40vw repeat(3,min-content);
      grid-template-columns:[full-start] minmax(6rem,1fr) [center-start] repeat(8, [col-start] minmax(min-content,14rem) [col-end]) [center-end] minmax(6rem,1fr) [full-end];
   }
   @media screen and (max-width:50em){
   grid-template-rows:6rem calc(100vh - 6rem) min-content min-content min-content repeat(3,min-content);
   
   }
 }


`
export default GlobalStyles