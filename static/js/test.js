let soccer = document.getElementById('soccer');
let badminton = document.getElementById('badminton');
let tennis = document.getElementById('tennis');
let tabletennis = document.getElementById('tabletennis');
let basketball = document.getElementById('basketball');
let volleyball = document.getElementById('volleyball');
let baseball = document.getElementById('baseball');

soccer.onclick = async () => {
    sessionStorage.setItem("sports", "サッカー")
    location.href = "/matchgame.html";
}

badminton.onclick = async () => {
    sessionStorage.setItem("sports", "バドミントン")
    location.href = "/matchgame.html";
}

tennis.onclick = async () => {
    sessionStorage.setItem("sports", "テニス")
    location.href = "/matchgame.html";
}

tabletennis.onclick = async () => {
    sessionStorage.setItem("sports", "卓球")
    location.href = "/matchgame.html";
}

basketball.onclick = async () => {
    sessionStorage.setItem("sports", "バスケットボール")
    location.href = "/matchgame.html";
}

volleyball.onclick = async () => {
    sessionStorage.setItem("sports", "バレーボール")
    location.href = "/matchgame.html";
}

baseball.onclick = async () => {
    sessionStorage.setItem("sports", "野球")
    location.href = "/matchgame.html";
}