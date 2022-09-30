import styled from "styled-components";

export const StyledCase = styled.div`
  .case-container {
    background-color: #fff;
    margin-top: 120px;

    .case-top {
      background-color: #232325;
      max-width: 250px;
      padding: 30px;
      display: flex;
      align-items: center;
      border-radius: 0 0 50px 0;
      .case-title {
        color: #fff;
        margin-left: 15px;
      }
    }
    .crypto-table {
      padding: 0 30px !important;
      width: 100%;
      text-align: center;
      border-collapse: collapse;
      margin-top: 50px;
      ul {
        margin: 50px auto 0;
        display: flex;
        gap: 5px;
        justify-content: center;
        cursor: pointer;
        li {
          width: 30px;
          height: 30px;
          padding: 5px;
          border: 1px solid #232325;
          font-weight: 600;
          border-radius: 50%;
          :hover {
            background-color: #c2e958;
          }
        }
        .selected {
          background-color: #c2e958;
        }
        .break {
          border: 0;
        }
      }
    }
  }
`;
