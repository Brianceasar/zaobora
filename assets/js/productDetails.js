// Fetch product details from JSON and populate the page
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("product"); // Get the product ID from the URL
  
    fetch("assets/js/products.json")
      .then((response) => response.json())
      .then((products) => {
        const product = products.find((p) => p.id === productId);
  
        if (product) {
          populateProductDetails(product);
        } else {
          document.querySelector(".product-details-section").innerHTML =
            "<h3>Product not found</h3>";
        }
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  });
  
  // Populate product details using template literals
  function populateProductDetails(product) {
    // Injecting product information
    const productDetailsContainer = document.querySelector(".product-details-section .container");
  
    const productDetailsHTML = `
      <div class="row g-xl-4 g-3 justify-content-center">
        <div class="col-lg-9 col-md-7">
          <div class="row g-4 mb-60">
            <!-- Product Image Section -->
            <div class="col-xl-5 col-lg-6">
              <div class="shop-details-wrap">
                <div class="swiper mySwiper2">
                  <div class="swiper-wrapper">
                    ${product.images
                      .map(
                        (img) => `
                    <div class="swiper-slide">
                      <div class="shop-details-bigthumb">
                        <img src="${img}" alt="${product.title}">
                      </div>
                    </div>`
                      )
                      .join("")}
                  </div>
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                </div>
                <div class="swiper mySwiper">
                  <div class="swiper-wrapper">
                    ${product.images
                      .map(
                        (img) => `
                    <div class="swiper-slide">
                      <div class="shop-details-samll d-center">
                        <img src="${img}" alt="${product.title}">
                      </div>
                    </div>`
                      )
                      .join("")}
                  </div>
                </div>
              </div>
            </div>
            <!-- Product Info Section -->
            <div class="col-xl-7 col-lg-6">
              <div class="product-infowrap">
                <h3 class="title">${product.title}</h3>
                <p>${product.description}</p>
                <a href="#getintouch" class="cmn-btn d-inline-flex">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  
    productDetailsContainer.innerHTML = productDetailsHTML;
  
    // Reinitialize Swiper (if already initialized)
    setTimeout(() => {
      new Swiper(".mySwiper2", { /* Swiper options */ });
      new Swiper(".mySwiper", { /* Swiper options */ });
    }, 100);
  }
  