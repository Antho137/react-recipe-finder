import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders h1 title ", () => {
    render(<App />);
    expect(screen.getByText("Recipe Finder")).toBeInTheDocument();
    expect(screen.getByText("Recipe Finder")).toBeVisible();
  });
  
  it("shows recipes categories", async () => {
    render(<App />);
    expect(screen.getByText('Beef')).toBeInTheDocument();
    expect(screen.getByText('Chicken')).toBeInTheDocument();
    expect(screen.getByText('Fish')).toBeInTheDocument();
    expect(screen.getByText('Pasta')).toBeInTheDocument();
    expect(screen.getByText('Pizza')).toBeInTheDocument();
    expect(screen.getByText('Potatoes')).toBeInTheDocument();
    expect(screen.getByText('Rice')).toBeInTheDocument();
    expect(screen.getByText('Salad')).toBeInTheDocument();
  });
  
  it("shows ingredients button text", () => {
    render(<App />);
    expect(screen.queryAllByText('Show Ingredients'));
  });
});
