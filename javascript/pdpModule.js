function fetchCategories() {
    return [{
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
};

function fetchMenuItems() {
    return [{
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
}

function fetchCartItems() {
    return {
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
}

// Templates 
function createCategoryInfoTemplate(itemsByCategoryMap, key) {
    const itemList = getItemList(itemsByCategoryMap, key);
    return `<h3>${key}</h3>
    <p>${itemList.length} Items</p>`
}

function createItemTemplate(itemsByCategoryMap, key, index) {
    const itemList = getItemList(itemsByCategoryMap, key);
    const item = getItem(itemList, index);
    return `<div>
    <img src="images/veg_mark.png" alt="Veg Mark Logo" class="veg-mark">
    <p class="dish-name">${item.displayName}</p>
    <p> &#8377 ${item.price}</p>
    </div>
    <div class="container">
    <img src=${item.imgUrl} alt="food Image" class=item-image>
    <button class="add-item-btn">ADD</button>
    </div>`;
}

function createCartDescriptionTemplate(cartItems) {
    const totalItem = cartItems.lineItems.length;
    const itemName = cartItems.lineItems[0].name;
    return `<div class = "cart-description">
    <h3>Cart</h3>
    <p>${totalItem} Items</p>
    <br>
    <p class="dish-name">${itemName}</p>
    <span>
        <p>Subtotal</p>
        <p> &#8377 ${cartItems.subTotal}</p>
    </span>
    <p class="charges-description">Extra charges may apply</p>
    <button class="checkout-btn">Checkout &#8594 </button>
    </div>`;
}

function getItemList(itemsByCategoryMap, key) {
    return itemsByCategoryMap.get(key);
}

function getItem(itemList, index) {
    return itemList[index];
}

const pdpModule = (function() {
    return {
        init: display,
    };

    function Model() {
        this.categories = fetchCategories();
        this.menuItems = fetchMenuItems();
        this.cartItems = fetchCartItems();
        this.itemsByCategoryMap = createItemByCategoryMap(this.categories, this.menuItems);
        this.bindOnSelectingCategoryChanged = (callback) => {
            this.onSelectingCategory = callback;
        }
        this.onSelectingCategoryChangeMenuList = (categoryName) => {
            this.list = [{
                "displayName": categoryName
            }];
            this.itemsByCategoryMap = createItemByCategoryMap(this.list, this.menuItems);
            this.onSelectingCategory(this.list, this.cartItems, this.itemsByCategoryMap);
        }
    }

    function View() {
        this.createView = (categories, cartItems, itemsByCategoryMap) => {
            createCategoriesView(categories);
            createMenuItemsView(itemsByCategoryMap);
            createCartView(cartItems);
        }
        this.bindOnSelectingCategory = (handler) => {
            document.querySelectorAll(".categories ul li").forEach((listItem) => listItem.addEventListener("click", (e) => {
                e.target.style.color = '#FFA500';
                handler(e.target.innerText);

                document.querySelectorAll('.categories ul li').forEach(element => {
                    if (e.target.id != element.id)
                        element.style.color = '#291D38';
                })
            }));
        }
    }

    function Controller(model, view) {
        this.model = model;
        this.view = view;
        this.view.createView(this.model.categories, this.model.cartItems, this.model.itemsByCategoryMap);
        this.onSelectingCategory = (categories, cartItems, itemsByCategoryMap) => {
            this.view.createView(categories, cartItems, itemsByCategoryMap);
        }
        this.handelOnSelectingCategory = (categoryName) => {
            this.model.onSelectingCategoryChangeMenuList(categoryName);
        }
        this.view.bindOnSelectingCategory(this.handelOnSelectingCategory);
        this.model.bindOnSelectingCategoryChanged(this.onSelectingCategory);
    }

    function display() {
        const app = new Controller(new Model(), new View());
    }

    function addItemByCategoryInMap(map, key, menuItem) {
        if (map.has(key)) {
            map.get(key).push(menuItem);
        }
    }

    function addMenuItemsInMap(map, menuItem) {
        menuItem.categories.forEach(key => addItemByCategoryInMap(map, key, menuItem));
    }

    function addEmptyListByKeyInMap(map, key) {
        if (!map.has(key.displayName.toLowerCase())) {
            map.set(key.displayName.toLowerCase(), []);
        }
    }

    function createItemByCategoryMap(categories, menuItems) {
        const map = new Map();
        categories.forEach(key => addEmptyListByKeyInMap(map, key));
        menuItems.forEach(menuItem => addMenuItemsInMap(map, menuItem));
        return map;
    }

    function isIncluded(listElement) {
        let flag = false;
        document.querySelectorAll(".categories ul li").forEach(item => {
            if (item.innerText === listElement.displayName)
                flag = true;
        });
        return flag;
    }

    function addListItemInCategoryList(categoriesList, listElement) {
        if (isIncluded(listElement))
            return;

        const categoriesListElement = document.createElement("li");
        categoriesListElement.id = listElement.id;
        categoriesListElement.innerText = listElement.displayName;
        categoriesList.append(categoriesListElement);
    }

    function createCategoriesView(categories) {
        const main = document.querySelector("main");
        const categoriesContainer = document.querySelector(".categories");
        const categoriesList = document.createElement("ul");
        categories.forEach(listElement => addListItemInCategoryList(categoriesList, listElement));

        const numberOfListElement = categoriesList.getElementsByTagName("li").length;
        if (numberOfListElement) {
            categoriesContainer.append(categoriesList);
            main.append(categoriesContainer);
        }
    }

    function addItemsToCategoryInMenuList(menuItemsContainer, itemsByCategoryMap, key, index) {
        const itemContainer = document.createElement("div");
        itemContainer.className = "item-description";
        itemContainer.innerHTML = createItemTemplate(itemsByCategoryMap, key, index);

        menuItemsContainer.append(itemContainer);
    }

    function addCategoriesToMenuList(menuItemsContainer, itemsByCategoryMap, key) {
        const categoryInfoContainerElement = document.createElement("div");
        categoryInfoContainerElement.className = "category-info";
        categoryInfoContainerElement.innerHTML = createCategoryInfoTemplate(itemsByCategoryMap, key);
        menuItemsContainer.append(categoryInfoContainerElement);
        for (let i = 0; i < itemsByCategoryMap.get(key).length; i++) {
            addItemsToCategoryInMenuList(menuItemsContainer, itemsByCategoryMap, key, i);
        }
    }

    function createMenuList(menuItemsContainer, itemsByCategoryMap) {
        for (const [key] of itemsByCategoryMap.entries()) {
            addCategoriesToMenuList(menuItemsContainer, itemsByCategoryMap, key);
        }
    };

    function createMenuItemsView(itemsByCategoryMap) {
        const main = document.querySelector("main");
        const menuItemsContainer = document.querySelector(".menu-items");
        menuItemsContainer.innerHTML = "";
        createMenuList(menuItemsContainer, itemsByCategoryMap);
        main.append(menuItemsContainer);
    }

    function createCartView(cartItems) {
        const main = document.querySelector("main");
        const cartContainer = document.querySelector(".cart");
        cartContainer.innerHTML = createCartDescriptionTemplate(cartItems);
        main.append(cartContainer);
    }

})();

pdpModule.init();