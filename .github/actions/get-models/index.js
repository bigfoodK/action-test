const fs = require("fs");
const os = require("os");

const dirents = fs.readdirSync(".", {
  withFileTypes: true,
});
const models = dirents
  .filter((dirent) => dirent.isDirectory())
  .map((directory) => directory.name)
  .filter((directory_name) => !directory_name.startsWith("."));
const outputPath = process.env["GITHUB_OUTPUT"];
fs.appendFileSync(outputPath, `models=${JSON.stringify(models)}` + os.EOL);
