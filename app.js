const btn = document.querySelector("button");
let resultJoke = document.querySelector("p");

async function generateJoke() {
  const url = "https://v2.jokeapi.dev/joke/Any?type=single";
  const data = await fetch(url);
  const json = await data.json();
  const category = json.category;
  const joke = json.joke;

  resultJoke.textContent = `${category}: ${joke}`;
}
btn.addEventListener("click", generateJoke);
onload = generateJoke();
