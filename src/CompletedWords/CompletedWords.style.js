import styled from "styled-components";

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
`;

export const TableColumnData = styled.div`
  justify-content: space-between;
  padding: 10px;
  width: 80px;
`;

export const TableColumnSeparator = styled.div`
  justify-content: space-between;
  padding: 10px 0;
  width: 15px;
`;

export const TableColumnHeader = styled.div`
  justify-content: center;
  padding: 10px;
  width: 80px;
`;
