import React from "react";
import logoSrc from "../../assets/img/logo.png";
import caseSrc from "../../assets/img/case.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import { StyledHeader } from "./styles";
import HeaderCryptos from "../HeaderCrypto/HeaderCrypto";

export default function Header() {
  const items = useSelector((state) => state.crypto.items);

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
              134,32 USD +2,38 <span className="wallet-percent">(1,80 %)</span>{" "}
            </p>
          </div>
        </Link>
      </div>
    </StyledHeader>
  );
}
