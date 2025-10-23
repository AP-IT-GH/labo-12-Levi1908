"use strict";

let voorNaam = "sven", achterNaam = "maes";

let korteVoorNaam = (voorNaam.substring(0,1) + ".").toUpperCase();
let capitalAchterNaam = 
    achterNaam.replace(achterNaam.substring(0,1), achterNaam.substring(0,1).toUpperCase());

console.log(`De naam "${voorNaam +" "+ achterNaam}" zal worden afgekort als "${korteVoorNaam + " " + capitalAchterNaam}".`)