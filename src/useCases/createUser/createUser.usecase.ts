import { Inject, Service } from "typedi";
import UserAlreadyRegistered from "../../entities/errors/userAlreadyRegistered.error";
import User from "../../entities/user.entity";
import IUserRepository, { IUserRepositoryToken } from "../interfaces/repositories/IUserRepository";
import CreateUserUseCaseInput from "./dtos/createUser.usecase.input";
import CreateUserUseCaseOutput from "./dtos/createUser.usecase.output";
import ICreateUserUseCase from "./ICreateUseCase";

@Service()
export default class CreateUserUseCase implements ICreateUserUseCase {

    @Inject(IUserRepositoryToken)
    private readonly userRepository!: IUserRepository;

    async run(input: CreateUserUseCaseInput): Promise<CreateUserUseCaseOutput> {
        const user = new User(input);
        user.validate();
        const userAlreadyRegistered = await this.userAlreadyRegistered(user.email);
        if (userAlreadyRegistered) {
            throw new UserAlreadyRegistered();
        }
        const createdUser = await this.userRepository.create(user);

        return this.buildOutput(createdUser);
    }

    private async userAlreadyRegistered(email: string): Promise<boolean> {
        let user = null;
        try {
            user = await this.userRepository.findByEmail(email);
            console.log("❤❤❤❤", user)
        } catch (err) {
            console.log(err)
        }
        return !!user;
    }

    private buildOutput(user: User): CreateUserUseCaseOutput {
        return { 
            id: user.id!,
            email: user.email,
            name: user.name
        }
    }
    

}