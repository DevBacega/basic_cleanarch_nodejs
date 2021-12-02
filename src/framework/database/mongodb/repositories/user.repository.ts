import { Service } from "typedi";
import User from "../../../../entities/user.entity";

import IUserRepository from "../../../../useCases/interfaces/repositories/IUserRepository";
import { UserModel } from "../model/user.model";


@Service()
export class UserRepository implements IUserRepository {
    async findByEmail(email: string): Promise<User> {
        const data = await UserModel.findOne({
            email
        })
        if(!data) throw Error("bla bla bla")
        const user = new User({id: data._id, name: data.name, email: data.email, password: data.password})
       return user
    }
    async create(user: User): Promise<User> {
        return await UserModel.create(user)
    }
    
}