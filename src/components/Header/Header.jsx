import React from "react";
import logoSrc from "../../assets/img/logo.png";
import caseSrc from "../../assets/img/case.svg";
import cryptoLogo from "../../assets/img/cryptologo.png";
import { Link } from "react-router-dom";

import { StyledHeader } from "./styles";

export default function Header() {
  return (
    <StyledHeader className="header">
      <div className="header-container">
        <Link to={"/"}>
          <div className="header-logo">
            <img src={logoSrc} alt="Logo" />
          </div>
        </Link>
        <div className="header-crypto">
          <div className="crypto-item">
            <img src={cryptoLogo} alt="" />
            <p className="crypto-title">
              Bitcoin: <span className="crypto-value">191.023 $</span>
            </p>
          </div>
          <div className="crypto-item">
            <img src={cryptoLogo} alt="" />
            <p className="crypto-title">
              Bitcoin: <span className="crypto-value">191.023 $</span>
            </p>
          </div>
          <div className="crypto-item">
            <img src={cryptoLogo} alt="" />
            <p className="crypto-title">
              Bitcoin: <span className="crypto-value">191.023 $</span>
            </p>
          </div>
        </div>
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
