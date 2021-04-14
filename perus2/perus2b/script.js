function plusMiinus() {
var luku = document.getElementById('luku').value;
  if (luku >= 0) {
    alert("Luku on positiivinen");
}
  else {
    alert("Luku on negatiivinen");
  }
}

function mikaPaiva() {
var day = parseInt(document.getElementById('paiva').value);
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
    default:
    alert("Sunnuntai");
    break;
  }
}

function karkaus() {
var vuosi = document.getElementById('vuosi').value;
if(vuosi % 4 == 0) {
    if(vuosi % 100 == 0) {
       if(vuosi % 400 == 0) {
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
var l1, l2, l3, l4, l5;
  l1 = parseInt(document.getElementById('l1').value);
  l2 = parseInt(document.getElementById('l2').value);
  l3 = parseInt(document.getElementById('l3').value);
  l4 = parseInt(document.getElementById('l4').value);
  l5 = parseInt(document.getElementById('l5').value);
var summa = l1 + l2 + l3 + l4 + l5;
var karvo = summa / 5
alert('summa on '+summa+' ja keskiarvo on '+karvo);
}

var luku2 = parseInt(document.getElementById('luku2').value);
var lause
function lauseMuuttuja() {
  lause += luku2 + "x 1 = " + luku2 * 1;
  lause += luku2 + "x 2 = " + luku2 * 2;
  lause += luku2 + "x 3 = " + luku2 * 3;
  lause += luku2 + "x 4 = " + luku2 * 4;
  lause += luku2 + "x 5 = " + luku2 * 5;
  lause += luku2 + "x 6 = " + luku2 * 6;
  lause += luku2 + "x 7 = " + luku2 * 7;
  lause += luku2 + "x 8 = " + luku2 * 8;
  lause += luku2 + "x 9 = " + luku2 * 9;
  lause += luku2 + "x 10 = " + luku2 * 10;
  alert(lause);
}
