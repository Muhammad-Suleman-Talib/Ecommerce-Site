import { render, screen } from "@testing-library/react";
import { getProductsBySlug } from "@/sanity/lib/products/getProductsBySlug";
import "@testing-library/jest-dom";
import { ToastContainer } from "react-toastify";
import ProductPage from "../(store)/product/[slug]/page";

// Mock the getProductsBySlug function
jest.mock("@/sanity/lib/products/getProductsBySlug", () => ({
  getProductsBySlug: jest.fn(),
}));

describe("ProductPage Component", () => {
  it("renders 'Product not found' when product is null", async () => {
    (getProductsBySlug as jest.Mock).mockResolvedValue(null);

    render(<ProductPage params={{ slug: "non-existent-product" }} />);

    expect(await screen.findByText("Product not found")).toBeInTheDocument();
  });

  it("renders product details when product is found", async () => {
    const mockProduct = {
      _id: "1",
      name: "Test Product",
      price: 5000,
      stock: 10,
      description: "<p>This is a test product description.</p>",
      image: "/test-image.jpg",
    };

    (getProductsBySlug as jest.Mock).mockResolvedValue(mockProduct);

    render(<ProductPage params={{ slug: "test-product" }} />);
    
    expect(await screen.findByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Rs 5000")).toBeInTheDocument();
    expect(screen.getByText("This is a test product description.")).toBeInTheDocument();
  });

  it("renders 'Out of Stock' label when stock is 0", async () => {
    const mockOutOfStockProduct = {
      _id: "2",
      name: "Out of Stock Product",
      price: 3000,
      stock: 0,
      description: "<p>Out of stock description.</p>",
      image: "/outofstock-image.jpg",
    };

    (getProductsBySlug as jest.Mock).mockResolvedValue(mockOutOfStockProduct);

    render(<ProductPage params={{ slug: "out-of-stock-product" }} />);

    expect(await screen.findByText("Out of Stock")).toBeInTheDocument();
    expect(screen.getByText("Out of Stock Product")).toBeInTheDocument();
    expect(screen.getByText("Rs 3000")).toBeInTheDocument();
  });

  it("renders AddtoBasketButton", async () => {
    const mockProduct = {
      _id: "3",
      name: "Test Product",
      price: 2000,
      stock: 5,
      description: "<p>Test product description.</p>",
      image: "/test-image.jpg",
    };

    (getProductsBySlug as jest.Mock).mockResolvedValue(mockProduct);

    render(<ProductPage params={{ slug: "test-product" }} />);
    
    expect(await screen.findByRole("button")).toBeInTheDocument();
  });
  jest.mock("@/sanity/lib/client", () => ({
    sanityClient: {
      fetch: jest.fn(),
    },
  }));
  
});
