function parilliset() {
  var tulosta = "";
  var parillinen = parseInt(document.getElementById('parillinen').value);
  for (var i = 1; i <= parillinen ; i++) {
    if (i % 2 == 0) {
      tulosta += i + " ";
    }
  }
  document.getElementById("parilliset").innerHTML = tulosta;
}

function salasanaksi() {
  var tulosta = "";
  var sana = document.getElementById("sana").value;
  for (var i = 0; i < sana.length; i++) {
    tulosta += sana[i] + "Ö";
  }
  document.getElementById("salasana").innerHTML = tulosta;
}

function tunnusta() {
  var tulosta = "ei ole";
  var sana = document.getElementById('sana2').value;
  for (var i = 0; i < sana.length; i++) {
    if (sana[i] == "ö" || sana[i] == "Ö") {
      tulosta = "on";
    }
  }
  document.getElementById("totuus").innerHTML = tulosta;
}

function laske() {
  var tulosta = 1;
  var luku = parseInt(document.getElementById('luku').value);
  for (var i = luku; i > 0 ; i--) {
    tulosta *= i;
  }
  document.getElementById("kertoma").innerHTML = tulosta;
}

function tulostin() {
  var tulosta = ""
  for (var i = 1; i <= 100 ; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      tulosta += 'hipheijaa ';
      }
    else if (i % 3 == 0) {
      tulosta += 'hip ';
      }
    else if (i % 5 == 0) {
      tulosta += 'heijaa ';
      }
    else {
      tulosta += i + " ";
      }
    }
    document.getElementById("tulostus").innerHTML = tulosta;
  }

function kymmenenEkaa() {
  var tulosta = "";
  for (var i = 1; i <= 10; i++) {
    tulosta += i + " ";
  }
  document.getElementById("tulostus").innerHTML = tulosta;
}

function laskija() {
  var laskelma = 0;
  for (var i = 1; i <= 10; i++) {
    laskelma += i;
  }
  document.getElementById("laskelma").innerHTML = laskelma;
}

function laskee() {
  var korotettava = document.getElementById('korotettava').value;
  var potenssi = document.getElementById('potenssi').value;
  var tulosta = Math.pow(korotettava,potenssi);
  document.getElementById("potenssi2").innerHTML = tulosta;
}

function etsi() {
  var l1 = document.getElementById('eka').value;
  var l2 = document.getElementById('toka').value;
  var l3 = document.getElementById('kolmas').value;
  var l4 = document.getElementById('neljas').value;
  var l5 = document.getElementById('viides').value;
  var suurinPienin = 'suurin: ' + Math.max(l1,l2,l3,l4,l5) + ' pienin: ' + Math.min(l1,l2,l3,l4,l5);
  document.getElementById("minMax").innerHTML = suurinPienin;
}

function salasanaksi2() {
  var salasana = "";
  var sana = document.getElementById('sana2').value; 
}
