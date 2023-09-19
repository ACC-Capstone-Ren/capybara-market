

// Function to fetch all users
export async function fetchAllUsers() {
    try {
      const response = await fetch("https://fakestoreapi.com/users");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }
  
  // Function to fetch a single user by ID
  export async function fetchUserById(id) {
    try {
      const response = await fetch(`https://fakestoreapi.com/users/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  }
  
  // Function to fetch users with a limit
  export async function fetchUsersLimit(limit) {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/users?limit=${limit}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching limited users:", error);
      return [];
    }
  }
  
  // Function to fetch users sorted by 'asc' or 'desc'
  export async function fetchUsersSorted(sortOrder) {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/users?sort=${sortOrder}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching sorted users:", error);
      return [];
    }
  }
  
  // Function to add a new user
  export async function addUser(newUser) {
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error adding a user:", error);
      return null;
    }
  }
  
  // Function to update a user by ID
  export async function updateUserById(id, updatedUser) {
    try {
      const response = await fetch(`https://fakestoreapi.com/users/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error updating a user:", error);
      return null;
    }
  }
  
  // Function to delete a user by ID
  export async function deleteUserById(id) {
    try {
      const response = await fetch(`https://fakestoreapi.com/users/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error deleting a user:", error);
      return null;
    }
  }
  
  // Function for user login
  export async function userLogin(username, password) {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "mor_2314",
          password: "83r5^_",
        }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error logging in:", error);
      return null;
    }
  }