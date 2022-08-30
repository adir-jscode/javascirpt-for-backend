//pending

//resolved

//rejected

const promise = new Promise((resolve, reject) => {
  const user = 1;
  if (!user) {
    reject("User not found");
  } else {
    setTimeout(() => {
      resolve({ name: "Virat kohli" });
    }, 2000);
  }
});

//handle multiple promise

const userIds = [1, 2, 3, 4, 5];
const userData = [];
for (let i = 0; i < userIds.length; i++) {
  const user = userIds[i];
  userData.push(promise);
}

Promise.all(userData).then((res) => {
  console.log(res);
});

promise
  .then((res) => console.log("found in res", res))
  .catch((err) => console.log("Found in error", err));
