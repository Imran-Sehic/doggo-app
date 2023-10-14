import { ResponseType } from "@/types";

export const fetchBreeds = async (): Promise<ResponseType> => {
  const data = await fetch("https://dog.ceo/api/breeds/list/all");
  const breedsResponse = (await data.json()) as ResponseType;

  return breedsResponse;
};

export const fetchDogsByBreedAndSubBreed = async (
  breed: string,
  subBreed: string
): Promise<ResponseType> => {
  const data = await fetch(
    subBreed === "All"
      ? `https://dog.ceo/api/breed/${breed}/images/random/3`
      : `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random/3`
  );

  const dogsResponse = (await data.json()) as ResponseType;

  return dogsResponse;
};
