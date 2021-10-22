document.addEventListener("DOMContentLoaded", function (event) {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=200&offset=300`)
                .then(response => response.json())
                .then(mass => {
                        for( let i = 0; i < mass.results.length; i++){
                                createPokemon(mass.results[i]);
                        }
                })
                .catch(err => console.log(err));
});

function createPokemon(pokemon){
        fetch(pokemon.url)
        .then(response => (response.json()))
        .then(data => {
                let firstDiv = document.getElementById('firstDiv');

                let line1 = document.createElement('p');
                line1.textContent = data.name.toUpperCase();
                firstDiv.appendChild(line1);

                let img = document.createElement('img');
                img.className = "imgStyle";
                img.src = data.sprites.front_default;          
                firstDiv.appendChild(img);
        })
}