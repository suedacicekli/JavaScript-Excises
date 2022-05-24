let km = prompt("Kilometre");
let yas = prompt("Yaş");
let tip = prompt("Tip ( 1 & 2 )");

let kilometreYeri = document.querySelector('#km');
let yasYeri = document.querySelector('#yas');
let tipYeri = document.querySelector('#tip');


if (km) {
    kilometreYeri.innerHTML = "Kilometre : " + km;
} else {
    kilometreYeri.innerHTML = "Kilometre Giriniz.";
}
if (yas) {
    yasYeri.innerHTML = "Yaş : " + yas;
} else {
    yasYeri.innerHTML = "Yaşınızı Giriniz.";
}
if (tip == 1) {
    tipYeri.innerHTML = "Yolculuk Tek Yön ";
} else if (tip == 2) {
    tipYeri.innerHTML = "Yolculuk Gidiş Dönüş ";
}

let birim = 0.20;

function hesapla() {

    fiyat = (km * birim);


    if (yas < 12) {
        indirim = (km * birim) * 0.5;
        indirimMiktari = "%50";
    } else if (yas >= 12 & yas <= 24) {
        indirim = (km * birim) * 0.1;
        indirimMiktari = "%10 ";
    } else if (yas >= 65) {
        indirim = (km * birim) * 0.3;
        indirimMiktari = "%30";
    } else {
        indirim = 0;
        indirimMiktari = "%0";
    }

    let fiyat = fiyat - indirim;

    if (tip == 2) {
        fiyat = fiyat - (fiyat * 0.2);
        fiyat = fiyat * 2;
    }

    document.querySelector("#indirimsiz").innerHTML = "İndirimsiz Fiyat :" + fiyat + "TL";
    document.querySelector("#indirimli").innerHTML = "İndirimli Fiyat :" + fiyat + "TL";
    document.querySelector("#indirimMiktari").innerHTML = "İndirim Oranı :" + indirimMiktari;


}
hesapla();


/*
function showTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var secs = dateTime.getSeconds();



    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('hours').innerHTML = secs;


}
setInterval(showTime, 10)

*/

