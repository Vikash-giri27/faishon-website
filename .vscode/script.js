// // Get the cart container and list elements
// const cartContainer = document.getElementById('cart-container');
// const cartList = document.getElementById('cart-list');

// // Create an array to store the cart items
// let cartItems = [];

// // Add event listeners to the "Add to Cart" buttons
// document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
//   button.addEventListener('click', (e) => {
//     // Get the product details
//     const product = {
//       name: e.target.parentNode.querySelector('p').textContent,
//       price: 10.99, // Replace with actual price
//       image: e.target.parentNode.querySelector('img').src,
//     };

//     // Add the product to the cart
//     cartItems.push(product);

//     // Update the cart list
//     updateCartList();
//   });
// });

// // Update the cart list function
// function updateCartList() {
//   cartList.innerHTML = '';
//   cartItems.forEach((item) => {
//     const li = document.createElement('li');
//     li.innerHTML = `
//       <img src="${item.image}" alt="${item.name}">
//       <span>${item.name}</span>
//       <span>$${item.price}</span>
//     `;
//     cartList.appendChild(li);
//   });
// }

// // Add event listener to the checkout button
// document.getElementById('checkout-btn').addEventListener('click', () => {
//   // Process the checkout (e.g., redirect to payment page)
//   console.log('Checkout clicked!');
// });
// const galleryImages = document.querySelectorAll('.gallery-image');

// galleryImages.forEach((image) => {
//   image.addEventListener('click', (e) => {
//     // Get the image details
//     const imageDetails = {
//       src: e.target.src,
//       alt: e.target.alt,
//     };

//     // Add the image to the cart
//     addToCart(imageDetails);
//   });
// });
// let cartItems = [];

// function addToCart(imageDetails) {
//   // Check if the image is already in the cart
//   const existingItem = cartItems.find((item) => item.src === imageDetails.src);
//   if (existingItem) {
//     // If the image is already in the cart, increment its quantity
//     existingItem.quantity++;
//   } else {
//     // If the image is not in the cart, add it with a quantity of 1
//     cartItems.push({ ...imageDetails, quantity: 1 });
//   }

//   // Update the cart list
//   updateCartList();
// }

// function updateCartList() {
//   const cartList = document.getElementById('cart-list');
//   cartList.innerHTML = '';

//   cartItems.forEach((item) => {
//     const li = document.createElement('li');
//     li.innerHTML = `
//       <img src="${item.src}" alt="${item.alt}">
//       <span>${item.alt}</span>
//       <span>Quantity: ${item.quantity}</span>
//       <button class="delete-btn">Delete</button>
//     `;
//     cartList.appendChild(li);
//   });
// }
// // Add delete button to each cart item
// cartList.addEventListener('click', (e) => {
//     if (e.target.classList.contains('delete-btn')) {
//       const itemToRemove = cartItems.find((item) => item.src === e.target.parentNode.querySelector('img').src);
//       const index = cartItems.indexOf(itemToRemove);
//       if (index !== -1) {
//         cartItems.splice(index, 1);
//       }
  
//       // Update the cart list
//       updateCartList();
//     }
//   });
//   const galleryImages = document.querySelectorAll('.gallery-image');
// let cartItems = [];

// galleryImages.forEach((image) => {
//   image.addEventListener('click', (e) => {
//     const imageDetails = {
//       src: e.target.src,
//       alt: e.target.alt,
//     };

//     addToCart(imageDetails);
//   });
// });

// function addToCart(imageDetails) {
//   const existingItem = cartItems.find((item) => item.src === imageDetails.src);
//   if (existingItem) {
//     existingItem.quantity++;
//   } else {
//     cartItems.push({ ...imageDetails, quantity: 1 });
//   }

//   updateCartList();
// }
// Get all add to cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Create an empty cart object
const cart = {};

// Add event listener to each add to cart button
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the product ID from the button's data attribute
    const productId = button.getAttribute('data-product-id');

    // Get the product price from the button's parent element
        // Get the product price from the button's parent element
        const productPrice = button.parentNode.querySelector('.price').textContent;

        // Add the product to the cart
        if (cart[productId]) {
          cart[productId].quantity++;
        } else {
          cart[productId] = {
            price: productPrice,
            quantity: 1
          };
        }
    
        // Update the cart list
        updateCartList();
    
        // Update the cart total
        updateCartTotal();
      });
    });
    
    // Function to update the cart list
    function updateCartList() {
      const cartList = document.getElementById('cart-list');
      cartList.innerHTML = '';
    
      Object.keys(cart).forEach(productId => {
        const product = cart[productId];
        const listItem = document.createElement('li');
        listItem.textContent = `Product ${productId}: ${product.quantity} x $${product.price}`;
        cartList.appendChild(listItem);
      });
    }
    
    // Function to update the cart total
    function updateCartTotal() {
      const cartTotal = document.getElementById('cart-total');
      let total = 0;
    
      Object.keys(cart).forEach(productId => {
        const product = cart[productId];
        total += product.price * product.quantity;
      });
    
      cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }
