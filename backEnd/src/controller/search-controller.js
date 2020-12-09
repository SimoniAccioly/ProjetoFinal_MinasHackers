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

  const findForName= (request, response) => {
    const name = request.params.eventName;
  
   eventsCollection.find({ eventName: name}, (error, event) => {
      console.log(event);
      if (error) {
        response.status(500).send(error);
      } else if (event == "") {
        return response.status(400).send("Evento não encontrado");
      } else {
        return response.status(200).send({
          message: "Evento não encontrado!",
          event,
        });
      }
    });
  };

  const findForDate= (request, response) => {
    const date = request.params.eventDate;
  
   eventsCollection.find({ eventDate: date}, (error, event) => {
      console.log(event);
      if (error) {
        response.status(500).send(error);
      } else if (event == "") {
        return response.status(400).send("Evento não encontrado");
      } else {
        return response.status(200).send({
          message: "Evento não encontrado!",
          event,
        });
      }
    });
  };
  

  const findForTheme= (request, response) => {
    const theme = request.params.mainTheme;
  
   eventsCollection.find({ mainTheme: theme}, (error, event) => {
      console.log(event);
      if (error) {
        response.status(500).send(error);
      } else if (event == "") {
        return response.status(400).send("Evento não encontrado");
      } else {
        return response.status(200).send({
          message: "Evento não encontrado!",
          event,
        });
      }
    });
  };

  const findForCost= (request, response) => {
    const costs = request.params.costs;
  
   eventsCollection.find({ costs: costs}, (error, event) => {
      console.log(event);
      if (error) {
        response.status(500).send(error);
      } else if (event == "") {
        return response.status(400).send("Evento não encontrado");
      } else {
        return response.status(200).send({
          message: "Evento não encontrado!",
          event,
        });
      }
    });
  };

  const findForSubcategory= (request, response) => {
    const subcategory = request.params.subcategory;
  
   eventsCollection.find({ subcategory: subcategory}, (error, event) => {
      console.log(event);
      if (error) {
        response.status(500).send(error);
      } else if (event == "") {
        return response.status(400).send("Evento não encontrado");
      } else {
        return response.status(200).send({
          message: "Evento não encontrado!",
          event,
        });
      }
    });
  };


  module.exports = {
    findForCategory,
    findForName,
    findForDate,
    findForTheme,
    findForCost,
    findForSubcategory
  };
  