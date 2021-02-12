import React from "react";
// Get screen from react testing library
import { render, screen } from "@testing-library/react";
// Import userEvent
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  // Arrange
  render(<CheckoutForm />)

  // Act
  const heading = screen.getByRole('heading')

  // Assert
  expect(heading).toBeInTheDocument()
  expect(heading).toHaveTextContent('Checkout Form')
  // Double checked that it's not a false positive ✅
});

test("form shows success message on submit with form details", () => {
  /// Arrange ///
  render(<CheckoutForm />)

  /// Act ///
  const firstName = screen.getByLabelText(/first name/i)
  const lastName = screen.getByLabelText(/last name/i)
  const address = screen.getByLabelText(/address/i)
  const city = screen.getByLabelText(/city/i)
  const state = screen.getByLabelText(/state/i)
  const zip = screen.getByLabelText(/zip/i)
  const button = screen.getByRole('button', { name: /checkout/i })

  // type into form
  userEvent.type(firstName, 'Elliot')
  userEvent.type(lastName, 'Alderson')
  userEvent.type(address, '1216 Surf Avenue')
  userEvent.type(city, 'New York City')
  userEvent.type(state, 'New York')
  userEvent.type(zip, '11224')

  // click checkout button
  userEvent.click(button)

  const successMessage = screen.getByTestId('successMessage')

  /// Assert ///
  expect(successMessage).toBeInTheDocument() // double checked for false positive ✅
});
