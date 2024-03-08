import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch(
        "https://fakestoreapi.com/products/categories"
      ).then((r) => r.json());
      setCategories(data);
    })();
  }, []);

  return (
    <div>
      {categories.map((category) => {
        return (
          <Fragment key={category}>
            <Link to={category}>Go to: {category}</Link>
            <br />
          </Fragment>
        );
      })}
    </div>
  );
}

export default Home;
