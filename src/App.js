import "./App.css";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Main from "./components/Body/Maincomponents/Main";
import Loader from "./components/Common/Loader/Loader";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
      <Footer />
    </div>
  );
}

export default App;
