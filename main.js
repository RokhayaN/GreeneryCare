//Create or select


//a- navBar 
let mainContainer = document.querySelector("#mainDiv")

let navBar1 = document.createElement("nav");
let navInnerBox = document.createElement("div");
let logo = document.createElement("div");
let menu = document.createElement("ul");
let home = document.createElement("li")
let search = document.createElement("li");
let signIn = document.createElement("li");
let cart = document.createElement("li");
let linkToHome = document.createElement("a");
let linkToform = document.createElement("a");
let linkToCart = document.createElement("a")


//modify
navBar1.classList = "navbar";
navInnerBox.className = "max-width"

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
navBar1.appendChild(navInnerBox);
navInnerBox.append(logo,menu);
menu.append(search,home,signIn,cart,);
home.appendChild(linkToHome);
signIn.appendChild(linkToform);
cart.appendChild(linkToCart);

