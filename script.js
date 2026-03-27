function oblicz() {
 
const paliwo = document.getElementById('paliwo').value;
const litry = document.getElementById('litry').value;
const button = document.getElementById('button_id');
const wynik = document.getElementById('wynik');
 
let cena = 0;
 
    if(paliwo == 1) {
        cena = litry * 4;
    }else if(paliwo == 2) {
        cena = litry * 3.5;
    }
 
    wynik.textContent="Cena paliwa wynosi: " + cena;
 
}