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

const updateEvent = (request, response) => {
  const idParam = request.params.id 
  const body = request.body
  const novo = {new: true} 

  eventsCollection.findByIdAndUpdate( 
      idParam,
      body, 
      novo,
      (error, event) =>{ 
          if(error){
              return response.status(500).send(error)
          } else if (event) {
              return response.status(200).send(event) 
          } else{
              return response.status(200).send("Evento não pode ser atualizado!") 
          }
      }
  )    
}

const deletEvent = (request, response) => {
  const idParam = request.params.id
  eventsCollection.findByIdAndDelete(idParam, (error,event) =>{
    if(error){
      return response.status(500).send(error)
      } else{
          if(event){
              return response.status(200).send("Evento deletado com sucesso!")
          }else {
              return response.status(200).send("Não deu pra apagar evento =( ")
          }
      }
  })
} 




module.exports = {
    getAll,
    adEvent,
    updateEvent,
    deletEvent,
  };
  