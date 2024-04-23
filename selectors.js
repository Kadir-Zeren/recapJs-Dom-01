document.title = "DOM DOM🚘";

const myHeader = document.getElementById("header");
console.log(myHeader);

myHeader.style.backgroundColor = "red";
myHeader.style.color = "white";

const addButon = document.getElementById("btn");
console.log(addButon);

addButon.style.backgroundColor = "#bebe";
addButon.style.border = "none";
addButon.style.borderRadius = "10px";
addButon.style.padding = "0.6rem";

addButon.value = "SAVE";

const h1 = document.getElementById("heading1");
console.log(h1);

h1.textContent = "DOM Inroduction";

console.log(h1.textContent);
console.log(h1.innerText);
console.log(h1.innerHTML);

const myInputs = document.getElementsByTagName("input");
console.log(myInputs);

console.log("SIZE:", myInputs.length);

console.log(myInputs[0]);
console.log(myInputs[1]);

console.log(document.getElementsByTagName("h3")[0]);

const myLists = document.getElementsByTagName("li");
const myListsArr = [...myLists];
console.log(myListsArr);
myListsArr.forEach((li) => (li.style.color = "red"));

const myListsArr1 = Array.from(myLists);
console.log(myListsArr1);
myListsArr1.map((li) => (li.style.listStyleType = "none"));
