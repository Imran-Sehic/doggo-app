export interface Breeds {
  [breed: string]: SubBreed;
}

type SubBreed = string[];

export enum DropdownType {
  BREED,
  SUB_BREED,
}

export type ResponseType = {
  message: Breeds | string | string[];
  status: "success" | "error";
};
