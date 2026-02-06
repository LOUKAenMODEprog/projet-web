document.getElementById("button_killian").onmousedown = Killian;
document.getElementById("button_killian").onmouseup = killian1;
document.getElementById("button_test").onclick = test;
document.getElementById("change_couleur").onclick = couleur;



function Killian() {
    document.getElementById("killian").style.display = "block";
}

function killian1() {
    document.getElementById("killian").style.display = "none";
}

function test() {
    document.getElementById("test_id").style.display = "block";
}

function couleur() {
    document.body.style.backgroundColor = "#8d02ff";
}