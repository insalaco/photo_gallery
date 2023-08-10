const submitButton = document.getElementById("btn");

const errorMessage = document.getElementById("errorMessage");

const gallery = document.querySelector(".gallery");

// fetch images from unspash.com
async function fetchImage () {
  const inputValue = document.getElementById("input").value;

  if (inputValue > 12 || inputValue  < 1) {
    errorMessage.style.display = "block";
    errorMessage.innerText = "number should be 1 through 12";
    return
  }
  
  let imgs = '';

  try {
    submitButton.style.display = "none";
    const loading = `<img src="loading.svg" />`;
    gallery.innerHTML = loading;
  
    await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random() * 1000)}&client_id=JrjhTJSxNLNPp1Vm9UmjZRHbzw8MA85dSBOdAtWNm0E`).then(
      res => 
        res.json().then(data => {

          if (data) {
            data.forEach(pic => {
              imgs += `<img src="${pic.urls.small}" alt="image" />`;
              gallery.style.display = "block";
              gallery.innerHTML = imgs;
              submitButton.style.display = "block";
              errorMessage.style.display = "none";      
            });
          }
        })
    );
  
    

  } catch (error) {
    errorMessage.style.display = "block";
    errorMessage.innerText = "An error has occurred. Try again later.";
    submitButton.style.display = "block";
    gallery.style.display = "none";
  }
}

submitButton.addEventListener("click", fetchImage);