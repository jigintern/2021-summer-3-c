document.getElementById('username').innerHTML = "ユーザー名：" +  sessionStorage.getItem("username") ;
document.getElementById('status').innerHTML = "ステータス：" + sessionStorage.getItem("status");
document.getElementById('rate').innerHTML = "レート：" + sessionStorage.getItem("rate");
document.getElementById('evaluation').innerHTML = "いいね数：" + sessionStorage.getItem("evaluation");


