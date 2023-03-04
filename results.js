const natural = require("natural");
const fs = require("fs");
const tokenizer = new natural.WordTokenizer();
const resultSubtitle = require("./5DGDv4mQWZc/resultSubtitle.json");

const stemmer = natural.PorterStemmer;
const folderPath = "./myFolder";
const fileName = "result.json";

const text = resultSubtitle.join(" ");

// Tokenize the text into individual words
const tokens = tokenizer.tokenize(text);

// Generate stems for each word
const stems = tokens.map((token) => stemmer.stem(token));

// Count unique stems and their frequency of occurrence
const stemCounts = stems.reduce((counts, stem) => {
  if (counts[stem]) {
    counts[stem]++;
  } else {
    counts[stem] = 1;
  }
  return counts;
}, {});

// console.log(stemCounts);

const stemFrequencies = stems.reduce((freqs, stem) => {
  freqs[stem] = (freqs[stem] || 0) + 1;
  return freqs;
}, {});
console.log(stemFrequencies);
fs.writeFile(
  `${folderPath}/${fileName}`,
  JSON.stringify(stemFrequencies),
  (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  }
);

// const fs = require("fs");

// const folderName = "exampleFolder";
// const fileName = "exampleFile.txt";
// const fileContents = "This is an example file.";

// // Create the folder
// fs.mkdir(folderName, (err) => {
//   if (err) throw err;
//   console.log("Folder created successfully.");

//   // Save the file to the folder
//   fs.writeFile(`${folderName}/${fileName}`, fileContents, (err) => {
//     if (err) throw err;
//     console.log("File saved successfully.");
//   });
// });
