const productLoader = async ({ params }) => {
  const { item: id } = params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!response.ok) {
    throw new Error("Could not fetch the item");
  }

  return response.json();
};

export default productLoader;
