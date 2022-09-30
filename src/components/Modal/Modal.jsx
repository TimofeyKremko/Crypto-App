import React from "react";
import { StyledModal } from "./styles";
import plusPath from "../../assets/img/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import { setCurrencyValue, setOpenModal } from "../../redux/slices/modalSlice";
import { addItem } from "../../redux/slices/walletSlice";

export default function Modal() {
  const dispatch = useDispatch();
  const item = useSelector(state => state.selectedItem.item);
  const currencyAddValue = useSelector(state => state.modal.value)

  const onChangeInput = (event) => {
    dispatch(setCurrencyValue(event.target.value));
  };

  console.log(currencyAddValue);

  const addCurrencyToCase = () => {
    const cartItem = {
      ...item,
      value: currencyAddValue,
    };
    console.log(cartItem)
    dispatch(addItem(cartItem));

    dispatch(setOpenModal(false))
  };

  return (
    <StyledModal>
      <div className="modal-container">
        <h3>Enter the amount of cryptocurrency:</h3>
        <div className="modal-form">
          <input
            className="modal-input"
            type="text"
            placeholder="for expample: 0.001"
            onChange={onChangeInput}
          />
          <button className="modal-button" onClick={addCurrencyToCase}>
            <img src={plusPath} alt="" />
            <span className="button-text">Add To Case</span>
          </button>
        </div>
      </div>
    </StyledModal>
  );
}
