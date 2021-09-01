import {fetchJSON} from "https://js.sabae.cc/fetchJSON.js";
let submit = document.getElementById('submit')

let text = document.getElementById("text");
let password = document.getElementById("password");
let prefecture = document.getElementById("select_prefecture");
let city = document.getElementById("select_city");

        
submit.onclick = async () => {
    console.log("click!!")
    if(text.value == "" || password.value == "" || prefecture.value == "" || city.value == ""){
        location.reload();
        alert("未入力の項目があります。。");
    }
    else{
        const account = await fetchJSON("api/account/findusername", {
            username: text.value,
        });

        if(account == null){
            location.reload();
            alert("このユーザー名はすでに追加されています。")
        }
        else{
            const data = await fetchJSON("api/account/add", {
                username: text.value,
                password: password.value,
                prefecture: prefecture.value,
                city: city.value,
                });
            alert("アカウントが作成されました！");
            sessionStorage.setItem("prefecture",prefecture.value);
            sessionStorage.setItem("city",city.value);
            location.href = "/index.html"
        }
    }
}