const imageElement = document.getElementById("catImage");
const factElement = document.getElementById("fact");
const button = document.getElementById("generateBtn");

async function loadCatStuff() {
  try {
    // Fetch cat image
    const imageRes = await fetch("https://api.thecatapi.com/v1/images/search");
    const imageData = await imageRes.json();
    imageElement.src = imageData[0].url;

    // Fetch cat fact
    const factRes = await axios.get("https://catfact.ninja/fact");
    factElement.innerText = factRes.data.fact;
  } catch (err) {
    console.error("Error fetching cat content:", err);
    factElement.innerText = "Oops! Couldn't fetch a fact right now.";
  }
}

// Button click triggers both updates
button.addEventListener("click", loadCatStuff);

// Initial content on page load
window.onload = loadCatStuff;
