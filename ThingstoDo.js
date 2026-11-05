 const images = document.querySelectorAll(".imagecontainer img");
  const descriptions = document.querySelectorAll(".descriptions p");

  images.forEach(function (image) {
    image.addEventListener("click", function () {
      descriptions.forEach(function (description) {
        description.classList.remove("active");
      });

      const selectedDescription = document.getElementById(
        image.dataset.target
      );

      selectedDescription.classList.add("active");

      const lightbox = document.createElement("div");
      lightbox.className = "lightbox";

      const content = document.createElement("div");
      content.className = "lightbox-content";

      const enlargedImage = document.createElement("img");
      enlargedImage.src = image.src;
      enlargedImage.alt = image.alt;

      const text = document.createElement("div");
      text.className = "lightbox-text";
      text.textContent = selectedDescription.textContent;

      content.appendChild(enlargedImage);
      content.appendChild(text);
      lightbox.appendChild(content);
      document.body.appendChild(lightbox);

      lightbox.addEventListener("click", function () {
        lightbox.remove();
      });

      content.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    });
  });