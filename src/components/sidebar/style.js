import styled from "styled-components";
import { colorprimary } from "../../globalstyles/variables";


const SidebarStyle=styled.div`
background-color:${colorprimary};
grid-column: sidebar-start/sidebar-end;
grid-row:1/-1;
display: flex;
justify-content: center;
@media screen and (max-width:62.5em){
    grid-column:1/-1;
    grid-row: 1/2;
    justify-content: flex-end;
    align-items: center;
}
.nav-btn{
    border: none;
    border-radius:0;
    background-color: #fff;
    height:2px;
    width: 4.5rem;
    margin-top: 4rem;
    &::before,::after{
        content: "";
        background-color: #fff;
        height: 2px;
        width: 4.5rem;
        display: block;
    }
    &::before{
        transform: translateY(-1.5rem);
    }
    &::after{
        transform: translateY(1.3rem);
    }
    @media screen and (max-width:62.5em){
        margin: 0;
        margin-right: 3rem;
        &::before{
        transform: translateY(-1.2rem);
    }
    &::after{
        transform: translateY(1rem);
    }
    }
}

`
export default SidebarStyle