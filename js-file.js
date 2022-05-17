/*const ujdiv = document.createElement("div");
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

muhaha.appendChild(ujh3);*/

/*const btn = document.querySelector('#btn');
btn.addEventListener("click", function(e) {
    e.target.style.background = "red";
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});*/



        //  OBJECT gyakorlás



let user = {
    name: "John",
    surname: "Smith",
};

let player = {};

/*for (let prop in user) {
    alert(user[prop]);
};*/

function isEmpty(obj) {
    for (let prop in obj) {
        return false;
    }
    return true;
}

/*alert(isEmpty(user));
alert(isEmpty(player));*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let sumsalary = 0;

for (let prop in salaries) {
    sumsalary += salaries[prop]
    console.log(sumsalary);
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj) {
    for (let prop in menu) {
        if (typeof menu[prop] == "number") {
            menu[prop] *= 2;
        }
    }
}

multiplyNumeric(menu);

for (let prop in menu) {
    alert(menu[prop]);
}
