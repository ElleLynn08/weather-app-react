
import "./App.css";

import Header from "./Header";
import "./Header.css";

import Search from "./Search";
import "./Search.css";

import Footer from "./Footer";
import "./Footer.css";

import Weather from "./Weather";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="card-container">
        <Search />
        <Weather />
      </div>
      <Footer />
    </div>
  );
}
