import { Token } from "typedi";
import User from "../../../entities/user.entity";

export default interface IUserRepository {
    findByEmail(email: string): Promise<User>;
    create(user: User): Promise<User>;
}

export const IUserRepositoryToken = new Token<IUserRepository>();