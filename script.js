const grid = document.querySelector(`.grid-Container`);
const input = document.querySelector(`#size`);
const reset = document.querySelector(`.reset`);

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement(`div`);
    div.classList.add("square");
    grid.appendChild(div);
  }
}
const square = document.querySelector("div");
console.log(square);
square.addEventListener(`mouseover`, (e) => {
  e.target.classList.replace("square", "color");
});
reset.addEventListener(`click`, (e) => {
  grid.innerHTML = ``;
  input.value = ``;
  createGrid();
});
function updateGrid() {
  grid.innerHTML = ``;
  grid.style.setProperty("grid-template-columns", `repeat(${input.value},1fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(${input.value},1fr)`);

  const size = input.value;
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement(`div`);
    div.classList.add(`square`);

    grid.appendChild(div);
  }
}
input.addEventListener(`change`, updateGrid);

createGrid();
