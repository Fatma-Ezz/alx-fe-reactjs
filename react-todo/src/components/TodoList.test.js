import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

test("renders initial todo items", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByRole("textbox");
  const button = screen.getByText("Add Todo");

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(button);

  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("toggles a todo item", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: none");
});

test("deletes a todo item", () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText("Delete")[0];

  fireEvent.click(deleteButton);
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../TodoList';

test('renders the TodoList component', () => {
  render(<TodoList />);
  const headingElement = screen.getByText(/Todo List/i);
  expect(headingElement).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const inputElement = screen.getByPlaceholderText(/Add a new todo/i);
  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText(/Add Todo/i));
  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

test('toggles a todo item', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Learn React/i);
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo item', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Learn React/i);
  fireEvent.click(screen.getByText(/Delete/i, { selector: 'button' }));
  expect(todoItem).not.toBeInTheDocument();
});
