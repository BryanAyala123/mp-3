import { styled } from 'styled-components';
import type { ReactNode } from 'react';


const MainStyled=styled.main`
    height: 100vh;
    text-align: center;
    margin: 0 30px;
    width: 70%;

    @media screen and (max-width: 750px) {
        margin: 0;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;


export default function Main({ children }: { children: ReactNode }) {
    return <MainStyled>{children}</MainStyled>;
}
