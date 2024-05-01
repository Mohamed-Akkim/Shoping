const addToCartButton = document.getElementById('add-to-cart');
const cartMessage = document.querySelector('.cart-message');

addToCartButton.addEventListener('click', () => {
  cartMessage.textContent = 'Embrace Sideboard added to cart';
});
function changeImage(fileName) {

    let img = document.querySelector("#bannerImage"); img.setAttribute("src", fileName);
   
}

// addtocart




function addToCart() {
  var color = document.querySelector('input[name="color"]:checked').value;
  var size = document.querySelector('input[name="size"]:checked').value;
  var cartInfo = document.getElementById("cart-info");
  cartInfo.innerHTML = "Embrace Sideboard with Color " + color + " and Size " + size + " added to cart ";
}

// count

document.addEventListener("DOMContentLoaded", function() {
  const countDisplay = document.getElementById("count");
  const increaseBtn = document.getElementById("increaseBtn");
  const decreaseBtn = document.getElementById("decreaseBtn");

  increaseBtn.addEventListener("click", function() {
    let currentCount = parseInt(countDisplay.textContent);
    currentCount++;
    countDisplay.textContent = currentCount;
  });

  decreaseBtn.addEventListener("click", function() {
    let currentCount = parseInt(countDisplay.textContent);
    if (currentCount > 0) {
      currentCount--;
      countDisplay.textContent = currentCount;
    }
  });
});

