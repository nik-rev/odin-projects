import { useLoaderData } from "react-router-dom";

function Item() {
  const productInfo = useLoaderData();

  const { id, title, price, parentCategory, description, image } = productInfo;

  return (
    <div key={id}>
      <h1>{title}</h1>
      <h2>{price}</h2>
      <h3>{parentCategory}</h3>
      <p>{description}</p>
      <img src={image} alt={title} width="200px" height="auto" />
    </div>
  );
}

export default Item;
