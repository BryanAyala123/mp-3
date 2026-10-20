import { styled } from 'styled-components';
import type { ReactNode } from 'react';


const MainStyled=styled.main`
    height: 100vh;
    text-align: center;
    margin: 0 30px;
    width: 70%;
`;


export default function Main({ children }: { children: ReactNode }) {
    return <MainStyled>{children}</MainStyled>;
}
