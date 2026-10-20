import { styled } from 'styled-components';


const EducationOuterDiv=styled.div`
    display: flex;
    text-align: left;
    margin: 30px 15px;
`;

const EducationList=styled.ul`
    list-style-type: none;
`;

const EducationListLi=styled.li`
    border-left: 2px solid;
    padding-left: 10px;
    margin-bottom: 15px;
`;

export default function Education() {
    return (
        <>
            <h2>Education</h2>
            <EducationOuterDiv>
                <EducationList>
                    <EducationListLi>B.A. in Computer Science <strong>Boston Univeristy</strong>, MA</EducationListLi>
                    <EducationListLi>High School Diploma <strong>Excel Academy</strong>, MA</EducationListLi>
                </EducationList>
            </EducationOuterDiv>
        </>
    )
}
