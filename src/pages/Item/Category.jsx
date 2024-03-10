import { Link, useLoaderData } from "react-router-dom";

function Category() {
  const products = useLoaderData();

  return (
    <div>
      {products.map(
        ({ id, title, price, parentCategory, description, image }) => (
          <Link key={id} to={id.toString()}>
            <h1>{title}</h1>
            <h2>{price}</h2>
            <h3>{parentCategory}</h3>
            <p>{description}</p>
            <img src={image} alt={title} width="200px" height="auto" />
          </Link>
        )
      )}
    </div>
  );
}

export default Category;
