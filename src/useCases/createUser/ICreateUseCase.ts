import { Token } from "typedi";
import CreateUserUseCaseInput from "./dtos/createUser.usecase.input";
import CreateUserUseCaseOutput from "./dtos/createUser.usecase.output";

export default interface ICreateUserUseCase {
    run(user: CreateUserUseCaseInput): Promise<CreateUserUseCaseOutput>;
}

export const ICreateUserUseCaseToken = new Token<ICreateUserUseCase>()