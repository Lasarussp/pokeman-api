const pokeman_container = document.getElementById("pokeman_container")

   const pokeMan_Number = 50;

   const fetchPokemans = async () => {
       for (let i=1; i<=pokeMan_Number; i++) {
        await getPokemans(i);
       }
     }

     try {
        fetchPokemans();
     } 
     catch (error) {
         ("somthing went wrong",error)
     }
 
    
 

const getPokemans = async (id) => {
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(pokeUrl);
    const pokeman =await res.json();
    createpokemanCard(pokeman);
    console.log(pokeman.moves[0].move);
    
}
  

function  createpokemanCard(pokeman) {
    const pokemanEle = document.createElement("div");
    pokemanEle.classList.add("pokeman");

    const pokemanInnerHTML = `
    <div class="img-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeman.id}.png"
    </div>
    <div class="info">
    <span class="number">#${pokeman.id.toString().padStart(3,"0")}</span>
    <h3 class="name"${name}></h3>
    ${pokeman.name}
    <br>
    Weight = ${pokeman.weight} 
    <br>

    `;
    pokemanEle.innerHTML = pokemanInnerHTML;
    pokeman_container.appendChild(pokemanEle);
}
fetchPokemans();




