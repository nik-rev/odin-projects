import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductItem() {
  const [productInfo, setProductInfo] = useState({});
  const productId = useParams();
  const { id, title, price, parentCategory, description, image } = productInfo;

  useEffect(() => {
    (async () => {
      const data = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      ).then((r) => r.json());
      setProductInfo(data);
    })();
  }, [productId]);

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

export default ProductItem;
