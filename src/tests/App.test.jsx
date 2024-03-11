import {
  Route,
  createRoutesFromElements,
  createMemoryRouter,
  RouterProvider,
  useParams,
  useLocation,
  Outlet,
} from "react-router-dom";
import { render } from "@testing-library/react";
import Category from "../pages/Item/Category";

const fakeLoader = (simulateError) => {
  if (simulateError) {
    throw new Error("Could not fetch the items");
  }

  // Get every item [Object] in a category [Array]
  return [
    {
      id: 123,
      title: "Title",
      price: 34.2,
      parentCategory: "I don't know!",
      description: "Cool thing",
      image:
        "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
  ];
};

function TestComponent() {
  return <h3>OOO</h3>;
}
describe("Testing app page", () => {
  it("Jewelry page has certain jewel", () => {
    const testRouter = createMemoryRouter(
      createRoutesFromElements(
        <Route
          path="/"
          element={
            <>
              <h1>Fake</h1>
              <Outlet />
            </>
          }
        >
          <Route path=":category" element={<h2>Also fake</h2>} />
        </Route>
      ),
      {
        initialEntries: ["/jewelry"],
      }
    );

    const { debug } = render(<RouterProvider router={testRouter} />);

    debug();
  });
});
