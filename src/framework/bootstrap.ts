import Container from "typedi";
import CreateUserUseCase from "../useCases/createUser/createUser.usecase";
import { ICreateUserUseCaseToken } from "../useCases/createUser/ICreateUseCase";
import { IUserRepositoryToken } from "../useCases/interfaces/repositories/IUserRepository";
import MongoDb from "./database/mongodb/mongodb";
import { UserRepository as UserRepositoryMongo } from "./database/mongodb/repositories/user.repository";
import Postgres from "./database/postgres/postgres";
import { UserRepository as UserRepositoryPostgres } from "./database/postgres/repositories/user.repository";


export default class Bootstrap {
    
    
    static async run(): Promise<void> {
        await MongoDb.getConnection();
        await Postgres.getConnection();
        Container.set(IUserRepositoryToken, Container.get(UserRepositoryMongo))
        Container.set(ICreateUserUseCaseToken, Container.get(CreateUserUseCase))
    }
}