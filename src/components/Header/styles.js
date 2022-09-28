import styled from "styled-components";

export const StyledHeader = styled.header`
  .header {
    &-logo {
      padding: 10px 0;
    } 
    &-container {
      position: relative;
      max-width: 1470px;
      padding: 0 15px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      gap: 30px;
      flex-wrap: wrap;
    }
    &-crypto {
      padding: 10px 70px;
      flex: 1;
      max-width: 800px;
      display: flex;
      justify-content: space-between;
      border-radius: 0 0 30px 30px;
      gap: 20px;
      background-color: #c2e958;
      
    }
    .crypto {
      &-value {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #181818;
      }
    }
    &-wallet {
      padding: 10px 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 15px;
      color: #fff;
      .wallet {
        &-percent {
          color: #3ca640;
        }
      }
    }
  }
`;
