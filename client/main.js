// document.addEventListener('DOMContentLoaded', () => {
//   const container = document.querySelector("#CardContainer");
//   const card = new Card(container);

const mainDiv = document.querySelector("main");
// mainDiv.innerText = "hello";
//   const renderData = () => {
fetch("http://localhost:3000/")
  .then((res) => res.json())
  .then((data) => {
    console.log("front", data);

    // window.location = '/';
    // window.location.href=window.location.href
    mainDiv.innerText = JSON.stringify(data);
  });

//   }
//   const getCharacter = async () => {
//     let character = await fetch('/');
//     character = await character.json();
//     console.log(character)

//     mainDiv.innerText = character
//     // return character
//   }
//renderData(); //call the render data function for the initial rendering of the data
// check cors dependency
// check fetch address
