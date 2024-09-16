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
