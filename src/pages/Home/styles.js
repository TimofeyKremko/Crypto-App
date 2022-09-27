import styled from "styled-components";

export const StyledHome = styled.div`
  .container {
    margin-top: 120px;
    background-color: #c3e958;
    padding: 50px 30px;
    .crypto-table {
      width: 100%;
      text-align: center;
      border-collapse: collapse;
      .table-body {
        .item {
          border-bottom: 1px solid #454545;
          overflow: hidden;
          height: 75px;
          padding: 10px;
          :hover {
            background-color: #a0c539;
          }
          &-link {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }
        }
      }
    }
  }
`;
