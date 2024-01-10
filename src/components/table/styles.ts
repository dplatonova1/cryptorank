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
  max-width: 11rem;
  min-width: 6rem;
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

export const Pagination = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const PaginationButton = styled.button`
  width: 2.5rem;
  height: 1.5rem;
  border: 2px solid #d6d3d1;
  border-radius: 0.8rem;
  background-color: #fafaf9;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
`;

export const PaginationParameters = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-right: 2px solid #d6d3d1;
  padding-right: 1rem;
`;

export const PaginationInput = styled.input`
  padding: 0.5rem;
  border: 2px solid #d6d3d1;
  border-radius: 0.8rem;
  background-color: #fafaf9;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
`;

export const PaginationSelect = styled.select`
  padding: 0.5rem;
  border: 2px solid #d6d3d1;
  border-radius: 0.8rem;
  background-color: #fafaf9;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
`;
