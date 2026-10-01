//====================
// DOM Elements
//====================
  
let title = document.querySelector("#main-title");
let servicesButton = document.getElementById("services-button");
let profileImage = document.getElementById("profile-image");

let sectionTitle = document.querySelector(".section-title");
let sectionTitles = document.querySelectorAll(".section-title");

let servicesList = document.querySelector(".services");



//====================
// DATA
//====================

let product = {
    name: "Business Card",
    price: 700,
    quantity: 100,
    category: "printing",

    showInfo: function() {
        console.log(this.name);
        console.log(this.price);
    }
};

product.available = true;
delete product.category;

let services = [
    {
        name: "T-shirt Printing",
        price: 1500,
        description: "High-quality T-shirt printing."
    },
    {
        name: "Business Cards",
        price: 600,
        description: "Professional business cards."
    },
    {
        name: "Stickers",
        price: 300,
        description: "Custom stickers for your products"
    }
];


services.unshift({
    name: "Logo Design",
    price: 1000,
    description: "Professional logo design."
});


//====================
// functions
//====================

let calculateTotal = (price, quantity) => price * quantity;



let checkPrice = price => {
    if (price > 1000) {
        return "Expensive";
    } else {
        return "Affordable";
    }
};



let getExpensiveService = service => {
    if (service.price > 500) {
        return service.name;
    }
};


function findServiceByName(name) {
    let service = services.find(service => service.name === name);

    if (service) {
        return service;
    }else {
        return "Service not found";
    }
}



//====================
// Testing
//====================

console.log(sectionTitles);
console.log(title);


console.log(services);

for (let service of services) {
    console.log(service.name);
}

for (let service of services) {
    if (service.price > 500) {
        console.log(service.name);
    }
}

for (let i = 0; i < services.length; i++) {
    if (services[i].price > 500) {
    console.log(i, services[i].name)
    }
}


//services[1].price = 600;
console.log(services[1]);
console.log(services);
console.log(services.some(service => service.name === "Stickers"));
console.log(services.some(service => service.price > 2000));
console.log(services.find(service => service.name === "Stickers"));


let expensiveService = services.find(service => service.price > 800);
    console.log(expensiveService.name);


let totalPrice = services.reduce((total, service) => {
    return total + service.price;
}, 0);
console.log(totalPrice)


let serviceNames = services.map(service => service.name);
let expensiveServices = services.filter(service => service.price > 500);
console.log(serviceNames);
console.log(expensiveServices);


services.forEach(service => {
    console.log(service.name);
});


let getServiceName = service => service.name;
    console.log(getServiceName(services[0]));


let affordableServices = services.filter(service => service.price <= 500);
    console.log(affordableServices);
    console.log(affordableServices.map(service => service.name));



console.log(calculateTotal(500, 3));

console.log(checkPrice(1500));
console.log(checkPrice(500));

console.log(getExpensiveService(services[0]));
console.log(getExpensiveService(services[3]));

console.log(services.map(getServiceName));
console.log(services.map(service => service.name + " - " + service.price + "DA"))


let cheapServiceNames = services
    .filter(service => service.price < 1000)
    .map(service => service.name);

    console.log(cheapServiceNames);


let sortedServices = [...services].sort((a,b) => a.price - b.price);

console.log(sortedServices);


let expensiveFirst = [...services].sort((a,b) => b.price - a.price);

console.log(expensiveFirst);


let mostExpensiveServices = [...services].sort((a,b) => b.price - a.price)[0];

console.log(mostExpensiveServices);


let searchName = "Business Cards";

let searchedService = services.find(service => service.name === searchName);

console.log(searchedService);


console.log("Logo:", findServiceByName("Logo Design"));
console.log("Stickers:", findServiceByName("Stickers"));


//====================
// Dom manipulation
//====================

sectionTitle.textContent = `${services.length} Services`;

//--------------------------------
servicesList.innerHTML = "";
//--------------------------------

services.forEach(function(service) {
    let li = document.createElement("li");

    li.classList.add("service-card");

    let h3 = document.createElement("h3");
    let p = document.createElement("p");

    h3.textContent = service.name;
    p.textContent = service.description + " - " + service.price + " DA";


    li.appendChild(h3);
    li.appendChild(p);


    servicesList.appendChild(li);
});



//====================
// Events
//====================

servicesButton.addEventListener("click", function(event) {
    event.preventDefault();

    title.classList.toggle("highlight");
    

    if (profileImage.style.display === "none") {
        profileImage.style.display = "inline-block";
    } else {
        profileImage.style.display = "none";
    }
});


servicesList.addEventListener("click", function(event) {
    let card = event.target.closest(".service-card");

    if (card) {
        card.classList.toggle("highlight");
    }
});


