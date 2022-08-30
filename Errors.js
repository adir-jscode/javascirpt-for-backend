//Reference Error

//TypeError

//SyntaxError

//InternalError

//user-defined error

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

const errorHandler = (error) => {
  const { name, message, stack } = error;
  console.log(message);

  //   logger.error({ name, message, stack });
};

getData();

console.log("DONE");
