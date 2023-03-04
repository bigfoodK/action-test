const core = require("@actions/core");

try {
  const dirents = require("fs").readdirSync(".", {
    withFileTypes: true,
  });
  console.log(dirents);
  const models = dirents
    .filter((dirent) => dirent.isDirectory())
    .map((directory) => directory.name)
    .filter((directory_name) => !directory_name.startsWith("."));
  core.setOutput("models", models);
} catch (error) {
  core.setFailed(error.message);
}
