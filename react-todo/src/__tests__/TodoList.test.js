import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TodoList from "../components/TodoList";
test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a new todo");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(addButton);

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("deletes a todo", async () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText("Delete")[0]; // Get first delete button

  fireEvent.click(deleteButton);

  await waitFor(() => {
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
