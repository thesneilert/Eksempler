// 1. Definer en funksjon for å gi bilen til mekanikeren
function GiTilMekaniker({ bil, callback }: { bil: string; callback: () => void }) {
  // void betyr at det ikke sendes noe verdi.
  // 3. Inne i denne funksjonen bruker vi "callback" for å utføre en annen funksjon.
  callback(); // Her blir "callback" kalt som en funksjon.

  // Her kan du legge til mer JSX-kode som vises i komponenten før eller etter "callback" blir kalt.
  return (
    <div>
      {/* JSX-kode kan legges til her */}
    </div>
  );
}

// 4. Definer en annen funksjon som heter "mekanikerFerdig."
function MekanikerFerdig() {
  // 4a. Inne i denne funksjonen bruker vi "console.log" for å skrive en beskjed i konsollen.
  console.log("Mekanikeren er ferdig med reparasjonen!");
}

// 2. Nå, utenfor funksjonene, kaller vi "GiTilMekaniker" og sender to argumenter til den: "Min bil" og "MekanikerFerdig."
function App() {
  return (
    <div>
      <GiTilMekaniker bil="Min bil" callback={MekanikerFerdig} />
    </div>
  );
}

// 2a. Dette betyr at "bil" vil inneholde "Min bil," og "callback" vil inneholde "MekanikerFerdig."

// 3a. Inne i "GiTilMekaniker" funksjonen, kaller vi "callback()" for å utføre "MekanikerFerdig" funksjonen.

// Når "MekanikerFerdig" blir kalt, vil den vise "Mekanikeren er ferdig med reparasjonen!" i konsollen.

export default App;
