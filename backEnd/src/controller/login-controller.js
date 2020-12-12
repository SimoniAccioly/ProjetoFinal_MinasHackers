const loginCollection = require("../models/usersSchema");

const login = (request, response) => {
    const loginBody = request.body;
    const newLogin = new loginCollection(loginBody);
  
    newLogin.save((error) => {
      if (error) {
        return response.status(400).send(error);
      } else {
        return response.status(200).send({
          message: "Login with success",
          newLogin,
        });
      }
    });
  };

  module.exports = {
    login
  };