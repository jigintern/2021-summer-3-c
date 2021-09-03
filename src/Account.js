import { DB } from "https://deno.land/x/sqlite/mod.ts";

export class Account {
    constructor() {
        this.db = new DB("account.db");
        this.db.query(`
            CREATE TABLE IF NOT EXISTS user_data (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT,
            password TEXT,
            rate INTEGER,
            evaluation INTEGER,
            active TEXT,
            prefecture TEXT,
            city TEXT
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
            CREATE TABLE IF NOT EXISTS matchlog (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            userid INTEGER,
            enemyid INTEGER,
            date TEXT,
            time TEXT,
            place TEXT,
            ratematch TEXT,
            status TEXT,
            end TEXT,
            result TEXT,
            sports TEXT
            )
        `);
    }

    get_db() {
        return this.db;
    }


    async add(username,password,prefecture,city){
        this.db.query("INSERT INTO user_data (username,password,rate,evaluation,active,prefecture,city) VALUES(?,?,?,?,?,?,?)",[username,password,0,0,"オンライン",prefecture,city])


        return "次のアカウントを追加しました：\"" + username + "\"";
    }

    add_match(name,userid,enemyid,date,time,place,ratematch,status,sports){
        this.db.query("INSERT INTO matchlog (name,userid,enemyid,date,time,place,ratematch,status,end,result,sports) VALUES(?,?,?,?,?,?,?,?,?,?,?)",[name,userid,enemyid,date,time,place,ratematch,status,"false","NULL",sports])

        return "次の試合を追加しました：\"" + name +"\"";
    }

    add_sports(name,userid){
        this.db.query("INSERT INTO sports (name,userid) VALUES(?,?)",[name,userid])

        return "次のスポーツを追加しました：\"" + name +"\"";
    }


    
    findsports(userid){
        const sports = this.get_db().query("SELECT name FROM sports WHERE userid =" + userid + ";");

        var i = 0;
        for(const s of sports){
            return sports;

            i+=1;
        }
        if(i == 0){
            return null;
        }
    }

    findusersports(userid,name){
        const sports = this.get_db().query("SELECT * FROM sports WHERE name = " + name + " AND userid = " + userid + ";");
        var i = 0;
        for(const s of sports){
            return null;
            i+=1;
        }
        if(i == 0){
            return sports;
        }
    }

    findusername(username){
        const userdata = this.get_db().query("SELECT * FROM user_data WHERE username = '" + username +"';");

        var i = 0;
        for (const u of userdata) {
            return null;
            i += 1;
        }
        if (i == 0) {
            return userdata;
        }
    }

    findaccounts(username, password) {
        const userdata = this.get_db().query("SELECT * FROM user_data WHERE username = '" + username + "' AND password = '" + password + "';");

        var i = 0;

        for (const u of userdata){
            return u;  

            i += 1;
        }
        if (i == 0) {
            return null;
        }
    }


    updatedata(tablename,id,key,value){
        var type = typeof(value);
        if(type == 'string'){
            this.db.query("UPDATE " + tablename + " SET " + key + " = '" + value +"' WHERE id = " + id + ";");
        }
        else{
            this.db.query("UPDATE " + tablename + " SET " + key + " = " + value + " WHERE id = " + id + ";");
        }
        return "データベースを更新しました";

    }

    find_userid_bysports(userid,sportsname){
        const users = this.get_db().query("SELECT userid FROM sports WHERE userid != " + userid + " AND name = '" + sportsname + "';");
        return users;
    }

    find_users_byuserid(userid){
        var text ="SELECT * FROM user_data WHERE id = " + userid + ";";
        text + " ;";
        
        const users = this.get_db().query(text);

        return users;
    }

    matchcheck(userid){
        const matches = this.get_db().query("SELECT * FROM matchlog WHERE enemyid = " + userid + " AND status = 'false' ;");
        var i = 0;

        for (const m of matches){
            return matches;  

            i += 1;
        }
        if (i == 0) {
            return null;
        }
        
    }

    resultmatchcheck(userid){
        const matches = this.get_db().query("SELECT * FROM matchlog WHERE enemyid = " + userid + " AND status = 'true' AND end = 'false' ;");
        var i = 0;

        for (const m of matches){
            return matches;  

            i += 1;
        }
        if (i == 0) {
            return null;
        }
        
    }
}
