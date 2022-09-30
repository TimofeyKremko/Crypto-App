import React from "react";
import { StyledCaseItem } from "./styles";
import { removeItem } from "../../redux/slices/walletSlice";
import { useDispatch } from "react-redux";

export default function CaseItem({ changePercent24Hr, priceUsd, value, id }) {
  const dispatch = useDispatch();

  const price = +priceUsd;
  const percent = +changePercent24Hr;
  const walletPrice = price * value;

  const deleteWalletItem = () => {
    const deletedItem = {
      itemId: id,
      fullPrice: walletPrice,
      percent: changePercent24Hr,
    };
    dispatch(removeItem(deletedItem));
  };

  return (
    <StyledCaseItem>
      <td>
        <div className="item-title">
          <span className="title-currency">{id}</span>
        </div>
      </td>
      <td className="item-position">{value}</td>

      <td className="item-price">{price.toFixed(2)} $</td>
      <td
        className="item-percent"
        style={percent > 0 ? { color: "green" } : { color: "red" }}
      >
        {percent.toFixed(2)} %
      </td>
      <td className="item-volume">{walletPrice.toFixed(2)} $</td>
      <td className="item-volume">
        <button className="remove-button" onClick={deleteWalletItem}>
          Remove
        </button>
      </td>
    </StyledCaseItem>
  );
}
