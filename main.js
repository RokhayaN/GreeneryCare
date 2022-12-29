//Create or select


// first navBar1 el
let mainContainer = document.querySelector("#mainDiv")

let navBar1 = document.createElement("nav");
let logo = document.createElement("div");
let menu = document.createElement("ul");
let home = document.createElement("li")
let search = document.createElement("li");
let signIn = document.createElement("li");
let cart = document.createElement("li");
let linkToHome = document.createElement("a");
let linkToform = document.createElement("a");
let linkToCart = document.createElement("a")


//2nd navbar el


//modify
navBar1.classList = "navbar";

logo.innerText = "Logo goes here"
logo.classList = "logo";
logo.src = "#";
//logoImg.classList = "logo";

menu.classList = "menu";

//home.innerHTML = "Home";
home.classList = "home";

search.innerHTML = "Search";
search.classList = "search-plants"

//signIn.innerText = "SignIn"
signIn.classList = "signIn"

//cart.classList = "cart"
//cart.innerText = "Cart";
cart.classList = "cart"

linkToCart.setAttribute("href", "#");
linkToCart.innerHTML = "Cart"
linkToHome.setAttribute("href", "#"); 
linkToHome.innerHTML = "Home";
linkToform.setAttribute("href", "#");
linkToform.innerHTML = ("signIn")


//add or append
mainContainer.append(navBar1);
navBar1.append(logo,menu);
menu.append(search,home,signIn,cart,);
home.appendChild(linkToHome);
signIn.appendChild(linkToform);
cart.appendChild(linkToCart);