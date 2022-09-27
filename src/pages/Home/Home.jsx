import React from "react";
import cryptologo from "../../assets/img/cryptologo.png";
import { StyledHome } from "./styles";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <StyledHome>
      <div className="container">
        <table className="crypto-table">
          <thead>
            <tr>
              <th className="column-title">#</th>
              <th className="column-title">Coins</th>
              <th className="column-title">Price</th>
              <th className="column-title">24h</th>
              <th className="column-title">Volume(24h)</th>
              <th className="column-title">Market Cap</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr class="item">
              <td class="item-position">1</td>
              <td>
                <div class="item-title">
                  <Link to={"/currency/name"} className="item-link">
                    <img alt="coin_icon" class="item-image" src={cryptologo} />
                    <span class="title-name">bitcoin</span>
                    <span class="title-currency">BTC</span>
                  </Link>
                </div>
              </td>
              <td class="item-price">$20&nbsp;261</td>
              <td class="item-percent">8.16%</td>
              <td class="item-volume">$49&nbsp;371&nbsp;566&nbsp;837</td>
              <td class="item-market">$387&nbsp;627&nbsp;666&nbsp;362</td>
            </tr>
            <tr class="item">
              <td class="item-position">1</td>
              <td>
                <div class="item-title">
                  <Link to={"/currency/name"} className="item-link">
                    <img alt="coin_icon" class="item-image" src={cryptologo} />
                    <span class="title-name">bitcoin</span>
                    <span class="title-currency">BTC</span>
                  </Link>
                </div>
              </td>
              <td class="item-price">$20&nbsp;261</td>
              <td class="item-percent">8.16%</td>
              <td class="item-volume">$49&nbsp;371&nbsp;566&nbsp;837</td>
              <td class="item-market">$387&nbsp;627&nbsp;666&nbsp;362</td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledHome>
  );
}
