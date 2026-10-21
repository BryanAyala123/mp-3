import { styled } from 'styled-components';
import Output from '../components/Output';
import useCalculator from '../logic/CalculatorLogic';


const InputDivStyled=styled.div`
    text-align: center;
    gap: 10%;
    margin-bottom: 15px;
`;

const InputStyled=styled.input`
    border: 2px solid #F0F0DB;
    border-radius: 10px;
    background-color: gray;
    width: 20%;
    color: #F0F0DB;
    font-size: calc(3vw - 24px);
`;

const ButtonStyled=styled.button`
    border: 2px solid #E1D9BC;
    border-radius: 10px;
    background-color: #ACBAC4;
    width: 10%;
    aspect-ratio: 1;
    font-size: calc(3vw - 16px);
    color: #F0F0DB;
`;



export default function Projects() {

    const { num1, setNum1, num2, setNum2, result, calculate, clear } = useCalculator();

    return (
        <>
            <h2>Projects</h2>
            
            <InputDivStyled>
                <InputStyled type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
                <InputStyled type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
            </InputDivStyled>

            <ButtonStyled onClick={() => calculate('+')}>+</ButtonStyled>
            <ButtonStyled onClick={() => calculate('-')}>−</ButtonStyled>
            <ButtonStyled onClick={() => calculate('*')}>×</ButtonStyled>
            <ButtonStyled onClick={() => calculate('/')}>÷</ButtonStyled>
            <ButtonStyled onClick={() => calculate('**')}>**</ButtonStyled>
            <ButtonStyled onClick={clear}>Clear</ButtonStyled>

            <Output result={result} />
        </>
    );
}
