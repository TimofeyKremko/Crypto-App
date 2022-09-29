import styled from "styled-components";

export const StyledHome = styled.div`
  .container {
    margin: 120px 0;
    background-color: #fff;
    padding: 50px 30px;
    .crypto-table {
      width: 100%;
      text-align: center;
      border-collapse: collapse;
      ul {
        margin: 50px auto;
        display: flex;
        gap: 10px;
        justify-content: center;
        cursor: pointer;
        li {
          padding: 5px;
          border: 1px solid #232325;
          font-weight: 600;
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
