// 1. Definer en funksjon som heter "bilmekaniker" med to parametere: "bil" og "callback."
function bilmekaniker(bil, callback) {
    // 3. Inne i denne funksjonen bruker vi "callback" for å utføre en annen funksjon.
    // 3a. Her kaller vi "callback(bil)" for å utføre "mekanikerFerdig(bil)" funksjonen.
    callback(bil);
  }
  
  // 4. Definer en annen funksjon som heter "mekanikerFerdig" med en parameter "bil."
  function mekanikerFerdig(bil) {
    // 5. Inne i denne funksjonen bruker vi "console.log" for å skrive en beskjed i konsollen.
    console.log("Mekanikeren er ferdig med reparasjonen av " + bil);
  }
  
  // 2. Nå, utenfor funksjonene, kaller vi "bilmekaniker" og sender to argumenter til den: "Min bil" og "mekanikerFerdig."
  // 2a. Dette betyr at "bil" vil inneholde "Min bil," og "callback" vil inneholde "mekanikerFerdig."
  bilmekaniker("Min bil", mekanikerFerdig);
  
  // 6. Koden vil kalle "bilmekaniker" som vil igjen kalle "mekanikerFerdig" med "Min bil" som argument.
  