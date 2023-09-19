

// Function to fetch all products
export async function fetchAllProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  }
  
  // Function to fetch a single product by ID
  export async function fetchProductById(id) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching product:", error);
      return null;
    }
  }
  
  // Function to fetch products with a limit
  export async function fetchProductsLimit(limit) {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=${limit}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching limited products:", error);
      return [];
    }
  }
  
  // Function to fetch products sorted by 'asc' or 'desc'
  export async function fetchProductsSorted(sortOrder) {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?sort=${sortOrder}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching sorted products:", error);
      return [];
    }
  }
  
  // Function to fetch all product categories
  export async function fetchAllCategories() {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  }
  
  // Function to fetch products in a specific category
  export async function fetchProductsByCategory(category) {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching products by category:", error);
      return [];
    }
  }
  
  // Function to add a new product
  export async function addProduct(newProduct) {
    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error adding a product:", error);
      return null;
    }
  }
  
  // Function to update a product by ID
  export async function updateProductById(id, updatedProduct) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedProduct),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error updating a product:", error);
      return null;
    }
  }
  
  // Function to delete a product by ID
  export async function deleteProductById(id) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error deleting a product:", error);
      return null;
    }
  }
