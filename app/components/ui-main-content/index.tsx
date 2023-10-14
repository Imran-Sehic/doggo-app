"use client";
import UIDashboard from "@/components/ui-dashboard";
import UIListing from "@/components/ui-listing";
import { Breeds } from "@/types";
import { useState } from "react";
import styles from "./ui-main-content.module.css";

interface UIMainContentInterface {
  breeds: Breeds;
  dogs: string[];
}

export type ListingText = {
  breed: string;
  subBreed: string;
};

const UIMainContent: React.FC<UIMainContentInterface> = ({ breeds, dogs }) => {
  const [dogsImages, setDogsImages] = useState<string[]>(dogs);
  const [listingText, setListingText] = useState<ListingText>({
    breed: Object.keys(breeds)[0],
    subBreed: "All",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <UIDashboard
        breeds={breeds}
        setDogs={setDogsImages}
        setListingText={setListingText}
        setIsLoading={setIsLoading}
      />
      <UIListing
        images={dogsImages}
        listingText={listingText}
        isLoading={isLoading}
      />
    </div>
  );
};

export default UIMainContent;
