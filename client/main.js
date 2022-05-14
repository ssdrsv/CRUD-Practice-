// READ ---- GET
const mainDiv = document.querySelector("main");
// mainDiv.innerText = "hello";

fetch("http://localhost:3000/")
  .then((res) => res.json())
  .then((data) => {

    for (let i = 0; i < data.length; i++) {
      let charDiv = document.createElement('div');
      charDiv.id = `charDiv${data[i]._id}`;
      mainDiv.appendChild(charDiv);

      let paragraph = document.createElement('p');
      paragraph.innerHTML = JSON.stringify(data[i])
      charDiv.appendChild(paragraph);
      
      let button = document.createElement('button');
      button.id = `deletebutton${i}`
      button.style.height = '10px';
      button.style.width = '50px';
      button.onclick = function () {deleteChar(data[i].id)};
      button.onclick = function () {clearcharDiv(`charDiv${data[i]._id}`)};
      charDiv.appendChild(button)
    }
  });
  
  function clearcharDiv(id) {
    const element = document.getElementById(id)
    element.remove()
  }
  
  function deleteChar (element) {
    // button.style.backgroundColor = "blue";
    // const mainDiv = document.querySelector("main");
    // mainDiv.remove();
    fetch("http://localhost:3000/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: element}),
    }).then((res) => {
      res.json();
    });
  };

  const buttonCreate = document.getElementById("createChar");

  buttonCreate.onclick = function() { 
    event.preventDefault(); // prevents the redirect after submit
    const createInput = document.getElementById("charText").value;
    // console.log(createInput)
    fetch ("http://localhost:3000/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: createInput})
    }).then((res) => {
      res.json();
    })
  }
  const form = document.getElementById("form")
  
  
  //   mainDiv.innerText = JSON.stringify(data);
  
  // window.location = '/';
  // window.location.href=window.location.href


  