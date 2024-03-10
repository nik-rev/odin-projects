import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import styled from "styled-components";

const NavItem = styled.li`
  &:hover {
    background-color: darkgray;
  }
  background-color: gray;
  font-size: 0.8rem;
  padding: 1em 4em;
  display: grid;
  place-content: center;
  border-radius: 2em;
`;

const NavBar = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

const Header = styled.header`
  background-color: orange;
`;

function App() {
  const categories = useLoaderData();

  return (
    <>
      <Header>
        <Link to="/">Home</Link>
      </Header>
      <nav>
        <NavBar>
          {categories.map((category) => (
            <NavItem key={category}>
              <NavLink to={category}>Go to: {category}</NavLink>
            </NavItem>
          ))}
          <NavItem>
            <Link to="faq">Frequently Asked Questions</Link>
          </NavItem>
          <NavItem>
            <Link to="contact">Contact Us</Link>
          </NavItem>
          <NavItem>
            <Link to="history">History</Link>
          </NavItem>
          <NavItem>
            <Link to="cart">Cart</Link>
          </NavItem>
        </NavBar>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
