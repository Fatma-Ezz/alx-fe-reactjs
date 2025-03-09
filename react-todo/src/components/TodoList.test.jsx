import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders the initial todos", () => {
  render(<TodoList />);
  
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("adds a new todo", async () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a new todo");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(addButton);

  expect(await screen.findByText("New Task")).toBeInTheDocument();
});

test("toggles a todo between completed and not completed", () => {
  render(<TodoList />);
  
  const todoItem = screen.getByText("Learn React");
  expect(todoItem).toHaveStyle("text-decoration: none"); // Initially not completed
  
  fireEvent.click(todoItem); // Toggle complete
  
  expect(todoItem).toHaveStyle("text-decoration: line-through"); // Now completed
  
  fireEvent.click(todoItem); // Toggle back
  
  expect(todoItem).toHaveStyle("text-decoration: none"); // Back to not completed
});

test("deletes a todo", async () => {
  render(<TodoList />);
  
  expect(screen.getByText("Learn React")).toBeInTheDocument(); // Ensure it exists
  
  const deleteButtons = await screen.findAllByText("Delete"); // Find delete buttons
  fireEvent.click(deleteButtons[0]);

  await waitFor(() => {
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
