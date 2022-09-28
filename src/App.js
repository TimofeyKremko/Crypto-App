import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CurrencyPage from "./pages/CurrencyPage/CurrencyPage";
import Home from "./pages/Home/Home";
import CasePage from "./pages/CasePage/CasePage";
import { useSelector } from "react-redux/es/exports";
import "./styles.css";

function App() {
  const { id } = useSelector((state) => state.selectedItem.item);

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case" element={<CasePage />} />
            <Route path={"/" + id} element={<CurrencyPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
