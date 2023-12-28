export type attributeDefinition = {
  name: string;
  definition: string;
  xmlName?: string;
  set?: string[];
  playlist?: string[];
  acronym?: string;
};

export type letterKey =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "L"
  | "M"
  | "N"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z"
  | "ZeroToNine";

export interface Dictionary {
  [string: string]: attributeDefinition[];
}

export type rawArray = string[][];

export type servicesObj = {
  title: string;
  link: string;
  solution: string;
  img?: string;
  alt?: string;
};

export type nameIndexMappedObj = {
  type: string,
  index: number
}
