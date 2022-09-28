import styled from "styled-components";

export const StyledHeaderCrypto = styled.div`
  display: flex;
  align-items: center;
  .crypto {
    &-title {
      text-transform: capitalize;
      font-weight: 500;
      font-size: 18px;
    }
    &-value {
      font-weight: 700;
    }
    &-rank {
      font-weight: 700;
    }
  }
`;
