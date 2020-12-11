const eventsCollection = require("../models/eventSchema");

const findForCategory = (request, response) => {
  console.log(request.params);
  const filter = {};
  if (request.query.category) filter.category = request.query.category;

  if (request.query.eventName) filter.eventName = request.query.eventName;

  if (request.query.eventDate) filter.eventDate = request.query.eventDate;

  if (request.query.mainTheme) filter.mainTheme = request.query.mainTheme;

  if (request.query.costs) filter.costs = request.query.costs;

  if (request.query.subCategory) filter.subCategory = request.query.subCategory;

  console.log(filter);
  eventsCollection.find(filter, (error, event) => {
    console.log(event);
    if (error) {
      response.status(500).send(error);
    } else if (event == "") {
      return response.status(400).send("Categoria não encontrado");
    } else {
      return response.status(200).send({
        message: "Categoria encontrada!",
        event,
      });
    }
  });
};

module.exports = {
  findForCategory,
};
