import { styled } from 'styled-components';


const TableDivStyled=styled.div`
    display: flex;
    justify-content: center;
`;

const TableStyled = styled.table`
    border-collapse: collapse;
    border: 1px solid;
`;

const Th = styled.th`
    border: 1px solid;
    padding: 10px;
`;

const Td = styled.td`
    border: 1px solid;
    padding: 10px;
`;

export default function References() {
    return (
        <>
            <h2>References</h2>
            <TableDivStyled>
                <TableStyled>
                    <tr>
                        <Th>Name</Th>
                        <Th>Position</Th>
                        <Th>email</Th>
                    </tr>
                    <tr>
                        <Td>Christie Pang</Td>
                        <Td>Co-founder & CEO</Td>
                        <Td>christie@lirvanalabs.com</Td>
                    </tr>
                    <tr>
                        <Td>Amanda Prothero</Td>
                        <Td>Chief Development Officer</Td>
                        <Td>amanda.prothero@smash.org</Td>
                    </tr>
                    <tr>
                        <Td>Asad Malik</Td>
                        <Td>Founder</Td>
                        <Td>am5815@bu.edu</Td>
                    </tr>
                </TableStyled>
            </TableDivStyled>
        </>
    )
}
