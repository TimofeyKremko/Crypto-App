import React from "react";
import { StyledCaseItem } from "./styles"

export default function CaseItem({ changePercent24Hr, priceUsd, value,id }) {
const price = +priceUsd;
const percent = +changePercent24Hr;
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
      <td className="item-volume">
        <button className="case-items">Remove</button>
      </td>
    </StyledCaseItem>
  );
}
