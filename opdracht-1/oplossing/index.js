const itemToevoegen = () => {
  const lijst = document.querySelector("#lijst");
  const itemInputWaarde = document.querySelector("#item-input").value;

  if (itemInputWaarde) {
    const nieuwLiEl = document.createElement("li");
    nieuwLiEl.textContent = itemInputWaarde;
    nieuwLiEl.classList.add("list-group-item");
    lijst.appendChild(nieuwLiEl);
  }
};

const itemVerwijderen = () => {
  const lijst = document.querySelector("#lijst");
  lijst.removeChild(lijst.lastChild);
};
