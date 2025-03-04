document.addEventListener("DOMContentLoaded", function () {
    fetch("./data/photographers.json")
        .then(response => response.json())
        .then(data => {
            const photographers = data.data;
            const photographerList = document.getElementById("photographer-list");
  
            photographers.forEach(photographer => {
                const stars = getStars(photographer.rating);
                const listItem = `
                    <div class="swiper-slide listing-item p-2">
                        <div class="img-holder">
                            ${photographer.offer ? `<span class="offer">${photographer.offer}</span>` : ""}
                            <img src="${photographer.src}" alt="${photographer.studio}">
                            <div class="rate-like centering justify-content-between">
                                <div class="rating">${stars}</div>
                                <a class="likes" href="#"><i class="far fa-user"></i> ${photographer.likes} Reviews</a>
                            </div>
                        </div>
                        <div class="list-content p-2 mt-2">
                            <h5 class="mb-2"><a href="#">${photographer.studio}</a></h5>
                            <p>${photographer.description}</p>
                            <ul class="ctg-info2 pt-2 mt-3 centering justify-content-between">
                                <li class="mt-1">
                                    <a href="#"><i class="fa mr-2 fa-map-marker"></i> ${photographer.location}</a>
                                </li>
                                <li class="mt-1">
                                    <a href="#"><i class="fa fa-phone mr-2"></i> ${photographer.mobileno}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                `;
                photographerList.innerHTML += listItem;
            });
  
            // Initialize Swiper after adding content
            new Swiper('.swiper', {
                slidesPerView: 4,
                spaceBetween: 15,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    480: {
                        slidesPerView: 1,
                    },
                },
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
  });
  
  // Function to generate star rating HTML
  function getStars(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? '<i class="fa fa-star"></i>' : '<i class="far fa-star"></i>';
    }
    return stars;
  }