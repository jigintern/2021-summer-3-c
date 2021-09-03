import {fetchJSON} from "https://js.sabae.cc/fetchJSON.js";


var userid = Number(sessionStorage.getItem("userid"));

const test = await fetchJSON("api/account/matchcheck", {
    userid: userid 
    });
if(test != null){
    document.getElementById('alarm').innerHTML = "<a href='request.html'> 対戦依頼が届いています！ </a>"  ;
}


const test2 = await fetchJSON("api/account/resultmatchcheck", {
    userid: userid 
    });
if(test2 != null){
    document.getElementById('alarm2').innerHTML = "<a href='matchlist.html'> 評価未送信の試合があります！ </a>"  ;
}

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
