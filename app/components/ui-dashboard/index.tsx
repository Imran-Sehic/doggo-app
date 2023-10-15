"use client";
import { ListingText } from "@/components/ui-main-content";
import { fetchDogsByBreedAndSubBreed } from "@/queries";
import { Breeds, DropdownType } from "@/types";
import UIButton from "@/ui-kit/ui-button";
import UIDropdown from "@/ui-kit/ui-dropdown";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./ui-dashboard.module.css";

export interface UIDashboardInterface {
  breeds: Breeds;
  setDogs: Dispatch<SetStateAction<string[]>>;
  setListingText: Dispatch<SetStateAction<ListingText>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UIDashboard: React.FC<UIDashboardInterface> = ({
  breeds,
  setDogs,
  setListingText,
  setIsLoading,
}) => {
  const [breed, setBreed] = useState<string>(Object.keys(breeds)[0]);
  const [subBreed, setSubBreed] = useState<string>(
    breeds[breed].length > 0 ? breeds[breed][0] : "All"
  );

  // Once the breed selection changes we reset sub-breeds to "All" to avoid searching by unexisting sub-breed on a selected breed
  useEffect(() => {
    setSubBreed("All");
  }, [breed]);

  const onSearch = async () => {
    setIsLoading(true);
    const dogsResponse = await fetchDogsByBreedAndSubBreed(breed, subBreed);
    setDogs(dogsResponse.message as string[]);
    setIsLoading(false);
    setListingText({ breed, subBreed });
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>
        Search by <span>breed</span> and <span>sub-breed</span>
      </h2>
      <div className={styles.ctaSection}>
        <div className={styles.dropdowns}>
          <UIDropdown
            list={Object.keys(breeds)}
            type={DropdownType.BREED}
            option={breed}
            setOption={setBreed}
          />
          <UIDropdown
            list={["All", ...breeds[breed]]}
            type={DropdownType.SUB_BREED}
            option={subBreed}
            setOption={setSubBreed}
          />
        </div>
        <UIButton content={"Search"} onClick={onSearch} />
      </div>
    </div>
  );
};

export default UIDashboard;
