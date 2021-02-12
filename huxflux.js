// Här är filen du ska ändra i! Huxflux-funktionen ska returnera
// en lista med 7 unika slumpmässiga heltal mellan 1 och 35. När
// du öppnat projektet i browsern, kan du trycka på "Prova funktionen"
// för att köra den och "Kör tester på funktionen" för att se om alla
// krav uppfylls.

const huxflux = () => {
  let list = []; // Skapa en tom lista

  for (let i = 0; i < 7; i++) {
    let number = Math.floor(Math.random() * 35) + 1; // Slumpa ett tal från 1 till och med 35

    if (!list.includes(number)) { // Om numret inte redan finns
      list.push(number); // Så lägg till det i listan
    } else {
      i--; // Annars så backar vi för att ta fram ett nytt slumpat nummer istället
    }
  }

  return list;
}

// För att använda lodash så behövs importen som finns på rad 38 i index.html
const huxfluxLodash = () => {
  let allNumbers = _.range(1, 35 + 1); // Generera en lista med alla värden från 1 till och med 35

  let shuffledNumbers = _.shuffle(allNumbers); // Blanda runt ordningen

  let list = _.take(shuffledNumbers, 7); // Plocka ut de 7 första numren från den blandade listan

  return list;
}

export {
  huxflux
}
