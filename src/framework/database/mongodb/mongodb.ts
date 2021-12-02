
import { connect } from "mongoose";
import { Token } from "typedi";

export default class MongoDb {
    static async getConnection() {
        return await connect('mongodb://localhost:27017/clean_arch')
    }

    static async getToken() {
        return new Token<MongoDb>()
    }
}
