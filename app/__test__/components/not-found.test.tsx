import Custom404Page from "@/not-found";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

test("404 page renders with a link to homepage", () => {
  render(<Custom404Page />);

  const homepageLink = screen.getByText("homepage");

  expect(homepageLink).toBeInTheDocument();
  expect(homepageLink).toHaveAttribute("href", "/");
});
