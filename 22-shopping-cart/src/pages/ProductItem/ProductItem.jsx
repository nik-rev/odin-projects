import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const StyledButton = styled.button`
  background-color: black;
  color: white;
  border-radius: 2em;
  &:hover {
    background-color: white;
    color: black;
  }
`;

function Item({ setOrderedItems }) {
  const productInfo = useLoaderData();

  const { id, title, price, parentCategory, description, image } = productInfo;

  const handleClick = () => {
    setOrderedItems((prevIds) => {
      return [
        ...prevIds,
        <div key={crypto.randomUUID()}>
          <h1>{title}</h1>
          <h2>{price}</h2>
          <h3>{parentCategory}</h3>
          <p>{description}</p>
          <img src={image} alt={title} width="200px" height="auto" />
        </div>,
      ];
    });
  };

  return (
    <div key={id}>
      <h1>{title}</h1>
      <h2>{price}</h2>
      <h3>{parentCategory}</h3>
      <p>{description}</p>
      <img src={image} alt={title} width="200px" height="auto" />
      <StyledButton onClick={handleClick}>ADD TO CART</StyledButton>
    </div>
  );
}

Item.propTypes = {
  setOrderedItems: PropTypes.func.isRequired,
};

export default Item;
