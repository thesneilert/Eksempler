// 1. Definer en funksjonskomponent "Bilmekaniker" som tar to props: "bil" og "callback."
function Bilmekaniker({ bil, callback }) {
  // 3. Inne i denne komponenten bruker vi "callback" for å utføre en annen funksjon.
  // 3a. Her kaller vi "callback(bil)" for å utføre "mekanikerFerdig(bil)"-funksjonen.
  callback(bil);

  // 6. Returner JSX for å vise resultatet i komponenten.
  return (
    <div>
      <p>Mekanikeren jobber med {bil}.</p>
    </div>
  );
}

// 4. Definer en funksjon "mekanikerFerdig" som tar "bil" som parameter.
function mekanikerFerdig(bil) {
  // 5. Inne i denne funksjonen bruker vi "console.log" for å skrive en beskjed i konsollen.
  console.log("Mekanikeren er ferdig med reparasjonen av " + bil);
}

// 2. I en annen del av koden, bruk "Bilmekaniker"-komponenten og send to props: "bil" og "callback."
// 2a. Dette betyr at "bil" vil inneholde "Min bil," og "callback" vil inneholde "mekanikerFerdig."
function App() {
  return (
    <div>
      <Bilmekaniker bil="Min bil" callback={mekanikerFerdig} />
    </div>
  );
}

// 7. Når "Bilmekaniker"-komponenten blir rendret, vil den igjen kalle "mekanikerFerdig" med "Min bil" som argument.
