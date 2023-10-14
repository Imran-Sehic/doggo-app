"use client";
import { DropdownType } from "@/types";
import { clsx } from "clsx";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import styles from "./ui-dropdown.module.css";

export interface UIDropdownInterface {
  list: string[];
  type: DropdownType;
  option: string;
  setOption: Dispatch<SetStateAction<string>>;
}

const UIDropdown: React.FC<UIDropdownInterface> = ({
  list,
  type,
  option,
  setOption,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [closing, setClosing] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickAway, true);

    return () => {
      document.removeEventListener("mousedown", handleClickAway, true);
    };
  });

  const setClosingAnimation = async () => {
    if (expanded) {
      setClosing(true);
      await new Promise((resolve) => setTimeout(resolve, 200));
      setClosing(false);
    }
  };

  const handleClickAway = async (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current?.contains(event.target as Node)
    ) {
      await setClosingAnimation();
      setExpanded(false);
    }
  };

  return (
    <div
      data-testid={`dropdown-${
        type === DropdownType.BREED ? "breed" : "sub-breed"
      }`}
    >
      <p className={styles.dropdownHeading}>
        {type === DropdownType.BREED ? "Breed" : "Sub-Breed"}
      </p>
      <div ref={dropdownRef}>
        <div
          className={styles.selectedOption}
          onClick={async () => {
            await setClosingAnimation();
            setExpanded(!expanded);
          }}
          data-testid={`selected-option-${
            type === DropdownType.BREED ? "breed" : "sub-breed"
          }`}
        >
          {option}
        </div>
        {expanded && (
          <div className={clsx(styles.options, closing && styles.closing)}>
            {list.map((item, index) => {
              return (
                <div
                  key={index}
                  className={styles.option}
                  onClick={() => {
                    setOption(item);
                    //await setClosingAnimation();
                    setExpanded(false);
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default UIDropdown;
