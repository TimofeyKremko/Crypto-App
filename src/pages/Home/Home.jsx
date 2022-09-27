import { useEffect } from "react";
import { StyledHome } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../redux/slices/cryptoSlice";
import axios from "axios";
import CryptoBlock from "../../components/CryptoBlock/CryptoBlock";

export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.crypto.items);

  const fetchCryptos = async () => {
    try {
      const { data } = await axios.get("https://api.coincap.io/v2/assets");
      dispatch(setItems(data.data));
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchCryptos();
  }, []);

  console.log(items);

  const renderItems = items.map((item) => (
    <CryptoBlock key={item.id} {...item} />
  ));

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

          <tbody className="table-body">{renderItems}</tbody>
        </table>
      </div>
    </StyledHome>
  );
}
