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
  var num1 = parseInt(document.getElementById('luku1').value) || 0;
  var num2 = parseInt(document.getElementById('luku2').value) || 0;
  var num3 = parseInt(document.getElementById('luku3').value) || 0;
  var num4 = parseInt(document.getElementById('luku4').value) || 0;
  var num5 = parseInt(document.getElementById('luku5').value) || 0;

  var max = Math.max(num1, num2, num3, num4, num5);

  // ilmoittaa syötetyt luvut
  alert("Annoit luvut: " + num1 + ' ' + num2 + ' ' + num3 + ' ' + num4 + ' ' + num5);
  //ilmoittaa suurimman luvun
  alert("Suurin: " + max);
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
  if (ika < 16) {
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
