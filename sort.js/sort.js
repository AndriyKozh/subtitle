const result = require("../myFolder/result.json");

const fs = require("fs");

const myObj = result;

const folderPath = "./5DGDv4mQWZc";
const fileName = "result_5DGDv4mQWZc.json";

const sortedObj = Object.keys(myObj)
  .sort((a, b) => myObj[b] - myObj[a])
  .reduce((acc, key) => {
    acc[key] = myObj[key];
    return acc;
  }, {});

const filteredObj = Object.entries(sortedObj).reduce((acc, [key, value]) => {
  if (isNaN(key)) {
    acc[key] = value;
  }
  return acc;
}, {});

fs.writeFile(
  `${folderPath}/${fileName}`,
  JSON.stringify(filteredObj),
  (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  }
);

console.log(filteredObj);
