import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CurrencyPage from "./pages/CurrencyPage/CurrencyPage";
import Home from "./pages/Home/Home";
import CasePage from "./pages/CasePage/CasePage";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case" element={<CasePage />} />
            <Route path="/currency/name" element={<CurrencyPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
