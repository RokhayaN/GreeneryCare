//a- navBar 

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
let linkToAbout = document.createElement("a");
let linkToGallery = document.createElement("a");

//b- home

let homeSection = document.createElement("section");
let homeInnerBox = document.createElement("div");
let homeContent = document.createElement("div");
let welcomeBox = document.createElement("div");
let welcomePara = document.createElement("p");
let shopBox = document.createElement("div");
let BtnPlants = document.createElement("button");

//c- gallery 

let gallerySection = document.createElement("section");
let galleryInnerBox = document.createElement("div");
let galleryContent = document.createElement("div");


// ---------------------------------------------------------------------------------------
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

//about.className = "about";
//about.innerHTML = "About";

search.innerHTML = "Search";
search.classList = "search-plants";

//signIn.innerText = "SignIn"
//signIn.classList = "signIn";

//gallery.innerHTML = "Gallery";
gallery.classList = "gallery";

//cart.classList = "cart"
//cart.innerText = "Cart";
cart.classList = "cart";
about.className = "about";

linkToAbout.setAttribute("href", "./about.html")
linkToAbout.innerHTML = "About";
linkToGallery.setAttribute("href", "./gallery.html")
linkToGallery.innerHTML = "Gallery";
linkToCart.setAttribute("href", "#");
linkToCart.innerHTML = "Cart"
linkToHome.setAttribute("href", "./index.html"); 
linkToHome.innerHTML = "Home";
linkToform.setAttribute("href", "./account.html");
linkToform.innerHTML = ("Sign In");

//b-home
homeSection.className = "homeS";
homeSection.id = "homeS";
//homeSection.innerHTML = "home section";

homeInnerBox.className = "max-width";
homeContent.classList = "home-content";
welcomeBox.classList = "welcomeT";
welcomeBox.id = "welcomeT";
welcomePara.innerHTML = "Welcome to Plant Studio, Shop our Catalog here";
welcomePara.classList = "para";
BtnPlants.innerHTML = "Meet your new plant";
BtnPlants.classList = "button";
shopBox.classList = "button-box";

//c-gallery
gallerySection.className = "plants-box";
galleryInnerBox.className = "max-width";
galleryContent.className = "Allplants";
galleryContent.innerHTML = "Plants goes Here";


// ---------------------------------------------------------------------------------------

//add or append
//mainContainer.append(navBar1, homeSection);
document.body.append(navBar1, homeSection,gallerySection);

//a navbar 
navBar1.appendChild(navInnerBox);
navInnerBox.append(logo,menu);
logo.appendChild(logoImg);
menu.append(search,home,about,gallery,signIn,cart,);
home.appendChild(linkToHome);
signIn.appendChild(linkToform);
cart.appendChild(linkToCart);
about.appendChild(linkToAbout);
gallery.appendChild(linkToGallery);



//---------------------------------------------------------------------------------------

