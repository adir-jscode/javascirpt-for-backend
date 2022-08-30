module.exports.errorHandler = function errorHandler(error) {
  const { name, message, stack } = error;
  console.log(message);

  //   logger.error({ name, message, stack });
};

module.exports.AllUser = function AllUser() {
  console.log("AllUsers");
};

// variation

// module.exports.errorHandler = errorHandler;
// module.exports.AllUser = AllUser;

// module.exports = {
//   errorHandler,
//   AllUser,
// };
