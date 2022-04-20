import Pages from "./pages/Pages";
import Categories from "./compnents/Categories";
import Search from "./compnents/Search";
import { BrowserRouter, Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import styled from "styled-components";
import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Deliciousss</Logo>
        </Nav>
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-family: "Lobster Tow", cursive;
  font-weight: 400;
  cursor: pointer;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;
export default App;
