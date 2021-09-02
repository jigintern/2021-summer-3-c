import { DB } from "https://deno.land/x/sqlite/mod.ts";
export class Matching {
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
            result TEXT
            )
        `);
    }

    get_db() {
        return this.db;
    }

    find_userid_bysports(sportsname){
        const users = this.get_db().query("SELECT userid FROM sports WHERE name = '" + sportsname + "';");
        return users;
    }

    find_users_byuserid(userid){
        var i = 0;
        var text ="SELECT * FROM userdata WHERE ";
        for(const u of userid){
            u = Number(u);
            if(i==0){
                text = text + "userid = " + u;
            }
            else{
                text = text + " || userid = " + u;
            } 
        }
        text = text + " ;";
        const users = this.get_db().query(text);

        return users;
    }



}