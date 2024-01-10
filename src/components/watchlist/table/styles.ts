import styled from "styled-components";

export const TableStyled = styled.table`
  width: 70vw;
  color: #78716c;
  text-align: center;
  border-collapse: collapse;
`;
export const TableRow = styled.tr`
  border-bottom: 2px solid #d6d3d1;
`;

export const TableHeader = styled.th`
  padding: 1rem 0;
  border-radius: 0.5rem;
  &:hover {
    cursor: pointer;
    background-color: #f5f5f4;
  }
`;
export const TableData = styled.td`
  padding: 0.5rem 0;
  min-width: 11rem;
`;
export const NameCellStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`;
export const NameStyled = styled.p`
  font-weight: 400;
  margin: 0;
  text-align: start;
`;
export const SymbolStyled = styled.p`
  color: #d6d3d1;
  margin: 0;
`;
export const NameCellImage = styled.img`
  margin-right: 0.5rem;
  width: 1rem;
  height: 1rem;
`;
