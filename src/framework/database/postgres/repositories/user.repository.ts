import { Service } from "typedi";
import {v4} from "uuid";
import IUserRepository from "../../../../useCases/interfaces/repositories/IUserRepository";
import {Repository, getRepository} from "typeorm";
import { UserModel } from "../model/User.model";
import User from "../../../../entities/user.entity";

@Service()
export class UserRepository implements IUserRepository {
    private ormRepository: Repository<UserModel>;
    
    constructor() {
        this.ormRepository = getRepository(UserModel)
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.ormRepository.findOne({
            where: {
                email
            }
        })
        if(!user) throw Error("User doesn't exist");
        return new User(user);
    }

    async create(user: User): Promise<User> {
        user.id = v4();
        const newUser = this.ormRepository.create(user);
        const data = await this.ormRepository.save(newUser);
        return new User(data);
    }
    
}