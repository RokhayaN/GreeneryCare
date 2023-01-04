let navBar1 = document.createElement("nav");
let navInnerBox = document.createElement("div");
let logo = document.createElement("div");
let logoImg = document.createElement("img");
let menu = document.createElement("ul");
let home = document.createElement("li")
let about = document.createElement("li")
let gallery = document.createElement("li");
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
let welcomeBox = document.createElement("div");
let welcomePara = document.createElement("p");
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

about.className = "about";
about.innerHTML = "About";

search.innerHTML = "Search";
search.classList = "search-plants";

//signIn.innerText = "SignIn"
//signIn.classList = "signIn";

gallery.innerHTML = "Gallery";
gallery.classList = "plants"

//cart.classList = "cart"
//cart.innerText = "Cart";
cart.classList = "cart";

about.setAttribute("href","about.html")
linkToCart.setAttribute("href", "#");
linkToCart.innerHTML = "Cart"
linkToHome.setAttribute("href","index.html"); 
linkToHome.innerHTML = "Home";
linkToform.setAttribute("href", "#");
linkToform.innerHTML = ("Sign In");


