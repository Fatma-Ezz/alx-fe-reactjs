import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders My Todo App header", () => {
  render(<App />);
  const headerElement = screen.getByText(/My Todo App/i);
  expect(headerElement).toBeInTheDocument();
});
