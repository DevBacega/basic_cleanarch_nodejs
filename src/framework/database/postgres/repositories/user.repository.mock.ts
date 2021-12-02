import { Service } from "typedi";
import User from "../../../../entities/user.entity";
import IUserRepository, { IUserRepositoryToken } from "../../../../useCases/interfaces/repositories/IUserRepository";

@Service()
export class UserRepositoryMock implements IUserRepository {
    findByEmail(email: string): Promise<User> {
        const user = new User({id:"AAAAA", name:"Nome", email:"email@email.com", password:"123456"});
        return Promise.resolve(user);
    }
    create(user: User): Promise<User> {
        const userInsert = new User({id:"BBBB", name:"Nome", email:"email@email.com", password:"123456"});
        return Promise.resolve(userInsert);
    }
    
}