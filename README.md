# jarmukolcsonzes
Járműkölcsönzés beadandó projekt

A program képes legyen a járművekről adatbázist létrehozni, kezelni.
Ügyfelek számára a járműveket listázza, kölcsönbe adja.

Fogalmak:
jármű: autó amit kölcsönbe adunk.
ügyfél: regisztrált személy, aki az autókat kikölcsönözheti.
admin: rendszerkazda aki kezelheti a járművek elérhetőségét és az ügyfelek adatbázisát

Admin:
Kezeli a járművek, ügyfelek adatait.


Regisztrált felhasználók/ Ügyfelek:
kezelik a járművek kölcsönvételét, leadását.

Látogatók:
Oldal ismertetése, login felület. Reg. űrlap elérése.

Táblák:
-Users: ügyfelek tárolása
-Cars: járművek tárolására
-Park: járművek telephelye
-Rentals: kölcsönzések nyilvántartása

Táblák kapcsolata:
Users - Rentals - Cars
  1 felhasználó - 1 kölcsönzés - 1 jármű
 
Users - Park:
  1 felhasználó - több park járművei közül válogathat

Cars- Park
  több jármű - 1 telephely



