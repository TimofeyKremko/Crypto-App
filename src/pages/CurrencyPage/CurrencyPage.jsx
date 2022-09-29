import React, { useEffect, useState } from "react";
import { StyledCurrencyPage } from "./styles";
import plusIconPath from "../../assets/img/plus.svg";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setItemHistory } from "../../redux/slices/selectedItemSlice";
import axios from "axios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function CurrencyPage() {
  const dispatch = useDispatch();

  const { rank, id, priceUsd, volumeUsd24Hr, marketCapUsd, changePercent24Hr } =
    useSelector((state) => state.selectedItem.item);

  const { prices, dates } = useSelector((state) => state.selectedItem.history);

  const labels = [...dates];

  const data = {
    labels,
    datasets: [
      {
        data: [...prices],
        borderColor: "#232325",
      },
    ],
  };

  console.log(dates);
  console.log(prices);

  const getPriceData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.coincap.io/v2/assets/${id}/history?interval=d1`
      );
      const fetchedData = data.data.slice(-20);
      console.log(fetchedData);
      dispatch(setItemHistory(fetchedData));
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    getPriceData();
  }, []);

  const price = +priceUsd;
  const volume = +volumeUsd24Hr;
  const cap = +marketCapUsd;
  const percent = +changePercent24Hr;
  return (
    <StyledCurrencyPage>
      <div className="currency-container">
        <div className="currency-content">
          <div className="currency-logo">
            <h2>{id}</h2>
            <p className="rank-text">rank: #{rank}</p>
          </div>
          <div className="currency-info">
            <div className="chart"></div>
            <div className="currency-about">
              <Line options={options} data={data} />
            </div>
          </div>
        </div>
        <div className="currency-stats">
          <ul className="stats-list">
            <li className="list-item">
              <p className="item-title">Market cap</p>
              <p className="item-value">$ {cap.toFixed(2)}</p>
            </li>
            <li className="list-item">
              <p className="item-title">Price</p>
              <p className="item-value">$ {price.toFixed(2)}</p>
            </li>
            <li className="list-item">
              <p className="item-title">24 Hour Trading Volume</p>
              <p className="item-value">$ {volume.toFixed(2)}</p>
            </li>
            <li className="list-item">
              <p className="item-title">Change Percent</p>
              <p
                className="item-value"
                style={percent > 0 ? { color: "green" } : { color: "red" }}
              >
                {percent.toFixed(2)} %
              </p>
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
