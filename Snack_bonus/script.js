// Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.
// ⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca).

function deepFullCopyObject(objectToCopy) {
  if (objectToCopy && typeof objectToCopy === "object") {
    const clonedObject = Array.isArray(objectToCopy) ? [] : {};

    for (const key in objectToCopy) {
      if (objectToCopy.hasOwnProperty(key)) {
        if (objectToCopy[key] && typeof objectToCopy[key] === "object") {
          clonedObject[key] = deepFullCopyObject(objectToCopy[key]);
        } else {
          clonedObject[key] = objectToCopy[key];
        }
      }
    }
    return clonedObject;
  }
  return objectToCopy;
}

const mainRacket = {
  marchio: "Head",
  modello: {
    nome: "Extreme",
    variante: "MP",
    pesoTelaio: 290,
  },
  incordatura: {
    corde: "Green Fire",
    diametro: 1.25,
    tensione: "24kg",
    colore: "verde",
    peso: 10,
  },
  manico: {
    taglia: 3,
    grip: {
      nome: "Head Hydrosorb Pro",
      peso: 5,
    },
    overgrip: {
      nome: "Head Xtreme Soft",
      peso: 3,
    },
    pesoImbottitura: function () {
      return this.grip.peso + this.overgrip.peso;
    },
  },
  annoDiProduzione: 2023,
  pesoComplessivo: function () {
    return (
      this.modello.pesoTelaio +
      this.incordatura.peso +
      this.manico.pesoImbottitura()
    );
  },
};

const spareRacket = deepFullCopyObject(mainRacket);

mainRacket.annoDiProduzione = 2025;
spareRacket.manico.overgrip = { nome: "Head Prime Tour", peso: 4 };
console.log(mainRacket);
console.log(spareRacket);

console.log(mainRacket.pesoComplessivo());
console.log(mainRacket.manico.pesoImbottitura());
console.log(spareRacket.pesoComplessivo());
console.log(spareRacket.manico.pesoImbottitura());
