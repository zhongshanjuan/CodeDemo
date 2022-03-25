const rm = require("rm-modules");
const start = new Date();

rm("./", () => {
  const end = new Date();
  console.log(`done ${end - start} ms `);
});
