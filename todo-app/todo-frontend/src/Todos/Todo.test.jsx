import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Todo from "./Todo";

describe("Todo component", () => {
  it("renders todo text and status correctly", () => {
    const sampleTodo = {
      text: "Learn Docker multi-stage builds",
      done: false,
    };

    render(
      <Todo todo={sampleTodo} deleteTodo={vi.fn()} completeTodo={vi.fn()} />,
    );

    expect(screen.getByText("Learn Docker multi-stage builds")).toBeTruthy();
    expect(screen.getByText("This todo is not done")).toBeTruthy();
  });
});
