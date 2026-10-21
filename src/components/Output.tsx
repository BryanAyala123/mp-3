import { styled } from 'styled-components';

const OutputStyled=styled.h3`
    color: #F0F0DB;
`;

const OutputRedStyled=styled.h3`
    color: red;
`;

export default function Output({ result }: { result: number | string }) {
    if (Number(result) < 0) {
        return <OutputRedStyled>{result}</OutputRedStyled>;
    }
    return <OutputStyled>{result}</OutputStyled>;
}
