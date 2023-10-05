// Eksempel 1: Global Scoping

var globalVariable = "Jeg er en global variabel";

function checkCar() {
  console.log(globalVariable); // Kan aksessere globalVariable
}

checkCar(); // Kjører funksjonen

// Eksempel 2: Local Scoping

function fixCar() {
  var localVariable = "Jeg er en lokal variabel innenfor fixCar-funksjonen";
  console.log(localVariable); // Kan aksessere localVariable
}

fixCar(); // Kjører funksjonen

// Prøver å aksessere localVariable utenfor fixCar-funksjonen
// Dette vil føre til en feilmelding
console.log(localVariable); 

// Eksempel 3: Block Scoping (introdusert med let og const)

if (true) {
  let blockVariable = "Jeg er en variabel innenfor en blokk";
  console.log(blockVariable); // Kan aksessere blockVariable
}

// Prøver å aksessere blockVariable utenfor blokken
// Dette vil føre til en feilmelding
console.log(blockVariable);
