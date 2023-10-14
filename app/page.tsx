import UIHero from "@/components/ui-hero";
import UIMainContent from "@/components/ui-main-content";
import { fetchBreeds, fetchDogsByBreedAndSubBreed } from "@/queries";
import { Breeds } from "@/types";

const Home: React.FC = async () => {
  const breedsResponse = await fetchBreeds();
  const breeds = breedsResponse.message as Breeds;

  const dogsResponse = await fetchDogsByBreedAndSubBreed(
    Object.keys(breeds)[0],
    "All"
  );
  const dogs = dogsResponse.message as string[];

  return (
    <div>
      <UIHero />
      <UIMainContent breeds={breeds} dogs={dogs} />
    </div>
  );
};

export default Home;
