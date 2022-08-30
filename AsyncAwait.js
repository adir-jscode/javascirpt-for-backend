const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 2000);
});

async function getData() {
  const res = await promise;
  console.log(res);
}

getData();

fetch("")
  .then((res) => res.json())
  .then((data) => console.log(data));

async function getAllUser() {
  const res = await fetch("");
  const user = res.json();

  const response = await fetch(`www.facebook.com/${user.id}`);
  const allUserId = response.json().console.log(allUserId);
}
