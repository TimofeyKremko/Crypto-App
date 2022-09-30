import { StyledCase } from "./styles";
import caseIconPath from "../../assets/img/case.svg";
import { useDispatch, useSelector } from "react-redux";
import CaseItem from "../../components/CaseItem/CaseItem";
import trashIcon from "../../assets/img/trash-icon.png";
import { clearItems } from "../../redux/slices/walletSlice";

export default function WalletPage() {
  const dispatch = useDispatch();
  const walletItems = useSelector((state) => state.wallet.items);

  const render = walletItems.map((item) => <CaseItem {...item} />);

  return (
    <StyledCase>
      <div className="case-container">
        <img
          src={trashIcon}
          className="trash-btn"
          width={30}
          alt=""
          onClick={() => dispatch(clearItems())}
        />

        <div className="case-top">
          <img src={caseIconPath} alt="" />
          <h2 className="case-title">Case</h2>
        </div>

        <table className="crypto-table">
          <thead>
            <tr>
              <th className="column-title">Coins</th>
              <th className="column-title">Value</th>
              <th className="column-title">Price</th>
              <th className="column-title">24h</th>
              <th className="column-title">You have</th>
              <th className="column-title">Action</th>
            </tr>
          </thead>
          <tbody className="table-body">{render}</tbody>
        </table>
      </div>
    </StyledCase>
  );
}
