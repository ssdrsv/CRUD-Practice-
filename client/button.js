// const button = document.querySelector("deletebutton").onClick(deleteChar);

let button = document.getElementById("deletebutton");

button.onclick = function () {
  button.style.backgroundColor = "blue";
  // const mainDiv = document.querySelector("main");
  // mainDiv.remove();
  fetch("http://localhost:3000/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: "DELETE FROM public.people WHERE _id = 6" }),
  }).then((res) => {
    res.json();
    mainDiv.innerText = "";
  });
};
