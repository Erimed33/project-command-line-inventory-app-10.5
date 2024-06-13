const { readFileSync, writeFileSync } = require('node:fs')

function readJSONFile(path, fileName) {
    const collection = readFileSync(`${path}/${fileName}`, 'utf8')
    return collection ? JSON.parse(collection) : [];
}

function writeJSONFile(path, fileName, data) {
    // parse means convert, in this instance js is being converted to json
  data = JSON.stringify(data, null, 2);
  return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" });
}

module.exports = {
  readJSONFile,
  writeJSONFile,
};