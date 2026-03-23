export function mostrarAnimals(animals, onEdit, onDelete) {
    const llista = document.getElementById('llista-animals');
    // selecciona el contenidor de la taula

    llista.innerHTML = `
        <table class="taula-animals">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Especie</th>
                    <th>Edat</th>
                    <th>Propietari</th>
                    <th>Observacions</th>
                    <th>Imatge</th>
                    <th>Accions</th>
                </tr>
            </thead>
            <tbody id="cos-taula-animals"></tbody>
        </table>
    `;
    // crea l'estructura de la taula

    const cosTaula = document.getElementById('cos-taula-animals');
    // selecciona el cos de la taula

    animals.forEach(animal => {
        const fila = document.createElement('tr');
        // crea una fila nova

        const imatgeSrc = animal.imatge || 'https://via.placeholder.com/60';
        // usa imatge per defecte si no hi ha

        fila.innerHTML = `
            <td>${animal.nom}</td>
            <td>${animal.especie}</td>
            <td>${animal.edat}</td>
            <td>${animal.propietari}</td>
            <td>${animal.observacions || ''}</td>
            <td><img src="${imatgeSrc}" alt="null" class="imatge-animal"></td>
            <td>
                <button class="boto-editar btn-editar">✏️</button>
                <button class="boto-eliminar btn-eliminar">❌</button>
            </td>
        `;
        // omple la fila amb dades de l'animal

        fila.querySelector('.btn-editar').addEventListener('click', () => onEdit(animal));
        fila.querySelector('.btn-eliminar').addEventListener('click', () => onDelete(animal._id));
        // afegeix funcionalitat als botons

        cosTaula.appendChild(fila);
        // afegeix la fila a la taula
    });
}

export function configurarFormulari(onSubmit) {
    const formulari = document.getElementById('formulari-animal');
    // selecciona el formulari

    formulari.addEventListener('submit', (e) => {
        e.preventDefault(); // evita recarregar la pagina

        const animal = {
            nom: formulari.nom.value,
            especie: formulari.especie.value,
            edat: parseInt(formulari.edat.value),
            propietari: formulari.propietari.value,
            observacions: formulari.observacions.value
        };
        // recull dades del formulari

        onSubmit(animal); // crida la funcio amb les dades
        formulari.reset(); // neteja el formulari
    });
}

const missatge = document.getElementById('missatge');
missatge.textContent = "llista carregada amb exit!";
setTimeout(() => { missatge.textContent = ""; }, 3000);
// mostra un missatge temporal
