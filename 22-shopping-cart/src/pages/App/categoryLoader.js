const categoryLoader = async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");

  if (!response.ok) {
    throw new Error("Could not fetch the categories");
  }

  return response.json();
};

export default categoryLoader;
