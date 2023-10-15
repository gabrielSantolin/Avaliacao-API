function buscarPersonagem() {
    let personagemId = document.getElementById('personagem').value;

    fetch(`https://swapi.dev/api/people/${personagemId}/`)
        .then((resposta) => resposta.json())
        .then((dado) => {
            const elementos = {
                'nome': 'name',
                'ano_de_nascimento': 'birth_year',
                'altura': 'height',
                'cabelo': 'hair_color',
                'peso': 'mass'
            };

            for (let elementoId in elementos) {
                const elemento = document.getElementById(elementoId);
                elemento.innerHTML = dado[elementos[elementoId]];
            }
        })
        .catch((erro) => {
            console.error('Ocorreu um erro:', erro);
        });
}


function buscarPlaneta() {

    let planetaId = document.getElementById('planeta').value;

    fetch(`https://swapi.dev/api/planets/${planetaId}/`)
        .then((resposta) => resposta.json())
        .then((dado) => {
            let name = document.getElementById('nome');
            name.innerHTML = dado.name;

            let clima = document.getElementById('clima');
            clima.innerHTML = dado.climate;

            let diametro = document.getElementById('diametro');
            diametro.innerHTML = dado.diameter;

            let populacao = document.getElementById('populacao');
            populacao.innerHTML = dado.population;

            let terreno = document.getElementById('terreno');
            terreno.innerHTML = dado.terrain;
        })
        .catch((erro) => {
            console.error('Ocorreu um erro:', erro);
        });
}

function buscarEspecies() {

    let especiesId = document.getElementById('especies').value;

    fetch(`https://swapi.dev/api/species/${especiesId}/`)
        .then((resposta) => resposta.json())
        .then((dado) => {
            let name = document.getElementById('nome');
            name.innerHTML = dado.name;

            let idioma = document.getElementById('idioma');
            idioma.innerHTML = dado.language;

            let vida = document.getElementById('vida');
            vida.innerHTML = dado.average_lifespan + " anos";

            let altura = document.getElementById('altura');
            altura.innerHTML = dado.average_height;

            let classificacao = document.getElementById('classificacao');
            classificacao.innerHTML = dado.classification;
        })
        .catch((erro) => {
            console.error('Ocorreu um erro:', erro);
        });
}

function buscarNaves() {

    let navesId = document.getElementById('naves').value;

    fetch(`https://swapi.dev/api/starships/${navesId}/`)
        .then((resposta) => resposta.json())
        .then((dado) => {
            let name = document.getElementById('nome');
            name.innerHTML = dado.name;

            let modelo = document.getElementById('modelo');
            modelo.innerHTML = dado.model;

            let carga = document.getElementById('carga');
            carga.innerHTML = dado.cargo_capacity;

            let valor = document.getElementById('valor');
            valor.innerHTML = dado.cost_in_credits;

            let comprimento = document.getElementById('comprimento');
            comprimento.innerHTML = dado.length;
        })
        .catch((erro) => {
            console.error('Ocorreu um erro:', erro);
        });
}