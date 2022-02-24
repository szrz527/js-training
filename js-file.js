const ujdiv = document.createElement("div");
ujdiv.classList.add("ujdiv");
ujdiv.setAttribute("style", "border-color: black; border-style: solid; background-color: pink");
const ujh1 = document.createElement("h1");
ujh1.textContent = "I'm in a div!";
ujdiv.appendChild(ujh1);
const ujpara2 = document.createElement("p");
ujpara2.textContent = "ME TOO!";
ujdiv.appendChild(ujpara2);

muhaha.appendChild(ujdiv);


const ujpara = document.createElement("p");
ujpara.textContent = "Hey I'm red!";
ujpara.setAttribute("style", "color: red");

muhaha.appendChild(ujpara);


const ujh3 = document.createElement("h3");
ujh3.setAttribute("style", "color: blue");
ujh3.textContent = "I'm a blue h3!";

muhaha.appendChild(ujh3);
