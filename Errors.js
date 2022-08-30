//Reference Error

//TypeError

//SyntaxError

//InternalError

//user-defined error

//Common js way to import

const { errorHandler, AllUser } = require("./errorHandler.js");

AllUser();

async function getData() {
  try {
    // undefined.find();

    //user-defined error

    const inputError = new Error("please provide valid input");
    throw inputError;
  } catch (error) {
    errorHandler(error);
  }
}

getData();

console.log("DONE");
