function searchPokemon() {
    const name = document.getElementById("searchBox").value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => {
        if (!res.ok) throw new Error("Pokémon not found");
        return res.json();
      })
      .then(data => {
        const preview = document.getElementById("preview");
        preview.innerHTML = `
          <div onclick="openDetails('${name}')" style="cursor:pointer;">
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}" />
            <p>Click for more details</p>
          </div>
        `;
      })
      .catch(err => {
        alert(err.message);
      });
  }
  
  function openDetails(name) {
    window.location.href = `details.html?name=${name}`;
  }
  