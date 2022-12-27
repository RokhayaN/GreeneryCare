//Create or select
// first navBar1 el
let mainContainer = document.querySelector("#mainDiv")

let navBar1 = document.createElement("nav");
let logo = document.createElement("div");
let menu = document.createElement("ul");
let search = document.createElement("li");
let signIn = document.createElement("li");
let cart = document.createElement("li");


//2nd navbar el


//modify
navBar1.classList = "navbar";

logo.classList = "logo";
logo.src = "#";
//logoImg.classList = "logo";

menu.classList = "menu";

search.innerHTML = "Search";
search.classList = "search-plants"

signIn.innerText = "signIn"
signIn.classList = "signIn"

//cart.classList = "cart"
cart.innerText = "cart";
cart.classList = "cart"


//add or append
mainContainer.append(navBar1);
navBar1.append(logo,menu);
menu.append(search,signIn,cart,);