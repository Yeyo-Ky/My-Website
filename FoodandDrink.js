  const foodData = {
    breakfast: {
      text: "Enjoy delicious quesitos made from puff pastry and sweet cream cheese. Then wash it all down with cafe con leche.",
      images: [
        "ImagesWeb/quesitos.jpg",
        "ImagesWeb/Cafe.jpg"
      ]
    },

    lunch: {
      text: "Enjoy a fried favorite like alcapurritas with assorted meats. Try mofongo, a mashed side dish made with plantains. Or take it up a notch with pastelon, a beef lasagna with plantains.",
      images: [
        "ImagesWeb/alcapurrias.jpg",
        "ImagesWeb/Mofongo.png",
         "ImagesWeb/Pastelon.jpg",
      ]
    },

    dinner: {
      text: "Looking to try an island classic? Chow down on some arroz con gandules. Then wash it down with a refreshing pina colada, invented here in Puerto Rico! Need to beat the heat, try the famous frozen coconut in a cup treat, limber de coco.",
      images: [
        "ImagesWeb/arroz-con-gandules.jpg",
        "ImagesWeb/Pina Colada.jpg",
        "ImagesWeb/LimberdeCoco.png"
      ]
    }
  };

  const lightbox = document.getElementById("lightbox");
  const lightboxImages = document.getElementById("lightbox-images");
  const lightboxText = document.getElementById("lightbox-text");
  const closeButton = document.querySelector(".close-button");

  document.querySelectorAll(".food-bar").forEach(function (button) {
    button.addEventListener("click", function () {
      const category = foodData[button.dataset.category];

      lightboxImages.innerHTML = "";

      category.images.forEach(function (imageSource) {
        const image = document.createElement("img");
        image.src = imageSource;
        image.alt = button.textContent;
        lightboxImages.appendChild(image);
      });

      lightboxText.textContent = category.text;
      lightbox.classList.add("show");
    });
  });

  closeButton.addEventListener("click", function () {
    lightbox.classList.remove("show");
  });

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      lightbox.classList.remove("show");
    }
  });