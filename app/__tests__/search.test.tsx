import { render, screen } from "@testing-library/react";
import { searchProductsByName } from "@/sanity/lib/products/searchProductsByName";
import "@testing-library/jest-dom";
import Searchpage from "../(store)/search/page";

// Mock `searchProductsByName` function
jest.mock("@/sanity/lib/products/searchProductsByName", () => ({
  searchProductsByName: jest.fn(),
}));

// Mock ProductGrid component (optional)
jest.mock("@/components/ProductGrid", () => () => <div data-testid="product-grid" />);

describe("Searchpage Component", () => {
  it("renders 'No Products Found' when no products match the search", async () => {
    (searchProductsByName as jest.Mock).mockResolvedValue([]); // Return empty array

    render(await Searchpage({ searchParams: { query: "nonexistent" } }));

    expect(screen.getByText(/No Products Found/i)).toBeInTheDocument();
    expect(screen.getByText(/We couldn’t find any products/i)).toBeInTheDocument();
  });

  it("renders the ProductGrid when products are found", async () => {
    const mockProducts = [
      { _id: "1", name: "Test Product", price: 100, image: "test-image.jpg" },
    ];

    (searchProductsByName as jest.Mock).mockResolvedValue(mockProducts);

    render(await Searchpage({ searchParams: { query: "test" } }));

    expect(screen.getByText(/Search Results for test/i)).toBeInTheDocument();
    expect(screen.getByText(/We found 1 products/i)).toBeInTheDocument();
    expect(screen.getByTestId("product-grid")).toBeInTheDocument();
  });
});
