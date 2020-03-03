const axios = require("axios");
axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
  let dataPost = response.data;
  axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
    let dataUser = response.data;
    console.log(response);
    return;
    let acc = gabungData(dataPost, dataUser);
    console.log(acc);
  });
});

async function requestApi() {
  let [p1, p2] = await Promise.all([
    axios.get("https://jsonplaceholder.typicode.com/posts"),
    axios.get("https://jsonplaceholder.typicode.com/users")
  ]);
  let dataPost = p1.data;
  let dataUser = p2.data;
  let acc = gabungData(dataPost, dataUser);
  console.log(acc);
}
requestApi();

const gabungData = (data1, data2) => {
  let acc = [];
  for (let i = 0; i < data1.length; i++) {
    let userId = data1[i].userId;

    for (let j = 0; j < data2.length; j++) {
      let id = data2[j].id;
      if (userId == id) {
        data1[i].user = data2[j];
        acc.push(data1[i]);
        break;
      }
    }
  }
  return acc;
};
