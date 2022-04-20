import Pages from "./pages/Pages";
import Categories from "./compnents/Categories";
import Search from "./compnents/Search";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
