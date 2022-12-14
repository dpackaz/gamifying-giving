const axios = require("axios");
const fs = require("fs");
const empty = require('./empty.json')
require ("dotenv").config();
const populate = async (json) => {
  for (data of json) {
    axios
      .get(`https://api.pledge.to/v1/organizations?region=${data.id}`, {
        headers: {
          Authorization: "Bearer " + process.env.PLEDGE_API_KEY,
        },
      })
      .then((response) => {
        if (response.statusText === "OK") {
          data.value = response.data.total_count;
          data.id = "US-" + data.id;
        }
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(`Checking charities in ${data.name}`)
      await new Promise(resolve => setTimeout(resolve, 1000));
  }
  fs.writeFile("./result.json", JSON.stringify(json), (err) => {
    if (err) console.log(err);
  });
};
populate(empty);
