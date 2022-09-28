import React from "react";
import { StyledCurrencyPage } from "./styles";
import currencyLogo from "../../assets/img/cryptologo.png";
import plusIconPath from "../../assets/img/plus.svg"
import { useSelector } from "react-redux/es/exports";

export default function CurrencyPage() {

  return (
    <StyledCurrencyPage>
      <div className="currency-container">
        <div className="currency-content">
          <div className="currency-logo">
            <img src={currencyLogo} alt="" />
            <h2>bitcoin</h2>
          </div>
          <div className="currency-info">
            <div className="chart"></div>
            <div className="currency-about">
              <p className="currency-text">
                About Bitcoin (BTC) Bitcoin is the first successful internet
                money based on peer-to-peer technology; whereby no central bank
                or authority is involved in the transaction and production of
                the Bitcoin currency. It was created by an anonymous
                individual/group under the name, Satoshi Nakamoto. The source
                code is available publicly as an open source project, anybody
                can look at it and be part of the developmental process. Bitcoin
                is changing the way we see money as we speak. The idea was to
                produce a means of exchange, independent of any central
                authority, that could be transferred electronically in a secure,
                verifiable and immutable way. It is a decentralized peer-to-peer
                internet currency making mobile payment easy, very low
                transaction fees, protects your identity, and it works anywhere
                all the time with no central authority and banks. Bitcoin is
                designed to have only 21 million BTC ever created, thus making
                it a deflationary currency. Bitcoin uses the SHA-256 hashing
                algorithm with an average transaction confirmation time of 10
                minutes. Miners today are mining Bitcoin using ASIC chip
                dedicated to only mining Bitcoin, and the hash rate has shot up
                to peta hashes. Being the first successful online cryptography
                currency, Bitcoin has inspired other alternative currencies such
                as Litecoin, Peercoin, Primecoin, and so on. The cryptocurrency
                then took off with the innovation of the turing-complete smart
                contract by Ethereum which led to the development of other
                amazing projects such as EOS, Tron, and even crypto-collectibles
                such as CryptoKitties.
              </p>
            </div>
          </div>
        </div>
        <div className="currency-stats">
          <ul className="stats-list">
            <li className="list-item">
              <p className="item-title">Market cap</p>
              <p className="item-value">$ 19060,12</p>
            </li>
            <li className="list-item">
              <p className="item-title">Fully Diluted Valuation</p>
              <p className="item-value">$ 19060,12</p>
            </li>
            <li className="list-item">
              <p className="item-title">24 Hour Trading Volume</p>
              <p className="item-value">$ 19060,12</p>
            </li>
            <li className="list-item">
              <p className="item-title">24h High</p>
              <p className="item-value">$ 19060,12</p>
            </li>
          </ul>
          <div className="currency-add-btn">
            <img src={plusIconPath} alt="" />
            <p className="btn-text">Add To Case</p>
          </div>
        </div>
      </div>
    </StyledCurrencyPage>
  );
}
