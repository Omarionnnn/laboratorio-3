
interface GruposMusicales {
    nombre: string;
    añoFundación: number;
    enActivo: boolean;
    géneroMusical: string;
}

const popRock = "🎵 Pop Rock";
const rock = " 🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clásica = "🎼 Clásica";

const estiloNombre = "font-weight: bold; font-size: larger; background-color: green";

const grupoMusicalA: GruposMusicales= {
    nombre: "The Beatles",
    añoFundación: 1960,
    enActivo: true,
    géneroMusical: "Pop Rock"
}

console.log("%cNombre: " + grupoMusicalA.nombre, estiloNombre);
console.log("Año de fundación: " + grupoMusicalA.añoFundación);
console.log("En activo: " + (grupoMusicalA.enActivo ? "Sí" : "No"));
console.log(`Género musical: ${popRock}`);

console.log("**************");

const grupoMusicalB : GruposMusicales = {
    nombre: "Queen",
    añoFundación: 1970,
    enActivo: false,
    géneroMusical: "Rock"
}

console.log("%cNombre: " + grupoMusicalB.nombre, estiloNombre);
console.log("Año de fundación: " + grupoMusicalB.añoFundación);
console.log("En activo: " + (grupoMusicalB.enActivo ? "Sí" : "No"));
console.log(`Género musical: ${rock}`);

console.log("**************");

const grupoMusicalC : GruposMusicales = {
    nombre: "AC DC",
    añoFundación: 1973,
    enActivo: true,
    géneroMusical: "Hard Rock"
}

console.log("%cNombre: " + grupoMusicalC.nombre, estiloNombre);
console.log("Año de fundación: " + grupoMusicalC.añoFundación);
console.log("En activo: " + (grupoMusicalC.enActivo ? "Sí" : "No"));
console.log(`Género musical: ${hardRock}`);

console.log("**************");

const grupoMusicalD : GruposMusicales = {
    nombre: "Ludwig van Beethoven",
    añoFundación: 1770,
    enActivo: false,
    géneroMusical: "Clásica"
}

console.log("%cNombre: " + grupoMusicalD.nombre, estiloNombre);
console.log("Año de fundación: " + grupoMusicalD.añoFundación);
console.log("En activo: " + (grupoMusicalD.enActivo ? "Sí" : "No"));
console.log(`Género musical: ${clásica}`);

console.log("**************");

const grupoMusicalE : GruposMusicales = {
    nombre: "The Rolling Stones",
    añoFundación: 1962,
    enActivo: true,
    géneroMusical: "Rock"
}

console.log("%cNombre: " + grupoMusicalE.nombre, estiloNombre);
console.log("Año de fundación: " + grupoMusicalE.añoFundación);
console.log("En activo: " + (grupoMusicalE.enActivo ? "Sí" : "No"));
console.log(`Género musical: ${rock}`);

    console.log("**************");