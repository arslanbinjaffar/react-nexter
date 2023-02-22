import styled from "styled-components";


const GalleryStyle=styled.div`
grid-column: full-start/full-end;
display: grid;
grid-template-columns: repeat(8,1fr);
grid-template-rows: repeat(7,5vw);
grid-gap:1.5rem;
padding: 1.5rem;
.gallery__item{

    &--1{
     /* grid-column: 1/3; */
     grid-column: 1 /span 2;
     /* grid-row: 1/3; */
     grid-row: 1/span 2;
    }
    &--2{
        grid-column: 3/6;
        grid-row: 1/4;
        grid-column: 3/span 3;
        grid-row: 1/span 3;
    }
    &--3{
        grid-column: 6/7;
        grid-row: 1/3;
        grid-row: 1/span 2;
    }
    &--4{
        grid-row: 1/3;
        grid-row: 1/span 2;
        grid-column:7/span 2;
        grid-column: 7/-1;
    }
    &--5{
        grid-row: 3/6;
        grid-column: 1/3;
        grid-row: 3/span 3;
        grid-column: 1/span 2;
    }
    &--6{
        grid-column: 3/5;
        grid-column: 3/span 2;
        grid-row: 4/6;
        grid-row: 4/span 2;
    }
    &--7{
        grid-row: 4/5;
        grid-column: 5/6;
    }
    &--8{
        grid-row: 3/5;
        grid-row: 3/span 2;
        grid-column: 6/8;
        grid-column: 6/span 2;
    }
    &--9{
        grid-row: 3/6;
        grid-row: 3/span 3;
        grid-column: 8/9;
        grid-column: 8/-1;
    }
    &--10{
        grid-column: 1/2;
        grid-row: 6/8;
        grid-row: 6/span 2;
    }
    &--11{
        grid-row: 6/8;
        grid-row: 6/span 2;
        grid-column: 2/4;
        grid-column: 2/span 2;
    }
    &--12{
        grid-row: 6/8;
        grid-row: 6/span 2;
        grid-column: 4/5;
    }
    &--13{
        grid-column: 5/8;
        grid-column: 5/span 3;
        grid-row: 5/8;
        grid-row: 5/span 3;
    }
    &--14{
        grid-row: 6/8;
        grid-row: 6/span 2;
        grid-column: 8/9;
        grid-column: 8/-1;
    }
}

.gallery__image{
   width: 100%;
   height: 100%;
   object-fit: cover;
   display: block;
}
`
export default GalleryStyle