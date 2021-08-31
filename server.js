import { Server } from "https://js.sabae.cc/Server.js";
import { Account } from "./src/Account.js";


class MyServer extends Server{
    constructor(port){
        super(port);
        this.account = new Account;
    }

    async api(path,req){
        switch(path){ 
            case "/api/account/add":
                return this.account.add(
                    req['username'],
                    req['password']
                );
            case "/api/account/findusername":
                return this.account.findusername(
                    req['username']
                );
            case "/api/account/findaccounts":
                return this.account.findaccounts(
                    req['username'],
                    req['password']
                );

            default:
                console.log("予期しないリクエスト",req);
                break;
        }
    }
}

new MyServer(8883);