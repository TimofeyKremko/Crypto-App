import React from "react";
import { useSelector } from "react-redux";
import { StyledCaseItem } from "./styles"

export default function CaseItem({ symbol, changePercent24Hr, priceUsd, value }) {
const price = +priceUsd;
const percent = +changePercent24Hr;
  return (
    <StyledCaseItem>
      <td>
        <div className="item-title">
          <span className="title-currency">{symbol}</span>
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
      <td className="item-volume">
        <button className="case-items">Remove</button>
      </td>
    </StyledCaseItem>
  );
}
