import { styled } from 'styled-components';


const HeaderStyled=styled.header`
    background-color: #ACBAC4;
    color: #30364F;
    text-align: left;
    padding: 10px 15px;
    border-bottom: 2px solid #F0F0DB;
`;

const H1Styled=styled.h1`
    margin: 0;
`;


export default function Header() {
    return (
        <>
        <HeaderStyled>
            <H1Styled>Bryan Ayala</H1Styled>
            <p>My Resume Portfolio Website</p>
        </HeaderStyled>
        </>
    )
}
