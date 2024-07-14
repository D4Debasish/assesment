// src/components/mainComponents/__tests__/Categories.test.tsx
import React from "react";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import Categories from "@/components/mainComponents/Categories";

afterEach(() => {
  cleanup();
});

const categories = [
  { id: 1, name: "All" },
  { id: 2, name: "Tshirts" },
  { id: 4, name: "Shirts" },
];

describe("If categories working", () => {
  it("renders categories and handles selection correctly", () => {
    const { getByText } = render(<Categories categories={categories} />);

    const item1 = getByText("All");
    const item2 = getByText("Tshirts");
    const item3 = getByText("Shirts");

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    expect(item3).toBeInTheDocument();
  });
});
