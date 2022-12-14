import styled from "styled-components";

export const StyledCurrencyPage = styled.div`
  .currency {
    &-container {
      margin-top: 70px;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 120px;

      .currency-content {
        background-color: #c3e958;
        flex: 1;
        padding: 0 30px 30px 0;
        .currency-logo {
          background-color: #232325;
          max-width: 250px;
          padding: 30px;
          border-radius: 0 0 50px 0;
          h2 {
            color: #c3e958;
            text-transform: capitalize;
            margin-left: 15px;
            font-weight: 700;
            font-size: 32px;
            line-height: 39px;
          }
          .rank-text {
            margin-top: 10px;
            padding-left: 10px;
            color: #fff;
            font-size: 24px;
          }
          img {
            width: 50px;
            height: 50px;
          }
        }
        .currency-info {
          padding: 55px 30px;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
        }
      }
      .currency-stats {
        background-color: #fff;
        padding: 30px;
        .stats-list {
          margin-bottom: 30px;
          display: flex;
          flex-direction: column;
          gap: 45px;
          .list-item {
            max-width: 200px;
            .item-title {
              font-style: normal;
              font-weight: 700;
              font-size: 20px;
              line-height: 24px;
              margin-bottom: 10px;
            }
            .item-value {
              font-style: normal;
              font-weight: 500;
              font-size: 20px;
              line-height: 24px;
            }
          }
        }
        .currency-add-btn {
          display: flex;
          gap: 10px;
          border: 1px solid #232325;
          align-items: center;
          padding: 20px 10px;
          justify-content: center;
          :hover {
            background-color: #c3e958;
          }
        }
      }
    }
  }
`;
