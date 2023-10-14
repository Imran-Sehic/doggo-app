import UIHero from "@/components/ui-hero";
import { render, screen } from "@testing-library/react";

test("renders hero with image", () => {
  render(<UIHero />);

  const imageElement = screen.getByAltText("dog image");

  expect(imageElement).toBeInTheDocument();
});
