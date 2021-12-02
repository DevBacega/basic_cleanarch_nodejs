import { Inject, Service } from "typedi";
import ICreateUserUseCase, { ICreateUserUseCaseToken } from "../../useCases/createUser/ICreateUseCase";
import CreateUserControllerInput from "./dtos/createUser.controller.input";
import CreateUserControllerOutput from "./dtos/createUser.controller.output";

@Service()
export default class CreateUserController {

    @Inject(ICreateUserUseCaseToken)
    private readonly useCase!: ICreateUserUseCase;

    async execute(payload: CreateUserControllerInput): Promise<CreateUserControllerOutput> {
        
        return await this.useCase.run(payload);
    }

    
}