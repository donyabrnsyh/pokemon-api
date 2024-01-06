// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");

const baseImgURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 500; i++) {
  const pokeball = document.createElement("div");
  pokeball.classList.add("pokemon");

  const imgPokemon = document.createElement("img");
  imgPokemon.src = `${baseImgURL}${i}.png`;

  pokeball.appendChild(imgPokemon);
  container.appendChild(pokeball);

  const para = document.createElement("span");
  pokeball.appendChild(para);
  para.innerText = `#${i}`;
}
