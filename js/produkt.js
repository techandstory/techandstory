const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

window.addEventListener("load", getProduct);

function getProduct() {
  fetch(`https://eitpzfzwqrjncnwgbuqg.supabase.co/rest/v1/techandstory?id=eq.${id}`, {
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpdHB6Znp3cXJqbmNud2didXFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjM0MDAsImV4cCI6MjA0MTUzOTQwMH0.8FkKbLapnt5g8peUsqds68gBza1mQ4Kbp0h5IjMngZo",
    },
  })
    .then((res) => res.json())
    .then(visProdukt);
}
function visProdukt(data) {
  console.log(data);
  if (data && data.length > 0) {
    const singleProduct = data[0];
    document.querySelector("h3").textContent = singleProduct.produktnavn;
    const image = document.querySelector(".produktimg");
    image.alt = "image of " + singleProduct.produktnavn;
    image.src = `img/${singleProduct.produktnavn}.webp`;

    // Tilføj en event listener for at håndtere fejl
    image.onerror = () => {
      image.src = "img/placeholder.webp";
    };

    document.querySelector("p").textContent = "Dette produkt har ikke produktbeskrivelse af selve produktet inde på databasen, men hvis der var det skulle den være her:" + singleProduct.type;
  } else {
    console.error("No product found.");
  }
}

/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpdHB6Znp3cXJqbmNud2didXFnIiwicm9sZSI6ImFub24iLC
JpYXQiOjE3MjU5NjM0MDAsImV4cCI6MjA0MTUzOTQwMH0.8FkKbLapnt5g8peUsqds68gBza1mQ4Kbp0h5IjMngZo

*/

document.getElementById("orderButton").addEventListener("click", function () {
  alert("Tak for din ordre!");
});
