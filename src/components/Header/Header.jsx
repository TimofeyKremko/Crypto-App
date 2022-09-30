import React from "react";
import logoSrc from "../../assets/img/logo.png";
import caseSrc from "../../assets/img/case.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import { StyledHeader } from "./styles";
import HeaderCryptos from "../HeaderCrypto/HeaderCrypto";

export default function Header() {
  const items = useSelector((state) => state.crypto.items);
  const {totalPrice, totalPercent} = useSelector((state) => state.wallet);

  const topCryptos = items
    .slice(0, 3)
    .map((item) => <HeaderCryptos key={item.id} {...item} />);

  return (
    <StyledHeader>
      <div className="header-container">
        <Link to={"/"}>
          <div className="header-logo">
            <img src={logoSrc} alt="Logo" />
          </div>
        </Link>
        <div className="header-crypto">{topCryptos}</div>
        <Link to={"/case"} className="header-wallet">
          <div className="header-wallet">
            <img src={caseSrc} alt="" />
            <p className="wallet-value">
              $ {totalPrice.toFixed(2)}{" "}
              <span
                style={
                  totalPercent > 0 ? { color: "#c3e958" } : { color: "red" }
                }
              >
                ({totalPercent.toFixed(2)}%)
              </span>
            </p>
          </div>
        </Link>
      </div>
    </StyledHeader>
  );
}
