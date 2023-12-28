import { fullString } from "$lib/definitions/fullString.js";
import type { Dictionary, rawArray, nameIndexMappedObj } from "$lib/types.js";
import Papa from "papaparse";

export async function load() {
  const response = await parseCSVString(fullString);

  const requiredDataTypes = [
    { csvName: "IM GUI / Load Sheet (FUSE) Name", name: "name" },
    { csvName: "IM / Load Sheet (FUSE) XML Name", name: "xmlName" },
    { csvName: "Definition", name: "definition" },
    { csvName: "IM GUI Item Attribute Set", name: "set" },
  ];

  const propsIndexObjs = getDataTypeIndexes(
    response?.data[1] as string[],
    requiredDataTypes
  );
  const nameIndex = getNameIndex(propsIndexObjs);

  const rawArray = response?.data.slice(2) as rawArray;
  const filteredRawArray = rawArray.filter((item) => item.length > nameIndex);
  const lettersNames = filteredRawArray.filter(
    (item) => !parseInt(item[nameIndex])
  );
  const numbersNames = filteredRawArray.filter((item) =>
    parseInt(item[nameIndex])
  );

  capitalizeNameFirstLetter(lettersNames, nameIndex);
  const sortedArray = sortArrays(lettersNames, numbersNames, nameIndex);
  
  const GDSNObj = objectifyData(sortedArray, nameIndex, propsIndexObjs);
  const chizledObj = removeDuplicates(GDSNObj);

  const attributeOfDay = getRandomAttribute(chizledObj);

  return { attributeOfDay, gdsnDictionary: chizledObj };
}

async function parseCSVString(str: string) {
  try {
    const defs = Papa.parse(str);
    return defs;
  } catch (error) {
    console.error("Error fetching CSV data:", error);
  }
}

function objectifyData(arr: rawArray, nameIndex: number, nameIndexObj: any[]) {
  return arr.reduce((acc: Dictionary, val: string[]) => {
    let firstLetter;
    if (val[nameIndex]) {
      if (!isNaN(parseInt(val[nameIndex]))) {
        firstLetter = "ZeroToNine";
      } else {
        firstLetter = val[nameIndex][0].toLocaleUpperCase();
      }
    }

    const newObj = nameIndexObj.reduce((acc, obj) => {
      if (obj.type === "set") {
        acc[obj.type] = [];
        acc[obj.type].push(val[obj.index]);
      } else {
        const str = obj.type !== "name" ? val[obj.index] : val[obj.index];
        // if (obj.type === "name") {
        //   capitalizeFirstLetter(val[obj.index]);
        // }
        acc[obj.type] = str;
      }
      return acc;
    }, {});

    if (firstLetter) {
      if (!acc[firstLetter as keyof typeof acc]) {
        acc[firstLetter as keyof typeof acc] = [];
      }
      acc[firstLetter as keyof typeof acc].push(newObj);
    }
    return acc;
  }, {});
}

function removeDuplicates(obj: Dictionary) {
  const objKeys = Object.keys(obj);
  objKeys.forEach((key) => {
    const newArr: any[] = [];

    obj[key].forEach((attribute: any) => {
      if (!newArr.find((att) => att.name === attribute.name)) {
        newArr.push(attribute);
      } else {
        const index = newArr.findIndex((att) => att.name === attribute.name);
        if (!newArr[index].set.includes(attribute.set[0])) {
          newArr[index].set.push(attribute.set[0]);
        }
      }
    });
    obj[key] = newArr;
  });
  return obj;
}

function getRandomAttribute(obj: Dictionary) {
  const objKeys = Object.keys(obj);
  const randomLetter = objKeys[Math.floor(Math.random() * objKeys.length)];
  const attributes = obj[randomLetter];
  const randomAttribute =
    attributes[Math.floor(Math.random() * attributes.length)];
  return randomAttribute;
}

function capitalizeNameFirstLetter(arr: rawArray, nameIndex: number) {
  arr.forEach((attribute, i) => {
    if (attribute.length >= nameIndex) {
      const stringName = attribute[nameIndex].trim();
      const firstLetter = stringName.slice(0, 1);
      const restOfName = stringName.slice(1);
      attribute[nameIndex] = firstLetter.toLocaleUpperCase() + restOfName;
    }
  });
}

function getNameIndex(arr: any[]) {
  const nameInfo = arr.filter((item) => item.type === "name");
  return nameInfo[0].index;
}

function getDataTypeIndexes(arr: string[], typesArr: any[]) {
  const csvNameArr = typesArr.map((type) => type.csvName);

  const valueIndexPairs = arr.reduce(
    (acc: nameIndexMappedObj[], val: string, i: number) => {
      if (csvNameArr.includes(val)) {
        const matchedObj = typesArr.find((obj) => obj.csvName === val);
        const typeIndexObj = { type: matchedObj.name, index: i };
        acc.push(typeIndexObj);
      }
      return acc;
    },
    []
  );

  return valueIndexPairs;
}

function sortArrays(
  letterArr: rawArray,
  numberArr: rawArray,
  nameIndex: number
) {
  return letterArr
    .sort((a: string[], b: string[]) =>
      a[nameIndex].localeCompare(b[nameIndex])
    )
    .concat(
      numberArr.sort((a: string[], b: string[]) =>
        a[nameIndex].localeCompare(b[nameIndex])
      )
    );
}
