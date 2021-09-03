import {fetchJSON} from "https://js.sabae.cc/fetchJSON.js";

const getdata = () =>{
    let result  = document.getElementById("result");
}

let submit = document.getElementById('submit')
        
submit.onclick = async () => {
    console.log("click!!")
        const data1 = await fetchJSON("api/account/updatedata", {
            tablename: "matchlog",
            id:        sessionStorage.getItem("matchid"),　//sessionStorage.getItem("matchid"),
            key:       "end",
            value:     "true",
        });
        const data2 = await fetchJSON("api/account/updatedata", {
            tablename: "matchlog",
            id:        sessionStorage.getItem("matchid"),  //sessionStorage.getItem("matchid"),
            key:       "result",
            value:     result.value,
        });

        //レート
        var ratematch = sessionStorage.getItem("ratematch");
        
        if(ratematch == "on"){
            var rate = Number(sessionStorage.getItem("rate"));
            if(result.value == "win"){
                rate += 50;
            }else if(rate >= 50){
                if(rate > 50){
                    rate -= 50;
                }
                else{
                    rate = 0;
                }
            }
            const data3 = await fetchJSON("api/account/updatedata", {
                tablename: "user_data",
                id:        sessionStorage.getItem("userid"),
                key:       "rate",
                value:     rate,
            });
            
            sessionStorage.setItem("rate",rate);
        }
        
        alert("結果が反映されました！");
        location.href = "/home.html" //マッチ作成のURL
}