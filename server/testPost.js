const fetch = require("fetch");

const postToAdd = async () => {
  const dataToPost = {
    name: "Bolsa",
    position: "Orange",
    level: "Standard",
  };

  const postToAddEndpoint = await fetch(`localhost:5000/beaches/add`);
  const dataToDisplay = await postToAddEndpoint.json();
  return dataToDisplay;
};
