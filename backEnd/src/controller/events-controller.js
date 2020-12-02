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

const adEvent = (request, response) => {
  const eventBody = request.body;
  const event = new eventsCollection(eventBody);

  event.save((error) => {
    if (error) {
      return response.status(400).send(error);
    } else {
      return response.status(200).send({
        message: "POST with success",
        event,
      });
    }
  });
};

module.exports = {
    getAll,
    adEvent,
  };
  