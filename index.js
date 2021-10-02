function displayPhrase1() {
    document.getElementById("news").innerHTML = 'New Phrase lorem bla bla';

}

function displayPhrase2() {
    document.getElementById("news").innerHTML = 'old Phrase lorem bla bla';
}
let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time + "on " + date;
}, 1000);