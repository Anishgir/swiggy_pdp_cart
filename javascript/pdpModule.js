async function fetchCategories() {
    const response = await fetch('http://localhost:8080/categories');
    const categories = response.json();
    return categories;
};

async function fetchMenuItems() {
    const response = await fetch('http://localhost:8080/menu-Items');
    const menuItems = response.json();
    return menuItems;
};

async function fetchCartItems() {
    const response = await fetch('http://localhost:8080/cart');
    const cartItems = response.json();
    return cartItems;
};

// Templates 
function createCategoryInfoTemplate(itemsByCategoryMap, categoryName) {
    const itemList = getItemList(itemsByCategoryMap, categoryName);
    return `<h3>${categoryName}</h3>
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
        fetchCategories().then(data => {
            this.categories = data;
        });
        fetchMenuItems().then(data =>{
            this.menuItems = data;
        });
        fetchCartItems().then(data => {
            this.cartItems = data;
        });
        setTimeout(() => {
            this.itemsByCategoryMap = createItemByCategoryMap(this.categories, this.menuItems);
        },2000);
    }

    function View() {
        this.createView = (categories, cartItems, itemsByCategoryMap) => {
            createCategoriesView(categories);
            createMenuItemsView(categories,itemsByCategoryMap);
            createCartView(cartItems);
        }
        this.bindOnSelectingCategory = (handler) => {
            document.querySelector(".categories ul").addEventListener("click", (e) => {
                if(e.target.id){
                    e.target.style.color = '#FFA500';
                    handler(e.target.innerText);

                    document.querySelectorAll('.categories ul li').forEach(element => {
                        if (e.target.id != element.id)
                            element.style.color = '#291D38';
                    })
                }
            });
        }
    }

    function Controller(model, view) {
        this.model = model;
        this.view = view;
        setTimeout(() => {
            this.view.createView(this.model.categories, this.model.cartItems, this.model.itemsByCategoryMap);
            this.view.bindOnSelectingCategory(this.handelOnSelectingCategory);
        },2000);
        this.handelOnSelectingCategory = (categoryName) => {
            const list = [{displayName: categoryName}];
            this.view.createView(list,this.model.cartItems,this.model.itemsByCategoryMap);
        }
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

    function addItemsToCategoryInMenuList(menuItemsContainer, itemsByCategoryMap, categoryName , index) {
        const itemContainer = document.createElement("div");
        itemContainer.className = "item-description";
        itemContainer.innerHTML = createItemTemplate(itemsByCategoryMap, categoryName, index);

        menuItemsContainer.append(itemContainer);
    }

    function addCategoriesToMenuList(menuItemsContainer, itemsByCategoryMap, categoryName){
        const categoryInfoContainerElement = document.createElement("div");
        categoryInfoContainerElement.className = "category-info";
        categoryInfoContainerElement.innerHTML = createCategoryInfoTemplate(itemsByCategoryMap, categoryName);
        menuItemsContainer.append(categoryInfoContainerElement);
        for (let i = 0; i < itemsByCategoryMap.get(categoryName).length; i++) {
            addItemsToCategoryInMenuList(menuItemsContainer, itemsByCategoryMap, categoryName, i);
        }
    }

    function createMenuList(categories, menuItemsContainer, itemsByCategoryMap) {
            categories.forEach(category => {
                addCategoriesToMenuList(menuItemsContainer, itemsByCategoryMap, category.displayName.toLowerCase());
            });       
    };

    function createMenuItemsView(categories,itemsByCategoryMap) {
        const main = document.querySelector("main");
        const menuItemsContainer = document.querySelector(".menu-items");
        menuItemsContainer.innerHTML = "";
        createMenuList(categories, menuItemsContainer, itemsByCategoryMap);
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