let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active')
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active')
    navbar.classList.remove('active')
    loginForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active')
    navbar.classList.remove('active')
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active')
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active')
    navbar.classList.remove('active')
}


document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.btn-add'); 
    const cartCount = document.querySelector('.cart-count'); 
    let count = 0; 

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            count++; 
            cartCount.textContent = count;
        });
    });
});



document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name = document.getElementById("name-input").value;
    var email = document.getElementById("email-input").value;
    var location = document.getElementById("location-input").value;
    var age = document.getElementById("age-input").value;
    var paymentMethod = document.getElementById("payment-method").value;
  
    document.getElementById("submitted-name").textContent = name;
    document.getElementById("submitted-email").textContent = email;
    document.getElementById("submitted-location").textContent = location;
    document.getElementById("submitted-age").textContent = age;
    document.getElementById("submitted-payment-method").textContent = paymentMethod;
  
    document.getElementById("submitted-data").style.display = "block";
    setTimeout(function() {
      document.getElementById("submitted-data").classList.add("show");
    }, 100);
  });
  
  document.getElementById("done-button").addEventListener("click", function() {
    document.getElementById("submitted-data").classList.remove("show");
    setTimeout(function() {
      document.getElementById("submitted-data").style.display = "none";
    }, 300);
  });

  document.getElementById("done-button").addEventListener("click", function() {
    location.reload();
  });

  document.getElementById("check-out").addEventListener("click", function() {
    location.reload();
  });