import React from "react";
import { cleanup, render } from "@testing-library/react";
import ImageList from "@/components/mainComponents/ImageList";

afterEach(() => {
  cleanup();
});

const images = [
  { id: 1, src: "/assets/img1.webp" },
  { id: 2, src: "/assets/img2.webp" },
];

describe("Images check", () => {
  it("renders images correctly", () => {
    const { getByAltText } = render(<ImageList images={images} />);
    expect(getByAltText("images-1")).toBeInTheDocument();
    expect(getByAltText("images-2")).toBeInTheDocument();
  });
});
