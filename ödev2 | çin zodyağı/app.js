let year = prompt("Doğum yılınızı girin!..");
let yilTutucu = document.querySelector('#yil');
if (year) {
    yilTutucu.innerHTML = "Doğum yılınız:" + year;
} else {
    yilTutucu.innerHTML = "Lütfen doğum yılınızı giriniz ";
}

function hesapla() {

    let kalan = year % 12;

    if (kalan == 0) {
        burc = "Maymun"
    } else if (kalan == 1) {
        burc = "Horoz"
    } else if (kalan == 2) {
        burc = "Köpek"
    } else if (kalan == 3) {
        burc = "Domuz"
    } else if (kalan == 4) {
        burc = "Fare"
    } else if (kalan == 5) {
        burc = "Öküz"
    } else if (kalan == 6) {
        burc = "Kaplan"
    } else if (kalan == 7) {
        burc = "Tavşan"
    } else if (kalan == 8) {
        burc = "Ejderha"
    } else if (kalan == 9) {
        burc = "Yılan"
    } else if (kalan == 10) {
        burc = "At"
    } else if (kalan == 11) {
        burc = "Koyun"
    }
    document.querySelector("#zodyak").innerHTML = "Çin zodyağı burcunuz:" + burc
}
hesapla();


