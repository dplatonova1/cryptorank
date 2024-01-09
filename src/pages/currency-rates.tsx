import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Watchlist: React.FC = () => {
  return (
    <PageContainer>
      <h1>Watchlist</h1>
    </PageContainer>
  );
};

export default Watchlist;
