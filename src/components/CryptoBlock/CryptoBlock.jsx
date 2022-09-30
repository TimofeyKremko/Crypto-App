import React from "react";
import { StyledCryptoBlock } from "./styles";
import { Link } from "react-router-dom";
import plusIcon from "../../assets/img/plus.svg";
import { setSelectedItem } from "../../redux/slices/selectedItemSlice";
import { useDispatch } from "react-redux/es/exports";

export default function CryptoBlock({
  rank,
  id,
  symbol,
  priceUsd,
  volumeUsd24Hr,
  changePercent24Hr,
  marketCapUsd,
}) {
  const dispatch = useDispatch();

  const price = +priceUsd;
  const percent = +changePercent24Hr;
  const volume = +volumeUsd24Hr;

  const onClickAdd = () => {
    const item = {
      rank,
      id,
      symbol,
      priceUsd,
      volumeUsd24Hr,
      changePercent24Hr,
      marketCapUsd,
    };
    dispatch(setSelectedItem(item));
  };

  return (
    <StyledCryptoBlock>
      <td>
        <div className="item-title">
          <Link to={`/${id}`} className="item-link" onClick={onClickAdd}>
            <span className="title-name">{id}</span>
            <span className="title-currency">{symbol}</span>
          </Link>
        </div>
      </td>
      <td className="item-position">{rank}</td>

      <td className="item-price">{price.toFixed(2)} $</td>
      <td
        className="item-percent"
        style={percent > 0 ? { color: "green" } : { color: "red" }}
      >
        {percent.toFixed(2)} %
      </td>
      <td className="item-volume">{volume.toFixed(2)} $</td>
      <td className="item-add" >
        <img src={plusIcon} alt="" />
        <p className="add-text">Add To Case</p>
      </td>
    </StyledCryptoBlock>
  );
}
