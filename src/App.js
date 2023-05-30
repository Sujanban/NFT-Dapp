import { Navbar } from "./components/navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home/Home";
import { Create } from "./components/create/Create";
import { Buy } from "./components/buy/Buy";
import { Sell } from "./components/sell/Sell";

function App() {
  return (
    <div className="App bg-slate-300 w-full h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/create" Component={Create} />
          <Route path="/buy" Component={Buy} />
          <Route path="/sell" Component={Sell} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
