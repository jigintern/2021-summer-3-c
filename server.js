import { Server } from "https://js.sabae.cc/Server.js";
import { Account } from "./src/Account.js";
import { Matching } from "./src/Matching.js";


class MyServer extends Server{
    constructor(port){
        super(port);
        this.account = new Account;
        this.matching = new Matching;
    }

    async api(path,req){
        switch(path){ 
            case "/api/account/add":
                return this.account.add(
                    req['username'],
                    req['password'],
                    req['prefecture'],
                    req['city']
                );

            case "/api/account/add_match":
                return this.account.add_match(
                    req['name'],
                    req['userid'],
                    req['enemyid'],
                    req['date'],
                    req['time'],
                    req['place'],
                    req['ratematch']
                );
            
            case "/api/account/add_sports":
                return this.account.add_sports(
                    req['name'],
                    req['userid']
                )

            case "/api/account/findsports":
                return this.account.findsports(
                    req['userid']
                )

            case "/api/account/findusersports":
                return this.account.findusersports(
                    req['name'],
                    req['userid']
                )
    
            case "/api/account/findusername":
                return this.account.findusername(
                    req['username']
                );
            case "/api/account/findaccounts":
                return this.account.findaccounts(
                    req['username'],
                    req['password']
                );
            case "/api/account/updatedata":
                return this.account.updatedata(
                    req['tablename'],
                    req['id'],
                    req['key'],
                    req['value']
                );

            case "/api/account/find_userid_bysports":
                return this.account.find_userid_bysports(
                    req['sportsname']
                )
            
            case "/api/account/find_users_byuserid":
                return this.account.find_users_byuserid(
                    req['userid']
                )
            
            
            default:
                console.log("予期しないリクエスト",req);
                break;
        }
    }
}

new MyServer(8892);