import { DB } from "https://deno.land/x/sqlite/mod.ts";

export class Account {
    constructor(){
        this.db = new DB("account.db");
        this.db.query(`
            CREATE TABLE IF NOT EXISTS user_data (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT,
            password TEXT,
            rate INTEGER,
            evaluation INTEGER,
            active TEXT
            )
        `);
        
        this.db.query(`
            CREATE TABLE IF NOT EXISTS sports (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            userid INTEGER
            )
        `);  

        this.db.query(`
            CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            place TEXT,
            userid INTEGER
            )
        `);  
        
        this.db.query(`
            CREATE TABLE IF NOT EXISTS matchlog (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            userid INTEGER,
            enemyid INTEGER,
            date TEXT,
            time TEXT,
            place TEXT,
            ratematch TEXT,
            status TEXT
            )
        `);  
    }

    get_db(){
        return this.db;
    }

    async add(username,password){
        this.db.query("INSERT INTO user_data (username,password,rate,evaluation,active) VALUES(?,?,?,?,?)",[username,password,0,0,"オンライン"])

        return "次のアカウントを追加しました：\"" + username +"\"";
    }

    add_match(name,userid,enemyid,date,time,place,ratematch){
        this.db.query("INSERT INTO matchlog (name,userid,enemyid,date,time,place,ratematch,status) VALUES(?,?,?,?,?,?,?,?)",[name,userid,enemyid,date,time,place,ratematch,"incomplete"])

        return "次の試合を追加しました：\"" + name +"\"";
    }
    

    findusername(username){
        const userdata = this.get_db().query("SELECT * FROM user_data WHERE username = '" + username +"';");
        var i = 0;
        for(const u of userdata){
            return null;
            i += 1;
        }
        if(i == 0){
            return userdata;
        }
    }

    findaccounts(username,password){
        const userdata = this.get_db().query("SELECT * FROM user_data WHERE username = '" + username +"' AND password = '"+ password + "';");

        var i = 0;
        for (const u of userdata){
            return u;  
            i += 1;
        }
        if(i == 0){
            return null;
        }
    }

    updatedata(tablename,id,key,value){
        type = typeof(value);
        if(tyoe == 'string'){
        this.db.query("UPDATE" + tablename + "SET" + key + "='" + value +"';");
        }
        else{
        this.db.query("UPDATE" + tablename + "SET" + key + "=" + value +";");
        }
    }
}
    