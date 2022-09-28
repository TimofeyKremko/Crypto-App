import React from "react";
import { StyledCryptoBlock } from "./styles";
import { Link } from "react-router-dom";
import plusIcon from '../../assets/img/plus.svg'

export default function CryptoBlock({
  rank,
  id,
  symbol,
  priceUsd,
  volumeUsd24Hr,
  changePercent24Hr,
}) {

const price = +priceUsd;
const percent = +changePercent24Hr;
const volume = +volumeUsd24Hr;




  return (
    <StyledCryptoBlock>
      <td className="item-position">{rank}</td>
      <td>
        <div className="item-title">
          <Link to={"/currency/name"} className="item-link">
            <span className="title-name">{id}</span>
            <span className="title-currency">{symbol}</span>
          </Link>
        </div>
      </td>
      <td className="item-price">$ {price.toFixed(2)}</td>
      <td
        className="item-percent"
        style={percent > 0 ? { color: "green" } : { color: "red" }}
      >
        {percent.toFixed(2)}%
      </td>
      <td className="item-volume">$ {volume.toFixed(2)}</td>
      <td className="item-add">
        <img src={plusIcon} alt="" />
        <p className="add-text">Add To Case</p>
      </td>
    </StyledCryptoBlock>
  );
}
