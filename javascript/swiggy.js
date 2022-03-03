const pdpModule = (function() {
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

    const categories = fetchCategories();

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

    const menuItems = fetchMenuItems();

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

    const cartItems = fetchCartItems();

    const itemsByCategoryMap = new Map();

	function addItemByCategoryInMap(key,element){
		if (!itemsByCategoryMap.has(key)) {
			itemsByCategoryMap.set(key, []);
		}
		itemsByCategoryMap.get(key).push(element);
	}
	function makeItemsByCategoryMap(element){
			element.categories.forEach(key => addItemByCategoryInMap(key,element));
	}
	
    menuItems.forEach(element => makeItemsByCategoryMap(element));

    const main = document.querySelector("main");

    const categoriesContainer = document.querySelector(".categories");

    const categoriesList = document.createElement("ul");
	function addListItemInCategoryList(element){
        const categoryName = document.createElement("li");
        categoryName.id = element.id;
        categoryName.innerText = element.displayName;
        categoriesList.append(categoryName);
    }
    categories.forEach(element => addListItemInCategoryList(element));
    categoriesContainer.append(categoriesList);

    const menuItemsContainer = document.querySelector(".menu-items");

    function addCategoryInfo(key) {
        return `<h3>${key}</h3>
		<p>${itemsByCategoryMap.get(key).length} Items</p>`
    }

    function addItemDescription(key, index) {
        return `<div>
		<img src="images/veg_mark.png" alt="Veg Mark Logo" class="veg-mark">
		<p class="dish-name">${itemsByCategoryMap.get(key)[index].displayName}</p>
		<p> &#8377 ${itemsByCategoryMap.get(key)[index].price}</p>
		</div>
		<div class="container">
		<img src=${itemsByCategoryMap.get(key)[index].imgUrl} alt="food Image" class=item-image>
		<button class="add-item-btn">ADD</button>
		</div>`;
    }

    function addItemToCartegory(key, index) {
        const itemContainer = document.createElement("div");
        itemContainer.className = "item-description";
        itemContainer.innerHTML = addItemDescription(key, index);

        menuItemsContainer.append(itemContainer);
    }

    function addCategoryToMenuItems(key) {
        const categoryInfoContainer = document.createElement("div");
        categoryInfoContainer.className = "category-info";
        categoryInfoContainer.innerHTML = addCategoryInfo(key);
        menuItemsContainer.append(categoryInfoContainer);
        for (let i = 0; i < itemsByCategoryMap.get(key).length; i++) {
            addItemToCartegory(key, i);
        }
    }

    for (const [key, value] of itemsByCategoryMap.entries()) {
        addCategoryToMenuItems(key);
    }

    const cartContainer = document.querySelector(".cart");

    function addCartDescription() {
        return `<div class = "cart-description">
				<h3>Cart</h3>
				<p>${cartItems.lineItems.length} Items</p>
				<br>
				<p class="dish-name">${cartItems.lineItems[0].name}</p>
				<span>
					<p>Subtotal</p>
					<p> &#8377 ${cartItems.subTotal}</p>
				</span>
				<p class="charges-description"><small>Extra charges may apply</small></p>
				<button class="checkout-btn">Checkout &#8594 </button>
				</div>`;
    }
    cartContainer.innerHTML = addCartDescription();
    main.append(categoriesContainer, menuItemsContainer, cartContainer);
})();