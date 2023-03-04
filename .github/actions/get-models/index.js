const dirents = require("fs").readdirSync(".", {
  withFileTypes: true,
});
const models = dirents
  .filter((dirent) => dirent.isDirectory())
  .map((directory) => directory.name)
  .filter((directory_name) => !directory_name.startsWith("."));
process.stdout.write(`models=${JSON.stringify(models)}`);
