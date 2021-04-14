function jarjesta() {
// määritetään muuttujat ja annetaan niille arvot
var luku1 = document.getElementById('eka').value;
var luku2 = document.getElementById('toka').value;
var luku3 = document.getElementById('kolmas').value;
// ilmoitetaan käyttäjän syöttämät luvut
alert("Annoit luvut: " + luku1 + ' ' + luku2 + ' ' + luku3 );
// laitetaan luvut suuruusjärjestykseen ja ilmoitetaan ne käyttäjälle
if(luku1 < luku2 && luku1 < luku3) {
  if(luku2 < luku3) {
    alert("Lukujen järjestys: " + luku1 + ' ' + luku2 + ' ' + luku3);
  }
  else {
    alert("Lukujen järjestys: " + luku1 + ' ' + luku3 + ' ' + luku2);
  }
}
else if(luku2 < luku1 && luku2 < luku3) {
  if(luku1<luku3) {
    alert("Lukujen järjestys: " + luku2 + ' ' + luku1 + ' ' + luku3);
  }
  else {
    alert("Lukujen järjestys: " + luku2 + ' ' + luku3 + ' ' + luku1);
  }
}
else if(luku3 < luku1 && luku3 < luku2) {
    if(luku1 < luku2) {
      alert("Lukujen järjestys: " + luku3 + ' ' + luku1 + ' ' + luku2);
    }
    else {
      alert("Lukujen järjestys: " + luku3 + ' ' + luku2 + ' ' + luku1);
    }
  }
}

function suurin() {
// muuttujat, arvot
var luku1 = document.getElementById('luku1').value;
var luku2 = document.getElementById('luku2').value;
var luku3 = document.getElementById('luku3').value;
var luku4 = document.getElementById('luku4').value;
var luku5 = document.getElementById('luku5').value;
// tarkistaa, mikä luku on suurin
  if(luku1 < luku2 && luku3 < luku2 && luku4 < luku2 && luku5 < luku2) {
    suurin = luku2;
  }
  else if(luku1 < luku3 && luku4 < luku3 && luku5 < luku3) {
    suurin = luku3;
  }
  else if(luku1 < luku4 && luku5 < luku4) {
    suurin = luku4;
  }
  else if(luku1 < luku5) {
    suurin = luku5;
  }
  else {
    suurin = luku1;
  }
  // ilmoittaa syötetyt luvut
  alert("Annoit luvut: " + luku1 + ' ' + luku2 + ' ' + luku3 + ' ' + luku4 + ' ' + luku5);
  //ilmoittaa suurimman luvun
  alert("Suurin: " + suurin);
}
function pari() {
// muuttuja, arvo
var luku = document.getElementById('luku').value;
// tarkistaa onko jakojäännös parillinen
  if (luku % 2 == 0) {
    alert("Luku on parillinen");
 }
  else {
    alert("Luku on pariton");
  }
}

function ajoneuvos() {
// jne jne
var ika = document.getElementById('ika').value;
// tarkistaa iän
  if (ika < 15) {
    alert("Voit ajaa polkupyörällä");
 }
  else if (ika < 18) {
   alert("Voit ajaa mopolla");
 }
  else {
    alert("Voit ajaa autolla");
  }
}

function kaanna() {
var lang = document.getElementById('kieli').value;
  if(lang == 'eng') {
    alert("Hello world!");
}
  else if(lang == 'swe') {
    alert("Hej världen!");
}
  else {
    alert("Hola Mundo!");
  }
}
