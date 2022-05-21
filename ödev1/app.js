let person = prompt("İsminizi Yazınız!..");
let kullanici = document.querySelector('#myName');
if (person) {
    kullanici.innerHTML = person;
} else {
    kullanici.innerHTML = "Lütfen isim giriniz ";
}

function showTime() {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let day = now.getDay()

    if (day == 1) { day = "PAZARTESİ" }
    else if (day == 2) { day = "SALI" }
    else if (day == 3) { day = "ÇARŞAMBA" }
    else if (day == 4) { day = "PERŞEMBE" }
    else if (day == 5) { day = "CUMA" }
    else if (day == 6) { day = "CUMARTESİ" }
    else if (day == 0) { day = "PAZAR" }

    document.querySelector("#myClock").innerHTML = hour + ":" + minute + ":" + second + "  " + day;
    setTimeout(showTime, 1000);

}
showTime();


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

