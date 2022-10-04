document.getElementById("bt_buyfurnace").disabled = true;
let Caneles = 0;
document.getElementById("caneles").innerHTML = Caneles;

bt_cook.onclick = function () {
    Caneles++;
    document.getElementById("caneles").innerHTML = Caneles;
};