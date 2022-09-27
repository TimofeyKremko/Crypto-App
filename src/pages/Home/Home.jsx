import React from "react";
import cryptologo from "../../assets/img/cryptologo.png";
import { useEffect } from "react";
import { StyledHome } from "./styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../redux/slices/cryptoSlice";
import axios from "axios";

export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.crypto.items);

  const fetchCryptos = async () => {
    try {
      const { data } = await axios.get("https://api.coincap.io/v2/assets");
      dispatch(setItems(data));
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchCryptos();
  }, []);



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
            <tr className="item">
              <td className="item-position">1</td>
              <td>
                <div className="item-title">
                  <Link to={"/currency/name"} className="item-link">
                    <img
                      alt="coin_icon"
                      className="item-image"
                      src={cryptologo}
                    />
                    <span className="title-name">bitcoin</span>
                    <span className="title-currency">BTC</span>
                  </Link>
                </div>
              </td>
              <td className="item-price">$20&nbsp;261</td>
              <td className="item-percent">8.16%</td>
              <td className="item-volume">$49&nbsp;371&nbsp;566&nbsp;837</td>
              <td className="item-market">$387&nbsp;627&nbsp;666&nbsp;362</td>
            </tr>
            <tr className="item">
              <td className="item-position">1</td>
              <td>
                <div className="item-title">
                  <Link to={"/currency/name"} className="item-link">
                    <img
                      alt="coin_icon"
                      className="item-image"
                      src={cryptologo}
                    />
                    <span className="title-name">bitcoin</span>
                    <span className="title-currency">BTC</span>
                  </Link>
                </div>
              </td>
              <td className="item-price">$20&nbsp;261</td>
              <td className="item-percent">8.16%</td>
              <td className="item-volume">$49&nbsp;371&nbsp;566&nbsp;837</td>
              <td className="item-market">$387&nbsp;627&nbsp;666&nbsp;362</td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledHome>
  );
}
