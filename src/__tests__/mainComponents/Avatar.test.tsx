import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Avatars from "@/components/mainComponents/Avatar";

afterEach(() => {
  cleanup();
});

const data = [
  { id: 1, name: "Akshay", image: "/assets/image1.jpg" },
  { id: 2, name: "Bipin", image: "/assets/image2.jpg" },
];

describe("Avatar Test", () => {
  it("If rendering avatars", () => {
    const { getByText } = render(<Avatars avatars={data} />);
    expect(getByText("Akshay")).toBeInTheDocument();
    expect(getByText("Bipin")).toBeInTheDocument();
  });
});
