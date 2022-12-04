function getCatImage() {
    fetch("https://api.thecatapi.com/v1/images/search").then((response) => {
      // Resolve the promise we got from calling then() to the promise that we get from calling json()
      const promise = response.json();
      promise.then((value) => {
        const img = document.getElementById("catImage");
        img.src = value[0].url;
      });
    });
  }