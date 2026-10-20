import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const NavStyled = styled.nav`
    height: 100vh;
    width: 25%;
    background-color: #ACBAC4;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;
    font-size: clamp(14px, 2.5vw - 16px, 32px);
`;

const LinkStyled = styled(Link)`
    padding: 5px;
    border: 2px solid;
    color: #F0F0DB;
    text-decoration: none;
`;


export default function Navigations() {
    return (
        <NavStyled>
            <LinkStyled to="/">Home</LinkStyled>
            <LinkStyled to="/education/">Education</LinkStyled>
            <LinkStyled to="/experiences/">Experiences</LinkStyled>
            <LinkStyled to="/certifications/">Certifications</LinkStyled>
            <LinkStyled to="/references/">References</LinkStyled>
            <LinkStyled to="/achievements/">Achievements</LinkStyled>
            <LinkStyled to="/projects/">Projects</LinkStyled>
        </NavStyled>
    )
}
