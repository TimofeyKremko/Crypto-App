import styled from "styled-components";

export const StyledCaseItem = styled.tr`
  border-bottom: 1px solid #454545;
  overflow: hidden;
  height: 75px;
  padding: 10px;
  font-weight: 600;

  :hover {
    background-color: #c2e958;
  }
  .item-link {
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .title-name {
    text-transform: capitalize;
  }

  .item-add {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 30px 0;
    cursor: pointer;
  }
  .remove-button {
    background: none;
    padding: 10px 20px;
  }
`;
