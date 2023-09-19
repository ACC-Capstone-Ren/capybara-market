

// Function to fetch all carts
export async function fetchAllCarts() {
    try {
      const response = await fetch("https://fakestoreapi.com/carts");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching carts:", error);
      return [];
    }
  }
  
  // Function to fetch a single cart by ID
  export async function fetchCartById(id) {
    try {
      const response = await fetch(`https://fakestoreapi.com/carts/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching cart:", error);
      return null;
    }
  }
  
  // Function to fetch carts with a limit
  export async function fetchCartsLimit(limit) {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/carts?limit=${limit}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching limited carts:", error);
      return [];
    }
  }
  
  // Function to fetch carts sorted by 'asc' or 'desc'
  export async function fetchCartsSorted(sortOrder) {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/carts?sort=${sortOrder}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching sorted carts:", error);
      return [];
    }
  }
  
  // Function to fetch carts in a date range
  export async function fetchCartsByDateRange(startDate, endDate) {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/carts?startdate=${startDate}&enddate=${endDate}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching carts by date range:", error);
      return [];
    }
  }
  
  // Function to fetch user carts by user ID
  export async function fetchUserCarts(userId) {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/carts/user/${userId}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user carts:", error);
      return [];
    }
  }
  
  // Function to add a new cart
  export async function addCart(newCart) {
    try {
      const response = await fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        body: JSON.stringify(newCart),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error adding a cart:", error);
      return null;
    }
  }
  
  // Function to update a cart by ID
  export async function updateCartById(id, updatedCart) {
    try {
      const response = await fetch(`https://fakestoreapi.com/carts/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedCart),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error updating a cart:", error);
      return null;
    }
  }
  
  // Function to delete a cart by ID
  export async function deleteCartById(id) {
    try {
      const response = await fetch(`https://fakestoreapi.com/carts/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error deleting a cart:", error);
      return null;
    }
  }
  