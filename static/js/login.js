import {fetchJSON} from "https://js.sabae.cc/fetchJSON.js";

const getdata = () =>{
let text = document.getElementById("text");
let password = document.getElementById("password");
}

let submit = document.getElementById('submit');

submit.onclick = async () => {
  console.log("click!!");
  if(text.value == null || password.value == null){
      location.reload();
      alert("ユーザー名、パスワードを入力してください。");
  }
  else{
  const account = await fetchJSON("api/account/findaccounts", {
    username: text.value,
  });

  

  if(account == null) {
    location.reload();
    alert("ユーザーネームかパスワードが間違っています。");
  } else {
    alert("ログインが完了しました。");
    sessionStorage.setItem("userid", account.id);
    sessionStorage.setItem("username", account.username);
    sessionStorage.setItem("rate", account.rate);
    sessionStorage.setItem("evaluation",account.evaluation)
    console.log(account)
    location.href = "/home.html"
  }
}
}