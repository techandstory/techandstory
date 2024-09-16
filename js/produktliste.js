const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
console.log(category);

fetch(`https://eitpzfzwqrjncnwgbuqg.supabase.co/rest/v1/techandstory?category=eq.${category}`, {
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpdHB6Znp3cXJqbmNud2didXFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjM0MDAsImV4cCI6MjA0MTUzOTQwMH0.8FkKbLapnt5g8peUsqds68gBza1mQ4Kbp0h5IjMngZo",
  },
})
  .then((res) => res.json())
  .then((data) => {
    const uniqueProducts = new Set();
    const filteredData = data.filter((item) => {
      if (uniqueProducts.has(item.produktnavn)) {
        return false;
      } else {
        uniqueProducts.add(item.produktnavn);
        return true;
      }
    });
    vis(filteredData);
  });

function vis(data) {
  console.table(data); // Dette viser dataene i konsollen

  data.forEach((item) => {
    const template = document.querySelector("#smallProductTemplate").content;
    const copy = template.cloneNode(true);

    copy.querySelector("h3").textContent = item.produktnavn;
    copy.querySelector(".subtle").textContent = item.type;

    document.querySelector("main").appendChild(copy);
  });
}

// TEST TEST TEST TEST TIL BILLEDER

// const urlParams = new URLSearchParams(window.location.search);
// const category = urlParams.get("category");
// console.log(category);

// fetch(`https://eitpzfzwqrjncnwgbuqg.supabase.co/rest/v1/techandstory?category=eq.${category}`, {
//   headers: {
//     apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpdHB6Znp3cXJqbmNud2didXFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjM0MDAsImV4cCI6MjA0MTUzOTQwMH0.8FkKbLapnt5g8peUsqds68gBza1mQ4Kbp0h5IjMngZo", // Erstat med din egen Supabase API-nøgle
//   },
// })
//   .then((res) => res.json())
//   .then((data) => {
//     const uniqueProducts = new Set();
//     const filteredData = data.filter((item) => {
//       if (uniqueProducts.has(item.produktnavn)) {
//         return false;
//       } else {
//         uniqueProducts.add(item.produktnavn);
//         return true;
//       }
//     });
//     fetchImages(filteredData);
//     vis(filteredData);
//   });

// function vis(data) {
//   console.table(data); // Dette viser dataene i konsollen

//   data.forEach((item) => {
//     const template = document.querySelector("#productList").content;
//     const copy = template.cloneNode(true);

//     copy.querySelector("h3").textContent = item.produktnavn;
//     copy.querySelector(".subtle").textContent = item.type;

//     document.querySelector("main").appendChild(copy);
//   });
// }

// function fetchImages(products) {
//   const accessKey = "wnOAV-jBtUn2i9iVuaNsyMaxo1PMGwoNGwecwYGquaA"; // Erstat med din egen Unsplash API-nøgle
//   products.forEach((product) => {
//     fetch(`https://api.unsplash.com/search/photos?query=${product.produktnavn}&client_id=${accessKey}`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.results.length > 0) {
//           product.imageUrl = data.results[0].urls.small;
//         } else {
//           product.imageUrl = "default-image-url"; // Erstat med en standardbillede-URL, hvis der ikke findes et billede
//         }
//         displayProduct(product);
//       })
//       .catch((error) => console.error("Error fetching images:", error));
//   });
// }

// function displayProduct(product) {
//   const productList = document.getElementById(".productList");
//   const productElement = document.createElement("template");
//   productElement.querySelector("img").src = `https://api.unsplash.com/search/photos?query=${product.produktnavn}&client_id=${accessKey}`;

//   const imgElement = document.createElement("img");
//   imgElement.src = product.imageUrl;
//   imgElement.alt = product.produktnavn;

//   const nameElement = document.createElement("h3");
//   nameElement.textContent = product.produktnavn;

//   productElement.appendChild(imgElement);
//   productElement.appendChild(nameElement);
//   productList.appendChild(productElement);
// }
