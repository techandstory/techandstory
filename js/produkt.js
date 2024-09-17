window.addEventListener("load", getProduct);

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

function getProduct() {
  fetch(`https://eitpzfzwqrjncnwgbuqg.supabase.co/rest/v1/techandstory?category&eq.${id}`, {
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpdHB6Znp3cXJqbmNud2didXFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjM0MDAsImV4cCI6MjA0MTUzOTQwMH0.8FkKbLapnt5g8peUsqds68gBza1mQ4Kbp0h5IjMngZo",
    },
  })
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(data) {
  console.log(data);
}

/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpdHB6Znp3cXJqbmNud2didXFnIiwicm9sZSI6ImFub24iLC
JpYXQiOjE3MjU5NjM0MDAsImV4cCI6MjA0MTUzOTQwMH0.8FkKbLapnt5g8peUsqds68gBza1mQ4Kbp0h5IjMngZo

*/

document.getElementById("orderButton").addEventListener("click", function () {
  alert("Tak for din ordre!");
});
