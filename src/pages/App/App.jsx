import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";

function App() {
  const categories = useLoaderData();

  return (
    <>
      <header>
        <Link to="/">Home</Link>
      </header>
      <nav>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <NavLink to={category}>Go to: {category}</NavLink>
            </li>
          ))}
          <li>
            <Link to="faq">Frequently Asked Questions</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>
            <Link to="history">History</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
