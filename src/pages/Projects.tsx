import { useState } from 'react';
import { styled } from 'styled-components';


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

const ButtonStyled=styled.div`
    border: 2px solid #E1D9BC;
    border-radius: 10px;
    background-color: #ACBAC4;
    width: 10%;
    aspect-ratio: 1;
    font-size: calc(3vw - 16px);
    color: #F0F0DB;
`;



export default function Projects() {

    return (
        <>
            <h2>Projects</h2>

            <div>
                <h3>JS Calculator</h3>
                <InputDivStyled>
                    <InputStyled type="text" id="first-number"/>
                    <InputStyled type="text" id="second-number"/>
                </InputDivStyled>
                <div>
                    <ButtonStyled onClick="addition()">+</ButtonStyled>
                    <ButtonStyled onClick="subtraction()">-</ButtonStyled>
                    <ButtonStyled onClick="multiplication()">*</ButtonStyled>
                    <ButtonStyled onClick="division()">/</ButtonStyled>
                    <ButtonStyled onClick="power()">**</ButtonStyled>
                    <ButtonStyled onClick="clearOutput()">Clear</ButtonStyled>
                </div>
                <h3 id="output"></h3>
            </div>
        </>
    )
}
