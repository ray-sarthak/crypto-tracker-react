import {BrowserRouter,Route,Routes} from "react-router-dom"
import "./App.css";

import Home from "./pages/Home/Home";
import Coinpage from "./pages/Coinpage/Coinpage";
import ComparePage from "./pages/ComparePage/ComparePage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Watchlist from "./pages/WatchlistPage/Watchlist";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/coinpage" element={<Coinpage/>}/>
      <Route path="/comparepage" element={<ComparePage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/watchlist" element={<Watchlist/>}/>
      
      </Routes>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
