import styled from "styled-components";

export const StyledModal = styled.div`
  left: 0;
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: brightness(60%);
  .modal-container {
    background-color: #232325;
    padding: 60px 80px;
    box-shadow: 0px 4px 18px 10px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #ffffff;
      margin-bottom: 55px;
    }
    .modal-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 40px;
      .modal-input {
        outline: none;
        flex: 1;
        border: 0;
        border-bottom: 2px solid #ffffff;
        padding: 11px;
        background: none;
        color: #ffffff;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        ::placeholder {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: #777777;
        }
      }
      .modal-button {
        align-self: center;
        background-color: #c3e958;
        padding: 20px;
        max-width: 200px;
        display: flex;
        align-items: center;
        gap: 15px;
        .button-text {
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
          color: #000000;
        }
      }
    }
  }
`;
