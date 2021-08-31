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
            active TEXT
            )
        `);

        this.db.query(`
            CREATE TABLE IF NOT EXISTS sports (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT,
            password TEXT,
            rate INTEGER,
            evaluation INTEGER
            )
        `);
    }

    get_db() {
        return this.db;
    }

    async add(username, password) {
        this.db.query("INSERT INTO user_data (username,password,rate,evaluation) VALUES(?,?,?,?)", [username, password, 0, 0])

        return "次のアカウントを追加しました：\"" + username + "\"";
    }

    findusername(username) {
        const userdata = this.get_db().query("SELECT * FROM user_data WHERE username = '" + username + "';");
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
        for (const u of userdata) {
            return userdata;
            i += 1;
        }
        if (i == 0) {
            return null;
        }
    }

    updatedata(tablename, id, key, value) {
        this.db.query("UPDATE" + tablename + "SET" + key + "='" + value + "';");

        this.db.query("UPDATE" + tablename + "SET" + key + "=" + value + ";");
    }
}
