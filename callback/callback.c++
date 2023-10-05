#include <iostream>
using namespace std;

// 1. Definer en funksjon for å gi bilen til mekanikeren
void GiTilMekaniker(string bil, void (*callback)()) {
    // 3. Inne i denne funksjonen bruker vi "callback" for å utføre en annen funksjon.
    callback(); // Her blir "callback" kalt som en funksjon.

    // Her kan du legge til mer C++-kode som utføres før eller etter "callback" blir kalt.
}

// 4. Definer en annen funksjon som heter "mekanikerFerdig."
void MekanikerFerdig() {
    // 4a. Inne i denne funksjonen bruker vi "cout" for å skrive en beskjed til konsollen.
    cout << "Mekanikeren er ferdig med reparasjonen!" << endl;
}

int main() {
    // 2. Nå, utenfor funksjonene, kaller vi "GiTilMekaniker" og sender to argumenter til den: "Min bil" og "MekanikerFerdig."
    GiTilMekaniker("Min bil", MekanikerFerdig);

    // 2a. Dette betyr at "bil" vil inneholde "Min bil," og "callback" vil inneholde "MekanikerFerdig."

    // 3a. Inne i "GiTilMekaniker" funksjonen, kaller vi "callback()" for å utføre "MekanikerFerdig" funksjonen.

    // Når "MekanikerFerdig" blir kalt, vil den skrive "Mekanikeren er ferdig med reparasjonen!" til konsollen.
    return 0;
}
