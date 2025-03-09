import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("adds a new todo", async () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a new todo");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(addButton);

  // Wait for new todo to appear
  expect(await screen.findByText("New Task")).toBeInTheDocument();
});

test("deletes a todo", async () => {
  render(<TodoList />);
  
  // Ensure "Learn React" exists before deletion
  expect(screen.getByText("Learn React")).toBeInTheDocument();

  const deleteButtons = await screen.findAllByText("Delete"); // Wait for buttons to load
  fireEvent.click(deleteButtons[0]);

  // Wait for the item to disappear
  await waitFor(() => {
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
