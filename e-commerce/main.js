console.log("main.js loaded on", window.location.pathname);


import "./style.css";
import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards";

// Define a function named `showProductContainer` that takes an array of products as input.
showProductContainer(products);


  document.addEventListener("DOMContentLoaded", () => {
  const authArea = document.getElementById("authArea");
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  if (isLoggedIn) {
    authArea.innerHTML = `
      <div style="position: relative;">
        <i class="fa-solid fa-user" style="font-size: 24px; cursor: pointer;" id="profileIcon"></i>
        <div id="profileMenu" style="display: none; position: absolute; top: 30px; right: 0; background: white; border: 1px solid #ccc; padding: 10px;">
          <button id="logoutBtn" style="cursor:pointer;">Logout</button>
        </div>
      </div>
    `;

    // Toggle dropdown menu
    document.addEventListener("click", (e) => {
      const menu = document.getElementById("profileMenu");
      if (e.target.id === "profileIcon") {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
      } else if (!menu.contains(e.target)) {
        menu.style.display = "none";
      }
    });

    // Bind logout button
    document.addEventListener("click", (e) => {
      if (e.target.id === "logoutBtn") {
        localStorage.removeItem("loggedIn");
        location.reload();
      }
    });

  } else {
    authArea.innerHTML = `
      <a href="signIn.html">SIGN IN</a>
      <a href="signup.html">SIGN UP</a>
    `;
  }
});
