// FIND ALL ADD TO CART CLASS
let carts = document.querySelectorAll('.add-cart');

// TEMPORARY STORAGE OF PRODUCT LIST
let products = [
    {
        name: 'Hello Book1',
        tag: 'helloBook1',
        price: 10,
        inCart: 0
    },
    {
        name: 'Hello Book2',
        tag: 'helloBook2',
        price: 15,
        inCart: 0
    },
    {
        name: 'Hello Book3',
        tag: 'helloBook3',
        price: 20,
        inCart: 0
    },
    {
        name: 'Hello Book4',
        tag: 'helloBook4',
        price: 25,
        inCart: 0
    }
];
// LOOP ALL ADD TO CART CLASS ON PAGE
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
    })
}

// STORE ADD TO CART EVENT ON THE LOCAL STORAGE
function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log("My cartItems are", cartItems); 
    product.inCart = 1;

    cartItems = {
        [product.tag]: product
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

// GET LOCAL STORAGE IF PAGE REFRESH
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
// CALL REFRESH FUNCTION
onLoadCartNumbers()


// https://www.youtube.com/watch?v=tEAl7L62GEw 10:20

