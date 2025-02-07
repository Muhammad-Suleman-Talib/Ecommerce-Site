import AddtoBasketButton from '@/components/AddtoBasketButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom for matchers

describe('AddtoBasketButton Component', () => {
  it('renders the AddtoBasketButton component', () => {
    render(<AddtoBasketButton product={{ _id: '1', name: 'Product 1' }} />);
    
    // Look for the "+" button instead of "Add to Basket"
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
  });

  it('displays the initial item count', () => {
    const product = { _id: '1', name: 'Product 1', price: 100 }; // Ensure product has all required props
    const initialItemCount = 0;

    render(<AddtoBasketButton product={product} />);

    // Ensure the count is displayed
    expect(screen.getByText(initialItemCount.toString())).toBeInTheDocument();
  });
});
