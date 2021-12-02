import { Token } from "typedi";
import { createConnection } from "typeorm";
import { UserModel } from "./model/User.model";

export default class Postgres {
    static async getConnection() {
        const connection = await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "123",
            database: "clean_arch",
            entities: [UserModel]
        });
        return connection;
    }
}