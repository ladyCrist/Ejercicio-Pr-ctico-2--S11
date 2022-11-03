function Invertir() {
  n = 15484;
  x = 0;
  while (n != 0) {
    r = n % 10;
    x = x * 10 + r;
    n = Math.floor(n / 10);
  }
  document.getElementById("txtRespuesta").innerHTML = x;
}

function SumMultDigitos() {
  n = 1024578;
  suma = 0;
  prod = 1;
  while (n != 0) {
    r = n % 10;
    if (r % 2 == 0) suma += r;
    else prod *= r;
    n = Math.floor(n / 10);
  }
  document.getElementById("txtResp1").innerHTML = suma + " / " + prod;
}
