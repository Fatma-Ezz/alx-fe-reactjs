import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList"; // Adjust the import based on your folder structure

test("deletes a todo", () => {
  render(<TodoList />);

  // Find the todo item
  const todoItem = screen.getByText("Learn React");
  expect(todoItem).toBeInTheDocument();

  // Click the delete button
  const deleteButton = screen.getByText("Delete");
  fireEvent.click(deleteButton);

  // Wait for the item to be removed
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
