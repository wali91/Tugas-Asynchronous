const fs = require("fs");

const blonyon = new Promise(resolve => {
  fs.readdir("/", (err, result) => {
    if (err) {
      throw new Error(err.message);
    }
    resolve(result);
  });
});
blonyon
  .then(response => console.log(response))
  .catch(response => console.log(response));
