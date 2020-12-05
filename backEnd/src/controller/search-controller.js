const { response } = require("../app");
const eventsCollection = require("../models/eventSchema");

const findForCategory= (request, response) => {
    const category = request.params.category;
  
   eventsCollection.find({ category: category }, (error, event) => {
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
    findForCategory
  };
  