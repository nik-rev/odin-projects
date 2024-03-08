import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductCategory() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    (async () => {
      const data = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      ).then((r) => r.json());
      setProducts(data);
    })();
  }, [category]);

  return (
    <>
      {products.map(
        ({ id, title, price, parentCategory, description, image }) => {
          return (
            <Link key={id} to={id}>
              <h1>{title}</h1>
              <h2>{price}</h2>
              <h3>{parentCategory}</h3>
              <p>{description}</p>
              <img src={image} alt={title} width="200px" height="auto"></img>
            </Link>
          );
        }
      )}
    </>
  );
}

export default ProductCategory;
