//Create or select

//a- navBar 

let navBar1 = document.createElement("nav");
let navInnerBox = document.createElement("div");
let logo = document.createElement("div");
let logoImg = document.createElement("img");
let menu = document.createElement("ul");
let home = document.createElement("li")
let services = document.createElement("li");
let search = document.createElement("li");
let signIn = document.createElement("li");
let cart = document.createElement("li");
let linkToHome = document.createElement("a");
let linkToform = document.createElement("a");
let linkToCart = document.createElement("a");

//b- home

let homeSection = document.createElement("section");
let homeInnerBox = document.createElement("div");
let homeContent = document.createElement("div");
let welcomePara = document.createElement("div");
let shopBox = document.createElement("div");
let BtnPlants = document.createElement("button");



//modify
// a-navbar

navBar1.classList = "navbar";
navInnerBox.className = "max-width";

 //logo.innerText = "Logo goes here"
 logo.classList = "logo";

logoImg.className = "logo-img";
logoImg.src = "./ressources/images/logo1.svg";
logoImg.setAttribute("height", 300);
logoImg.setAttribute("width", 250);


//logoImg.classList = "logo";

menu.classList = "menu";

//home.innerHTML = "Home";
home.classList = "home1";

search.innerHTML = "Search";
search.classList = "search-plants";

//signIn.innerText = "SignIn"
signIn.classList = "signIn";

services.innerHTML = "Services";
services.classList = "services"

//cart.classList = "cart"
//cart.innerText = "Cart";
cart.classList = "cart";

linkToCart.setAttribute("href", "#");
linkToCart.innerHTML = "Cart"
linkToHome.setAttribute("href", "#"); 
linkToHome.innerHTML = "Home";
linkToform.setAttribute("href", "#");
linkToform.innerHTML = ("signIn");

//b-home
homeSection.className = "homeS";
homeSection.id = "homeS";
//homeSection.innerHTML = "home section";

homeInnerBox.className = "max-width";
homeContent.classList = "home-content";
welcomePara.classList = "welcomeT";
welcomePara.innerHTML = "Welcome to Plant Studio, Shop our Catalog here";
BtnPlants.innerHTML = "Shop Here";
BtnPlants.classList = "button";
shopBox.classList = "button-box";


//add or append
//mainContainer.append(navBar1, homeSection);
document.body.append(navBar1, homeSection);

//a navbar 
navBar1.appendChild(navInnerBox);
navInnerBox.append(logo,menu);
logo.appendChild(logoImg);
menu.append(search,home,services,signIn,cart,);
home.appendChild(linkToHome);
signIn.appendChild(linkToform);
cart.appendChild(linkToCart);

//home
homeSection.append(homeInnerBox);
homeInnerBox.append(homeContent);
homeContent.append(welcomePara, shopBox);
shopBox.appendChild(BtnPlants);















