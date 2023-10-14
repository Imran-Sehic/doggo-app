import { UIDashboardInterface } from "@/components/ui-dashboard";
import { UIListingInterface } from "@/components/ui-listing";
import { Breeds, DropdownType } from "@/types";
import { UIDropdownInterface } from "@/ui-kit/ui-dropdown";

const mockBreeds: Breeds = {
  breed1: ["subBreed1", "subBreed2"],
  breed2: ["subBreed3", "subBreed4"],
};

export const mockUIDashboardInterface: UIDashboardInterface = {
  breeds: mockBreeds,
  setDogs: jest.fn(),
  setListingText: jest.fn(),
  setIsLoading: jest.fn(),
};

export const mockUIListingInterface: UIListingInterface = {
  images: ["image1", "image2", "image3"],
  listingText: {
    breed: "Labrador",
    subBreed: "Golden",
  },
  isLoading: false,
};

export const mockUIDropdownInterface: UIDropdownInterface = {
  list: ["Option1", "Option2", "Option3"],
  type: DropdownType.BREED,
  option: "Option1",
  setOption: jest.fn(),
};
