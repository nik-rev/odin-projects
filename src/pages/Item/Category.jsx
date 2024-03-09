import { Link, Outlet, useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";

function Category() {
  const { item } = useParams();
  const products = useLoaderData();

  if (Number.isInteger(+item)) return <Outlet />;

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
