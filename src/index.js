const axios = require("axios");

const greet = (name) => "Hello" + name;

const users = async () => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/users");
  return data.data;
};

module.exports = {
  users,
  greet,
};
