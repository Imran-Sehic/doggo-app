import { mockUIListingInterface } from "@/__mocks__";
import UIListing from "@/components/ui-listing";
import { render, screen } from "@testing-library/react";

describe("listing tests", () => {
  test("listing renders correctly, without spinner", () => {
    render(<UIListing {...mockUIListingInterface} />);

    const loader = screen.queryByTestId("loader");
    const heading = screen.getByTestId("listing-heading");
    const images = screen.getAllByAltText(/dog-image-/);

    expect(loader).not.toBeInTheDocument();

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Results for Labrador, Golden");

    expect(images).toHaveLength(3);
  });

  test("spinner should be present in the listing when loading is true", () => {
    render(<UIListing {...mockUIListingInterface} isLoading />);

    const loader = screen.queryByTestId("loader");

    expect(loader).toBeInTheDocument();
  });
});
