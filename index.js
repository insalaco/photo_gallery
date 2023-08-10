// get info from input
// get info from button

// get info from error message

const submitButton = document.getElementById("btn");

// fetch images from unspash.com
function fetchImage () {
  const inputValue = document.getElementById("input").value;
  
  fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=1&client_id=`).then(
    (res) => 
      res.json().then((data) => {
        console.log(data);
      })
  );
}

submitButton.addEventListener("click", fetchImage);