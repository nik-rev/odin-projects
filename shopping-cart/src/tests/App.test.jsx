import {
  Route,
  createRoutesFromElements,
  createMemoryRouter,
  RouterProvider,
  useParams,
  useLocation,
  Outlet,
} from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import Category from "../pages/Item/Category";

const fakeLoader = async (simulateError) => {
  await setTimeout(() => {
    // if (simulateError) {
    //   throw new Error("Could not fetch the items");
    // }
    // Get every item [Object] in a category [Array]
  }, 50);

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

const mockLoader = vi.fn(() => Promise.resolve(5));

describe("Testing app page", () => {
  it("Jewelry page has certain jewel", async () => {
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
          <Route path=":category" element={<Category />} loader={fakeLoader} />
        </Route>
      ),
      {
        initialEntries: ["/jewelry"],
      }
    );
    const { debug } = render(<RouterProvider router={testRouter} />);
    await waitFor(() => {
      expect(screen.getByText("Title")).toBeInTheDocument();
    });

    debug();
  });
});
