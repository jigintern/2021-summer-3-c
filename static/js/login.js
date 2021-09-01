import {fetchJSON} from "https://js.sabae.cc/fetchJSON.js";

const getdata = () =>{
let text = document.getElementById("text");
let password = document.getElementById("password");
}

let submit = document.getElementById('submit');

submit.onclick = async () => {
  console.log("click!!");
  if(text.value == "" || password.value == ""){
    location.reload();
    alert("ユーザー名またはパスワードが未入力です。");
}
  else{
  const account = await fetchJSON("api/account/findaccounts", {
    username: text.value,
    password: password.value,
  });

  if(account == null) {
    location.reload();
    alert("ユーザーネームかパスワードが間違っています。");
  } else {
    console.log("テスト");
    console.log(account);
    sessionStorage.setItem("userid", account[0]);
    sessionStorage.setItem("username", account[1]);
    sessionStorage.setItem("rate", account[3]);
    sessionStorage.setItem("evaluation",account[4]);
    sessionStorage.setItem("status",account[5]);
    sessionStorage.setItem("prefecture",account[6]);
    sessionStorage.setItem("city",account[7]);
    alert("ログインが完了しました。");

    
    location.href = "/home.html";
  }
}
}