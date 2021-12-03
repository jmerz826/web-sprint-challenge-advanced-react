import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    // Store the checkout button as variable
    const checkoutBtn = screen.queryByRole('button');

    // Click the checkout button. Form does not have validation, thus empty input fields still produce a success message.
    userEvent.click(checkoutBtn);

    // Asynchronous code, 
    await waitFor(() => {
        // Scans DOM for the success message, saves as variable
        const orderedMessage = screen.queryByTestId('successMessage');

        // Asserts that success message is present in DOM
        expect(orderedMessage).toBeInTheDocument();
    })
});
