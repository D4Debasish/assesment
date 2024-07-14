// src/components/mainComponents/__tests__/Fourbuttons.test.tsx
import React from "react";
import { cleanup, render } from "@testing-library/react";
import Fourbuttons from "@/components/mainComponents/Fourbuttons";

afterEach(() => {
  cleanup();
});

describe("Check if 4 buttons are rendered properly", () => {
  it("renders ", () => {
    const { getByText } = render(<Fourbuttons />);

    expect(getByText("Gender")).toBeInTheDocument();
    expect(getByText("Collection")).toBeInTheDocument();
    expect(getByText("Sort By")).toBeInTheDocument();
    expect(getByText("Filter")).toBeInTheDocument();
  });
});
