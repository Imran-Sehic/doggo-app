"use client";
import { ListingText } from "@/components/ui-main-content";
import UILoader from "@/ui-kit/ui-loader";
import Image from "next/image";
import styles from "./ui-listing.module.css";

export interface UIListingInterface {
  images: string[];
  listingText: ListingText;
  isLoading: boolean;
}

const UIListing: React.FC<UIListingInterface> = ({
  images,
  listingText,
  isLoading,
}) => {
  const { breed, subBreed } = listingText;

  return (
    <div>
      <h2 className={styles.heading} data-testid={"listing-heading"}>
        {"Results for "}
        <span>{breed}</span>
        {/* We avoid putting sub-breed text value in the heading if searched only by breed */}
        {subBreed !== "All" ? ", " : ""}
        {subBreed !== "All" ? <span>{subBreed}</span> : ""}
      </h2>
      <UILoader isLoading={isLoading} />
      <div className={styles.imageWrapper}>
        {images.map((image, index) => {
          return (
            <div key={index} className={styles.image}>
              <Image
                alt={`dog-image-${index}`}
                src={image}
                width={100}
                height={100}
                className={styles.image}
                unoptimized
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UIListing;
