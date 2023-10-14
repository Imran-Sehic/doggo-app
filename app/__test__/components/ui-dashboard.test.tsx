import { mockUIDashboardInterface } from "@/__mocks__";
import UIDashboard from "@/components/ui-dashboard";
import { render, screen } from "@testing-library/react";

test("dashboard renders with two dropdowns and a button", () => {
  render(<UIDashboard {...mockUIDashboardInterface} />);

  const breedDropdown = screen.getByTestId("dropdown-breed");
  const subBreedDropdown = screen.getByTestId("dropdown-sub-breed");
  const searchButton = screen.getByText("Search");

  expect(breedDropdown).toBeInTheDocument();
  expect(subBreedDropdown).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});
