function pisteet() {
var sana = document.getElementById("scrabble").value;
var scrabble = {
  a: 1, b: 3, c:3, d: 2, e: 1, f: 4, g: 2, h:4, i:1, j: 8,
  k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1,
  u: 1, v: 4, w: 4, x: 8, y: 4, z: 10, å: 12, ä: 2, ö: 12
};
var pisteet = [...sana].reduce((accu, letter) => { return accu + scrabble[letter.toLowerCase()]; }, 0);
document.getElementById('pisteytys').innerHTML = "<p>Sanan " + sana + " pisteet ovat: " + (pisteet) + "</p>";
}

function arvo() {
  var numero = [];
for(i= 0; i <= 6; i++){
    var num;
    while ( numero.includes( num = Math.floor(Math.random()*40)+1 ) );
    numero[i] = num;
}
document.getElementById('lottonumerot').innerHTML = (numero);
}