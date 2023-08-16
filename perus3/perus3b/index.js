function pisteet() {
var sana = document.getElementById("scrabble").value;
var scrabble = {
  a: 1, b: 8, c:10, d: 7, e: 1, f: 8, g: 8, h:4, i:1, j: 8,
  k: 2, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1,
  u: 3, v: 4, w: 4, x: 8, y: 4, z: 10, å: 12, ä: 2, ö: 7
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

function taulu() {
  let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  let taulukko = document.querySelector('#taulukko');

  for (let subArr of arr) {
    let tr = document.createElement('tr');
          for (let elem of subArr) {
              let td = document.createElement('td');
              td.textContent = elem;
              tr.appendChild(td);
              }
          taulukko.appendChild(tr);
  }
}

function jaa() {
  const maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
  const luvut = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
];
  let pakka = [];
  for (let i = 0; i < maat.length; i++) {
      for (let x = 0; x < luvut.length; x++) {
          let kortti = { Luku: luvut[x], Maa: maat[i] };
          pakka.push(kortti);
      }
  }
  for (let i = pakka.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = pakka[i];
      pakka[i] = pakka[j];
      pakka[j] = temp;
  }
  const itemsDiv = document.getElementById('kortit');
  const contents = [];
  for (let i = 0; i < 5; i++) {
      contents.push(`${pakka[i].Maa} ${pakka[i].Luku}`)
  }
  itemsDiv.innerHTML = contents.join('\n');
}