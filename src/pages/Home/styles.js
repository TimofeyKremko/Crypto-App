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
