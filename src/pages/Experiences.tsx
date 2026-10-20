import { styled } from 'styled-components';


const ExpOuterDiv=styled.div`
    display: flex;
    align-items: center;
    background-color: #ACBAC4;
    margin: 15px auto;
    justify-content: space-between;
    width: 60%;
    padding: 0 40px;
    border-radius: 10px;
    border: 2px solid;
`;


export default function Experiences() {
    return (
        <>
            <h2>Experiences</h2>
            <ExpOuterDiv>
                <p>2023 - Present</p>
                <div>
                    <p>Software Engineer</p>
                    <p>Lirvana Labs</p>
                </div>
            </ExpOuterDiv>
            <ExpOuterDiv>
                <p>2025 - 2026</p>
                <div>
                    <p>AI Researcher</p>
                    <p>BU SAIL</p>
                </div>
            </ExpOuterDiv>
            <ExpOuterDiv>
                <p>2025 - 2026</p>
                <div>
                    <p>Tech Lead</p>
                    <p>BU Spark!</p>
                </div>
            </ExpOuterDiv>
        </>
    )
}
