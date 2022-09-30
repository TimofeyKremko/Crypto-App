import { StyledCase } from "./styles";
import caseIconPath from "../../assets/img/case.svg";
import { useSelector } from "react-redux";
import CaseItem from "../../components/CaseItem/CaseItem";

export default function WalletPage() {
  const cartItems = useSelector((state) => state.wallet.items);

  console.log(cartItems)

  const renderCartItems = () => {
    cartItems.map((item) => <CaseItem {...item} />);
  };

  const render = cartItems.map((item) => <CaseItem {...item} />);


  return (
    <StyledCase>
      <div className="case-container">
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
              <th className="column-title">Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
          {
            render
          }
          </tbody>
        </table>
      </div>
    </StyledCase>
  );
}
