import UINavigation from "@/components/ui-navigation";
import { render, screen } from "@testing-library/react";

test("navigation links redirect to correct pages", () => {
  render(<UINavigation />);

  const logoLink = screen.getByText("Doggo");
  const aboutLink = screen.getByText("About");

  expect(logoLink).toHaveAttribute("href", "/");
  expect(aboutLink).toHaveAttribute("href", "/about");
});
