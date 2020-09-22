var x = 1;
var y=1;

for (let i = 0; i < 9; i++) {
  x = x + i;
  y=y-1;
}


document.getElementById("demo").innerHTML = x;
document.getElementById("demo1").innerHTML = y;