//Create or select

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

about.className = "about";
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


//home
homeSection.append(homeInnerBox, welcomeBox);
welcomeBox.append(welcomePara);
homeInnerBox.append(homeContent);
homeContent.append(shopBox);
shopBox.appendChild(BtnPlants);

//c-gallery

gallerySection.append(galleryInnerBox);
galleryInnerBox.append(galleryContent, plantCard);



// api goes here
//----------------------------------------------------------------------------------------------

const viewPlants = async () => {

     const options = {
     method: 'GET',
         headers: {
            'X-RapidAPI-Key': '27cb2164d7msh22d782256abfd09p1f859ejsn5db7d81455b2',
            'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
         }
     };
    
    const rawData = await (fetch('https://house-plants2.p.rapidapi.com/', options));
    const jsonData = await rawData.json();
     console.log(jsonData);




//---------------------------------------------------------------------------------------------------



jsonData.forEach((plant) => { 

    // for(let plant of jsonData ){
    
console.log(plant);
    
    //}
let plantCard = document.createElement("div"); 
    //add img
let plantPic = document.createElement("img");
//add plant name 
let plantName = document.createElement("h4");
//add plant cares 
let waterIntake = document.createElement("p");
let sunLight = document.createElement("p");
let growthP = document.createElement("p"); 

//const ePlant = plant.id;
// //console.log(ePlant);

plantCard.className = "plantCard";
plantPic.className = "plantImg";
plantPic.src = plant.img;
waterIntake = plant.Watering;
plantName = plant["common name"];
sunLight = plant["light ideal"];
growthP = plant.Growth; 


plantCard.append(plantPic, waterIntake, plantName, sunLight, growthP);



});
// console.log(jsonData.length)  

// for(let plant of jsonData ){
    
//     console.log(plant);

//      }
      
 };

 const displayPlants = document.querySelector(".button");
 BtnPlants.addEventListener("click", viewPlants);


//viewPlants();
















