const fs = require("fs");
const natural = require("natural");

const vttFilePath = "./subtitleVTT/5DGDv4mQWZc.ru.vtt";

const folderPath = "5DGDv4mQWZc";
const fileName = "5DGDv4mQWZc.json";
const folderName = "5DGDv4mQWZc";
const a = [];
fs.readFile(vttFilePath, "utf8", (err, data) => {
  if (err) throw err;
  const vttString = data;
  // const stemCounts = stemAndCount(vttString);
  a.push(vttString);
  console.log(a);

  // Create the folder
  fs.mkdir(folderName, (err) => {
    if (err) throw err;
    console.log("Folder created successfully.");
  });

  // Write the `a` variable to a new file
  fs.writeFile(`${folderPath}/${fileName}`, JSON.stringify(a), (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});
