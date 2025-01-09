document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const preview = document.getElementById("preview");

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.src = e.target.result;
        preview.style.display = "block";
      };
      reader.readAsDataURL(file);
    } else {
      preview.style.display = "none";
      preview.src = "";
    }
  });

document
  .getElementById("uploadForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fileInput = document.getElementById("fileInput");
    const statusMessage = document.getElementById("statusMessage");

    if (!fileInput.files[0]) {
      statusMessage.textContent = "Please select an image to upload.";
      statusMessage.style.color = "red";
      return;
    }

    const formData = new FormData();
    formData.append("photo", fileInput.files[0]);

    fetch("http://localhost:3000/image", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        statusMessage.textContent = data.msg || "Image uploaded successfully!";
        statusMessage.style.color = "#28a745";
        fileInput.value = "";
        document.getElementById("preview").style.display = "none";
      })
      .catch((error) => {
        console.error("Error:", error);
        statusMessage.textContent = "Error uploading image.";
        statusMessage.style.color = "red";
      });
  });
