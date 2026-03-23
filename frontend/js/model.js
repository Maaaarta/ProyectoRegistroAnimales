const API_URL = 'http://localhost:3003/api/animals';
// url base de la api

export async function obtenirAnimals() {
    const resposta = await fetch(API_URL);
    const dades = await resposta.json();
    return dades; // devuelve la lista de animales
}

export async function afegirAnimal(animal) {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(animal)
    });
    return await res.json(); // devuelve el animal creado
}

export async function actualitzarAnimal(id, animal) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(animal)
    });
    return await res.json(); // devuelve el animal actualizado
}

export async function eliminarAnimal(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    // elimina el animal sin devolver nada
}
