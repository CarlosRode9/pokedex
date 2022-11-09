const pokemonName = document.querySelector('.nome_pk')
const pokemonNum = document.querySelector('.num_pk')
const pokemonIMG = document.querySelector('.PK_image')
let primeiro = 1
const form = document.querySelector('.form')
const input = document.querySelector('.busca')
const frente = document.querySelector('.btn-next')
const tras = document.querySelector('.btn-prev')
const peso = document.querySelector('.peso_pk')
const tipo = document.querySelector('.tipo_pk')
const tipoimg = document.querySelector('.tipoIcon')

var icones = [
    {
        "bug":'./assets/GO_Bug.png',
        "dank":'./assets/GO_Dark.png',
        "dragon":'./assets/GO_Dragon.png',
        "electric":'./assets/GO_Eletric.png',
        "fairy":'./assets/GO_Fairy.png',
        "fighting":'./assets/GO_Fighting.png',
        "fire":'./assets/GO_Fire.png',
        "flying":'./assets/GO_Flying.png',
        "ghost":'./assets/GO_Ghost.png',
        "grass":'./assets/GO_Grass.png',
        "ground":'./assets/GO_Ground.png',
        "ice":'./assets/GO_Ice.png',
        "normal":'./assets/GO_Normal.png',
        "poison":'./assets/GO_Poison.png',
        "psychic":'./assets/GO_Psychic.png',
        "rock":'./assets/GO_Rock.png',
        "steel":'./assets/GO_Steel.png',
        "water":'./assets/GO_Water.png',
    }
]

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {
    pokemonIMG.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs'
    pokemonName.innerHTML = 'Cargando...'
    pokemonNum.innerHTML = ''
    peso.innerHTML = '...'
    tipo.innerHTML = '...'
    const data = await fetchPokemon(pokemon)


    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNum.innerHTML = data.id;
        pokemonIMG.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = '';
        searchPokemon = data.id;
        primeiro = data.id
        peso.innerHTML = data.weight;
        tipo.innerHTML = data.types['0'].type.name;
    } else {
        pokemonName.innerHTML = ' -Error :('
        pokemonNum.innerHTML = '';
        pokemonIMG.src = 'https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif'
    }
}

const iconPk = async (pk) =>{
    console.log('ok')
    icones.forEach(icone =>{
        if(data === 'bug'){
            tipoimg.src = icone.bug
        }
    })
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});

tras.addEventListener('click', () => {
    if (primeiro > 1) {
        primeiro -= 1
        renderPokemon(primeiro)
    }
})

frente.addEventListener('click', () => {
    primeiro += 1
    renderPokemon(primeiro)
})



renderPokemon(primeiro)
