import { styled } from 'styled-components';


const FooterStyled=styled.footer`
    text-align: center;
    background-color: #E1D9BC;
    color: #30364F;
    padding: 15px;
`;

const LinkStyled=styled.a`
    color: #30364F;
`;

const FooterPStyled=styled.p`
    margin: 0;
`;


export default function Footer() {
    return (
        <>
        <FooterStyled>
            <FooterPStyled>All Rights Reserved by Bryan Ayala <LinkStyled href="">Credits</LinkStyled> &#169;</FooterPStyled>
        </FooterStyled>
        </>
    )
}
