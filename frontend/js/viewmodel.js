import {
    obtenirAnimals,
    afegirAnimal,
    actualitzarAnimal,
    eliminarAnimal
} from './model.js'; // importa funcions del model

import {
    mostrarAnimals,
    configurarFormulari
} from './view.js'; // importa funcions de la vista

let idEditant = null; // guarda l'id si s'està editant

async function carregarAnimals() {
    const animals = await obtenirAnimals(); // obté tots els animals
    mostrarAnimals(animals, prepararEdicio, manejarEliminar); // els mostra
}

async function manejarNouAnimal(animal) {
    if (idEditant) {
        await actualitzarAnimal(idEditant, animal); // si s'edita, actualitza
        idEditant = null;
    } else {
        await afegirAnimal(animal); // si no, afegeix un de nou
    }

    await carregarAnimals(); // recarrega la llista
}

function prepararEdicio(animal) {
    const formulari = document.getElementById('formulari-animal');
    // carrega dades al formulari
    formulari.nom.value = animal.nom;
    formulari.especie.value = animal.especie;
    formulari.edat.value = animal.edat;
    formulari.propietari.value = animal.propietari;
    formulari.observacions.value = animal.observacions || '';
    idEditant = animal._id; // guarda l'id per editar
}

async function manejarEliminar(id) {
    const confirmat = window.confirm("segur que vols eliminar aquest registre d'animal?");
    if (!confirmat) return; // si no confirma, surt

    await eliminarAnimal(id); // elimina
    await carregarAnimals(); // recarrega la llista
}

export function inicialitzarApp() {
    carregarAnimals(); // inicialitza la llista
    configurarFormulari(manejarNouAnimal); // configura el formulari
}
