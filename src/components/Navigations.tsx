import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const NavStyled = styled.nav`
    height: 100vh;
    width: 25%;
    background-color: #ACBAC4;

    @media screen and (max-width: 750px) {
        width: 100%;
        height: 25%;
        padding-bottom: 10px;
    }
`;

const UlStyled = styled.ul`
    text-align: center;
    margin: 0;
    padding: 10px;
    list-style-type: none;
    font-size: calc(2.5vw - 16px);

    @media screen and (max-width: 750px) {
        height: auto;
        font-size: calc(4vw - 18px);
    }
`;

const LiStyled = styled.li`
    padding: 5px;
    border: 2px solid;
    margin-bottom: 15px;
    color: #F0F0DB;

    @media screen and (max-width: 750px) {
        display: inline;
    }
`;

const LinkStyled = styled(Link)`
    color: #F0F0DB;
    text-decoration: none;
`;


export default function Navigations() {
    return (
        <NavStyled>
            <UlStyled>
                <LiStyled><LinkStyled to="/">Home</LinkStyled></LiStyled>
                <LiStyled><LinkStyled to="/education/">Education</LinkStyled></LiStyled>
                <LiStyled><LinkStyled to="/experiences/">Experiences</LinkStyled></LiStyled>
                <LiStyled><LinkStyled to="/certifications/">Certifications</LinkStyled></LiStyled>
                <LiStyled><LinkStyled to="/references/">References</LinkStyled></LiStyled>
                <LiStyled><LinkStyled to="/achievements/">Achievements</LinkStyled></LiStyled>
                <LiStyled><LinkStyled to="/projects/">Projects</LinkStyled></LiStyled>
            </UlStyled>
        </NavStyled>
    )
}
