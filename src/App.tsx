import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Converter } from "./pages/converter";
import { CurrencyRates } from "./pages/currency-rates";
import { Header } from "./components/header/header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Converter />} />
        <Route path="/watchlist" element={<CurrencyRates />} />
      </Routes>
    </Router>
  );
};

export default App;
