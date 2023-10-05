// 1. Definer en funksjon som heter "giTilMekaniker" med to parametere: "bil" og "callback."
function giTilMekaniker(bil, callback) {
  // 3. Inne i denne funksjonen bruker vi "callback" for å utføre en annen funksjon.
  callback(); // Her blir "callback" kalt som en funksjon.

  // Her kan du legge til mer kode som utføres før eller etter "callback" blir kalt.
}

// 4. Definer en annen funksjon som heter "mekanikerFerdig."
function mekanikerFerdig() {
  // 4a. Inne i denne funksjonen bruker vi "console.log" for å skrive en beskjed i konsollen.
  console.log("Mekanikeren er ferdig med reparasjonen!");
}

// 2. Nå, utenfor funksjonene, kaller vi "giTilMekaniker" og sender to argumenter til den: "Min bil" og "mekanikerFerdig."
giTilMekaniker("Min bil", mekanikerFerdig);
// 2a. Dette betyr at "bil" vil inneholde "Min bil," og "callback" vil inneholde "mekanikerFerdig."

// 3a. Inne i "giTilMekaniker" funksjonen, kaller vi "callback()" for å utføre "mekanikerFerdig" funksjonen.

// Når "mekanikerFerdig" blir kalt, vil den vise "Mekanikeren er ferdig med reparasjonen!" i konsollen.
