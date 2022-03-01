const body = document.body;

const categories = [{
        "displayName": "Recommended",
        "id": "recommended"
    },
    {
        "displayName": "Dessert and Beverages",
        "id": "dessert_beverage"
    },
    {
        "displayName": "Biryani",
        "id": "biryani"
    }
];

const menuItems = [{
        "id": "2121",
        "displayName": "Kadhai Paneer Biryani",
        "price": 249,
        "currency": "INR",
        "vegetarian": true,
        "imgUrl": "https://media.istockphoto.com/photos/fish-biryani-with-basmati-rice-indian-food-picture-id488481490?k=20&m=488481490&s=612x612&w=0&h=HYP2KxiC1e2tAtzmfrA7xxs3u8LD1wjSLPUD9bZ48eU=",
        "categories": ["recommended", "biryani"]
    },
    {
        "id": "2122",
        "displayName": "Real Biryani",
        "price": 349,
        "currency": "INR",
        "vegetarian": false,
        "imgUrl": "https://media.istockphoto.com/photos/hyderabadi-biryani-a-popular-chicken-or-mutton-rice-preparation-picture-id466089615?k=20&m=466089615&s=612x612&w=0&h=_Z0Jlombq-VX8Pl8I9mJf_kIuvbzZ7j8ucxvRoLL8BM=",
        "categories": ["biryani"]
    },
    {
        "id": "2123",
        "displayName": "Plain Veg Biryani",
        "price": 149,
        "currency": "INR",
        "vegetarian": true,
        "imgUrl": "https://media.istockphoto.com/photos/chicken-biryani-directly-above-photo-picture-id1169141170?k=20&m=1169141170&s=612x612&w=0&h=EpCF3lQF2GBRaVApNELuE5xFQfv8fyQ_wWC52hmyxeo=",
        "categories": ["biryani"]
    }
];

const cartItems = {
    "lineItems": [{
        "id": "1121",
        "name": "Plain Veg Biryani",
        "quantity": 2,
        "price": 149,
        "currency": "INR"
    }],
    "shippingFee": 0,
    "discount": 0,
    "tax": 0,
    "subTotal": 149
}


const mp = new Map();

categories.forEach(element => {
    if (!mp.has(element.displayName.toLowerCase())) {
        mp.set(element.displayName.toLowerCase(), []);
    }
});

menuItems.forEach(element => {
    element.categories.forEach(key => {
        if (!mp.has(key)) {
            mp.set(key, []);
        }
        mp.get(key).push(element);
    });
});

const main = document.querySelector("main");

const divCategories = document.querySelector(".categories");

const ulCategories = document.createElement("ul");
categories.forEach(element => {
    const liCategories = document.createElement("li");
    liCategories.id = element.id;
    liCategories.innerText = element.displayName;
    ulCategories.append(liCategories);
});
divCategories.append(ulCategories);

const divMenuItems = document.querySelector(".menu-items");

function addCategories(key) {
    const divcontainer = document.createElement("div");
    divcontainer.classList = "catContainer";
    const divTop = document.createElement("div");
    divTop.className = "top";
    divTop.innerHTML = `<h3>${key}</h3>
                      <p>${mp.get(key).length} Items</p>`
    divcontainer.append(divTop);

    for (let i = 0; i < mp.get(key).length; i++) {
        const divDiscription = document.createElement("div");
        divDiscription.className = "itemDiscription";
        divDiscription.innerHTML = `<div>
                                  <img src="images/veg_mark.png" alt="veg mark logo" class="vegMark"> 
                                  <p class="dishname">${mp.get(key)[i].displayName}</p>
                                  <p> &#8377 ${mp.get(key)[i].price}</p>
                                </div>
                                <div class="container">
                                <img src=${mp.get(key)[i].imgUrl} alt="food Image" class=foodImage>
                                <button class="addItem">ADD</button>
                                </div>`;

        divcontainer.append(divDiscription);
    }
    divMenuItems.append(divcontainer);
}

for (const [key, value] of mp.entries()) {
    addCategories(key);
}

const divCart = document.querySelector(".cart");

divCart.innerHTML = `<div class = "cartDescription">
                        <h3>Cart</h3>
                        <p>${cartItems.lineItems.length} Items</p>
                        <br>
                        <p class="dishname">${cartItems.lineItems[0].name}</p>
                        <span>
                            <p>Subtotal</p>
                            <p> &#8377 ${cartItems.subTotal}</p>
                        </span>
                        <p id="extracharges"><small>Extra charges may apply</small></p>
                        <button id="checkout_btn">Checkout &#8594 </button>
                      </div>`

document.querySelectorAll('.categories ul li').forEach(element => element.addEventListener('click', event => {
    divMenuItems.innerHTML = "";
    let key = event.target.innerText.toLowerCase();
    addCategories(key);
    event.target.style.color = 'orange';
    document.querySelectorAll('.categories ul li').forEach(element => {
        if (event.target.id != element.id)
            element.style.color = 'black';
    })
    console.log(key);
}));

main.append(divCategories, divMenuItems, divCart);
