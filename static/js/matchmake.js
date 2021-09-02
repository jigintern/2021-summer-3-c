import {fetchJSON} from "https://js.sabae.cc/fetchJSON.js";


document.getElementById('match').innerHTML = "ユーザー名：" +  sessionStorage.getItem("enemyname") + "さんに試合を申し込みます。" ;

const getdata = () =>{
    let matchname  = document.getElementById("matchname");
    let date       = document.getElementById("date");
    let time       = document.getElementById("time");
    let place      = document.getElementById("place");
    let raetematch = document.getElementById("ratematch");
}

let submit = document.getElementById('submit')
        
submit.onclick = async () => {
    console.log("click!!")
    if(matchname.value == "" || date.value == "" || time.value == "" || place.value == "" || ratematch.value == ""){
        location.reload();
        alert("未入力の欄があります。");
    }
    else{
        const data = await fetchJSON("api/account/add_match", {
            name:      matchname.value,
            userid:    sessionStorage.getItem("userid"),
            enemyid:   sessionStorage.getItem("enemyid"),
            date:      date.value,
            time:      time.value,
            place:     place.value,
            ratematch: ratematch.value,
            status: "false",
            sports: sessionStorage.getItem("sports")
        });
        alert("試合が申し込まれました！");
        location.href = "/home.html" //マッチ作成のURL
    }
}