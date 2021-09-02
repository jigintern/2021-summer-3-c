

let soccer = document.getElementById('サッカー');


soccer.onclick = async () => {
    sessionStorage.setItem("sports","サッカー")
    location.href = "/matchgame.html";
   
    /*const test = await fetchJSON("api/account/find_userid_bysports", {
        sportsname: "サッカー" 
        });
    
    for(const t of test){
        const user =  await fetchJSON("api/account/find_users_byuserid", {
            userid: t[0]
            });

        let newRow = table.insertRow();

        let newCell = newRow.insertCell();
        let newText = document.createTextNode(user.username);
        newCell.appendChild(newText);

        newCell = newRow.insertCell();
        newText = document.createTextNode(user[6]+user[7]);
        newCell.appendChild(newText);
    
        newCell = newRow.insertCell();
        newText = document.createTextNode(user[3]);
        newCell.appendChild(newText);

        newCell = newRow.insertCell();
        newText = document.createTextNode(user[4]);
        newCell.appendChild(newText);

        newCell = newRow.insertCell();
        newText = document.createTextNode(user[5]);
        newCell.appendChild(newText);
    }*/
    
 

}


