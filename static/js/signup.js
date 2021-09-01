import {fetchJSON} from "https://js.sabae.cc/fetchJSON.js";
let submit = document.getElementById('submit')

        
submit.onclick = async () => {
    console.log("click!!")
    if(text.value == "" || password.value == ""){
        location.reload();
        alert("ユーザー名またはパスワードが未入力です。");
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
                });
            alert("アカウントが作成されました！");
            location.href = "/index.html"
    
        }
    }
}