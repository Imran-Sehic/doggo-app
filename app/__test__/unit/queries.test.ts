import { fetchBreeds, fetchDogsByBreedAndSubBreed } from "@/queries";
import { Breeds, ResponseType } from "@/types";

describe("fetch breed and images by breed and sub-breed", () => {
  it("should return success status and Breeds message", async () => {
    const expectedBreeds: Breeds = {
      affenpinscher: [],
      australian: ["shepherd"],
      mountain: ["bernese", "swiss"],
    };

    const expectedResponse: ResponseType = {
      message: expectedBreeds,
      status: "success",
    };

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(expectedResponse),
    });

    const result = await fetchBreeds();

    expect(result).toEqual(expectedResponse);
  });

  it("should return an array of 3 images and call fetch with correct URL for a sub-breed", async () => {
    const expectedBreed = "labrador";
    const expectedSubBreed = "golden";

    const expectedUrl = `https://dog.ceo/api/breed/${expectedBreed}/${expectedSubBreed}/images/random/3`;

    const expectedResponse: ResponseType = {
      message: [
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_4072.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_5927.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_713.jpg",
      ],
      status: "success",
    };

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(expectedResponse),
    });

    const result = await fetchDogsByBreedAndSubBreed(
      expectedBreed,
      expectedSubBreed
    );

    expect(result).toEqual(expectedResponse);

    expect(fetch).toHaveBeenCalledWith(expectedUrl);
  });

  it("should return empty message array and status error when fetch request fails", async () => {
    const expectedResponse: ResponseType = {
      message: [],
      status: "error",
    };

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(expectedResponse),
    });

    const result = await fetchBreeds();

    expect(result).toEqual(expectedResponse);
  });
});
