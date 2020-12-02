const { response } = require("../app");
const eventsCollection = require("../models/eventSchema");

const getAll = (request, response) => {
  console.log(request.url);

  eventsCollection.find((error, events) => {
    if (error) {
      return response.status(500).send(error);
    } else {
      return response.status(200).json({
        message: "all right with GET",
        events,
      });
    }
  });
};

module.exports = {
    getAll,
  };
  