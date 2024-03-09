const itemLoader = async ({ params }) => {
  const { category } = params;
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);

  if (!response.ok) {
    throw new Error("Could not fetch the items");
  }

  return response.json();
};

export default itemLoader;