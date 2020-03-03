async function janji() {
  let arr = [];
  for (let i = 1; i <= 3; i++) {
    await sleep(() => {
      //console log(i)
      console.log(`${i}`);
    });
  }
  console.log("Done!");
}

const sleep = async (sc, ...args) => {
  timeout(1000);
  return sc(...args);
};

const timeout = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

janji();
