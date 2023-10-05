using System;

// 1. Definer en delegate som beskriver en funksjon som tar en streng som parameter.
delegate void MekanikerDelegate(string bil);

class Program
{
    static void Main()
    {
        // 3. Opprett en instans av MekanikerDelegate og tilordne "mekanikerFerdig" til den.
        MekanikerDelegate mekaniker = mekanikerFerdig;

        // 4. Kall metoden "UtførArbeid" og send "Min bil" og "mekaniker" som argumenter.
        UtførArbeid("Min bil", mekaniker);
    }

    // 2. Definer en metode "UtførArbeid" som tar en streng "bil" og en "MekanikerDelegate" som parameter.
    static void UtførArbeid(string bil, MekanikerDelegate mekaniker)
    {
        // 5. Konsollutskrift for å vise at mekanikeren starter arbeidet.
        Console.WriteLine($"Mekanikeren starter arbeidet på {bil}");

        // 6. Kall "mekaniker" (som er "mekanikerFerdig") og send "bil" som argument.
        mekaniker(bil);

        // 7. Konsollutskrift for å vise at mekanikeren er ferdig med arbeidet.
        Console.WriteLine($"Mekanikeren er ferdig med {bil}");
    }

    // 8. Definer en metode "mekanikerFerdig" som tar en streng "bil" som parameter.
    static void mekanikerFerdig(string bil)
    {
        // 9. Konsollutskrift for å vise at mekanikeren er ferdig med reparasjonen.
        Console.WriteLine($"Mekanikeren er ferdig med reparasjonen av {bil}");
    }
}
