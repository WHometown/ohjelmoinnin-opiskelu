function plusMiinus() {
//esitellään muuttuja jonka arvo saadaan html:stä
var luku = document.getElementById('luku').value;
//tarkastetaan onko luku suurempi tai yhtä suuri kuin 0
  if (luku >= 0) {
    //ilmoitetaan ilmoitusruudulla, että luku on suurempi tai yhtä suuri kuin 0
    alert("Luku on positiivinen");
}
  else {
    //ilmoitetaan ilmoitusruudulla, että luku on pienempi kuin 0
    alert("Luku on negatiivinen");
  }
}

function mikaPaiva() {
  //esitellään muuttuja jonka arvo saadaan html:stä
var day = parseInt(document.getElementById('paiva').value);
  //Jos muuttujan arvo on 1-7, ilmoitetaan erillisellä ilmoitusruudulla vastaava viikonpäivä
  switch (day) {
    case 1:
    alert("Maanantai");
    break;
    case 2:
    alert("Tiistai");
    break;
    case 3:
    alert("Keskiviikko");
    break;
    case 4:
    alert("Torstai");
    break;
    case 5:
    alert("Perjantai");
    break;
    case 6:
    alert("Lauantai");
    break;
    case 7:
    alert("Sunnuntai");
    break;
    //ilmoitetaan, jos annettu arvo ei ole 1-7
    default:
    alert("Syötä arvo välillä 1-7");
    break;
  }
}

function karkaus() {
//esitellään muuttuja jonka arvo saadaan html:stä
var vuosi = document.getElementById('vuosi').value;
//Tarkistetaan onko luku jaollinen neljällä
if(vuosi % 4 == 0) {
   //Tarkistetaan onko luku jaollinen sadalla
    if(vuosi % 100 == 0) {
      //Tarkistetaan onko luku jaollinen neljälläsadalla
       if(vuosi % 400 == 0) {
         //Tulostetaan erilliselle ilmoitusruudulle
          alert("Vuosi on karkausvuosi");
       }
       else {
          alert("Vuosi ei ole karkausvuosi");
       }
    }
    else {
       alert("Vuosi on karkausvuosi");
    }
 }
 else {
    alert("Vuosi ei ole karkausvuosi");
 }
}

function summaKarvo() {
//esitellään muuttujat joiden arvot saadaan html:stä
var l1, l2, l3, l4, l5;
  l1 = parseInt(document.getElementById('l1').value);
  l2 = parseInt(document.getElementById('l2').value);
  l3 = parseInt(document.getElementById('l3').value);
  l4 = parseInt(document.getElementById('l4').value);
  l5 = parseInt(document.getElementById('l5').value);
// esitellään muuttuja ja annetaan arvoksi aiemmin esiteltyjen muuttujien summa
var summa = l1 + l2 + l3 + l4 + l5;
//esitellään muuttuja jonka arvo on aiemmin esiteltyjen muuttujien keskiarvo
var karvo = summa / 5
//Tulostetaan erilliselle ilmoitusruudulle annettujen lukujen summa ja kerskiarvo
alert('summa on '+summa+' ja keskiarvo on '+karvo);
}

function kerto() {
  //esitellään muuttuja ja annetaan sille alkuarvo; tyhjä merkkijono
  var tuloste = "";
  //esitellään muuttuja ja annetaan sille alkuarvo, joka saadaan html:stä
  var luku2 = parseInt(document.getElementById('luku2').value);
  //Esitellään muuttuja, joka saa silmukassa arvon 1-10
    for (var i = 1; i <= 10; i++) {
      //Lisätään tulostettavaan merkkijonoon kertolasku ja tulos
      tuloste += luku2 + "*" + i + "=" + luku2 * i + "     ";
    }
    //Tulostetaan erilliselle ilmoitusruudulle annetun luvun kymmenen kertotaulu
    alert('Kymmenen kertotaulu luvulle ' + luku2 + "     " + tuloste);
}
