import _, { add, sortedIndex, compact } from 'lodash';

let tab1 = document.querySelector("#tab1");
let tab2 = document.querySelector("#tab2");
let tab3 = document.querySelector("#tab3");

let content = document.querySelector("#content");

let adder_button = document.createElement("button");

let len;

class menuItem {
  constructor(name, price, ingredients) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
  }
  get names() {
    return this.name;
  }
}

let tuna = new menuItem("Tuna","27",["mozarella","tuna","tomato sauce"]);
let meat = new menuItem("Meat","28",["mozarella","special cheese","tomato","beef"]);
let mixed = new menuItem("Mixed","28",["mozarella","tomato sauce","beef","mushroom","pepperoni"]);
let exclusive = new menuItem("Exclusive","120",["tomato","mushroom","special cheese","meat"]);


let pizzas = [];


pizzas.push(tuna);
pizzas.push(meat);
pizzas.push(mixed);
pizzas.push(exclusive);


function createHome() {
  content.innerHTML = "";
  let heading_d = document.createElement("div");
  let heading = document.createElement("h3");
  heading.textContent = "Mission";
  heading_d.classList.add("heading_d");
  console.log(heading_d);
  let par = document.createElement("p");
  par.textContent = "To serve good pizza Yow";
  heading_d.appendChild(heading);
  content.appendChild(heading_d);
  content.appendChild(par);
  let vision_d = document.createElement("div");
  vision_d.setAttribute("class","heading_d");
  let vision = document.createElement("h3");
  vision.textContent = "Vision";
  let vp = document.createElement("p");
  vp.textContent = "With making some great pizza Yow";
  vision_d.appendChild(vision);
  content.appendChild(vision);
  content.appendChild(vp);
  return;
}


function createMenu() {
  content.innerHTML = "";
  adder_button.setAttribute("id","adder_button");
  adder_button.textContent = "Add New Item";
  content.appendChild(adder_button);
  pizzas.forEach(pizz => {
    let div = document.createElement("div");
    div.setAttribute("class","items");
    let name = document.createElement("div");
    name.setAttribute("class","name");
    name.textContent = pizz.name;
    div.appendChild(name);
    let ingredients = document.createElement("div");
    ingredients.setAttribute("class","ingredients");
    len = pizz.ingredients.length;
    for(let i=0; i< len;i++)
    {
      if(i === len-1)
      {
        ingredients.textContent += pizz.ingredients[i];
        break;
      }
      ingredients.textContent += (pizz.ingredients[i] + ", ")
    }
    div.appendChild(ingredients);
    let price = document.createElement("div");
    price.setAttribute("class","price");
    price.textContent = pizz.price + " $";
    div.appendChild(price);
    content.appendChild(div);
  })
  console.log(adder_button);
  return;
}


function createContact(){
  content.innerHTML = "";
  let contact = document.createElement("h3");
  contact.setAttribute("class","heading_d");
  contact.textContent = "Contact Information";
  let p = document.createElement("p");
  p.textContent = "Dont have a stable place. In a journey to find ourself";
  content.appendChild(contact);
  content.appendChild(p);
  return;
}

adder_button.addEventListener("click", () => {
  let name = prompt("Name of the pizza ?");
  let ingredients = prompt("Enter ingredients !! add ',' between each !!").split(",");
  let price = prompt("Enter the price");
  let new_pizza = new menuItem(name, price, ingredients);
  pizzas.push(new_pizza);
  createMenu();
  return;
});


tab1.addEventListener("click",createHome);
tab2.addEventListener("click",createMenu);
tab3.addEventListener("click",createContact);

createMenu();