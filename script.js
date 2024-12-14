// Sample product data
const products = [
    { id: 1, name: "Red T-shirt", size: "M", color: "red", price: 45, img: "https://via.placeholder.com/200x200?text=Red+T-shirt" },
    { id: 2, name: "Blue Jeans", size: "L", color: "blue", price: 70, img: "https://via.placeholder.com/200x200?text=Blue+Jeans" },
    { id: 3, name: "Green Dress", size: "S", color: "green", price: 120, img: "https://via.placeholder.com/200x200?text=Green+Dress" },
    { id: 4, name: "Black Shoes", size: "M", color: "black", price: 80, img: "https://via.placeholder.com/200x200?text=Black+Shoes" },
    { id: 5, name: "Red Hoodie", size: "L", color: "red", price: 60, img: "https://via.placeholder.com/200x200?text=Red+Hoodie" },
    { id: 6, name: "Blue Skirt", size: "S", color: "blue", price: 40, img: "https://via.placeholder.com/200x200?text=Blue+Skirt" }
  ];
  
  // Function to filter and display products based on selected options
  function filterProducts() {
    const sizeFilter = document.getElementById("size").value;
    const colorFilter = document.getElementById("color").value;
    const priceFilter = document.getElementById("price").value;
  
    // Filter products based on the selected filters
    const filteredProducts = products.filter(product => {
      const sizeMatch = sizeFilter ? product.size === sizeFilter : true;
      const colorMatch = colorFilter ? product.color === colorFilter : true;
      const priceMatch = priceFilter ? (
        (priceFilter === "0-50" && product.price <= 50) ||
        (priceFilter === "51-100" && product.price > 50 && product.price <= 100) ||
        (priceFilter === "101-200" && product.price > 100 && product.price <= 200) ||
        (priceFilter === "200+" && product.price > 200)
      ) : true;
  
      return sizeMatch && colorMatch && priceMatch;
    });
  
    // Display filtered products
    displayProducts(filteredProducts);
  }
  
  // Function to display product cards
  function displayProducts(productsToDisplay) {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = ""; // Clear existing products
  
    productsToDisplay.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
  
      productCard.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <div class="product-title">${product.name}</div>
        <div class="product-price">$${product.price}</div>
      `;
  
      productGrid.appendChild(productCard);
    });
  }
  
  // Add event listeners to filter options
  document.getElementById("size").addEventListener("change", filterProducts);
  document.getElementById("color").addEventListener("change", filterProducts);
  document.getElementById("price").addEventListener("change", filterProducts);
  
  // Initialize with all products displayed
  displayProducts(products);
  