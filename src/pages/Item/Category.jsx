import { Link, useLoaderData } from "react-router-dom";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

const ItemCard = styled(Link)`
  background-color: var(--primaryDark500);
  padding: 4em;
  font-size: 0.8rem;
  margin: 2em;
  display: grid;
  grid-template-areas:
    "title price"
    "parentCategory ."
    "description description"
    "image image"
    "image image";
  & > h1 {
    grid-area: title;
  }
  & > h2 {
    grid-area: price;
    justify-self: end;
  }
  & > h3 {
    grid-area: parentCategory;
  }
  & > p {
    grid-area: description;
  }
  & > img {
    grid-area: image;
  }
`;

function Category() {
  const products = useLoaderData();

  return (
    <Grid>
      {products.map(
        ({ id, title, price, parentCategory, description, image }) => (
          <ItemCard key={id} to={id.toString()}>
            <h1>{title}</h1>
            <h2>{price}</h2>
            <h3>{parentCategory}</h3>
            <p>{description}</p>
            <img src={image} alt={title} width="200px" height="auto" />
          </ItemCard>
        )
      )}
    </Grid>
  );
}

export default Category;
