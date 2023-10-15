import { mockUIDropdownInterface } from "@/__mocks__";
import UIDropdown from "@/ui-kit/ui-dropdown";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

test("dropdown component renders correctly and behaves as expected", async () => {
  render(<UIDropdown {...mockUIDropdownInterface} />);

  const heading = screen.getByText("Breed");
  const selectedOption = screen.getByText("Option1");

  expect(heading).toBeInTheDocument();
  // Default option should be selected
  expect(selectedOption).toBeInTheDocument();

  // Dropdown is initially closed
  expect(screen.queryByText("Option2")).not.toBeInTheDocument();
  expect(screen.queryByText("Option3")).not.toBeInTheDocument();

  // Clicking on the selected option should open the dropdown
  fireEvent.click(selectedOption);
  await waitFor(() => {
    expect(screen.queryByText("Option2")).toBeVisible();
  });
  expect(screen.queryByText("Option3")).toBeVisible();

  // Clicking on an option should set the correct selected option and close the dropdown
  fireEvent.click(screen.getByText("Option2"));
  expect(mockUIDropdownInterface.setOption).toHaveBeenCalledWith("Option2");
  await waitFor(() => {
    expect(screen.queryByText("Option2")).not.toBeInTheDocument();
  });
  expect(screen.queryByText("Option3")).not.toBeInTheDocument();
});
