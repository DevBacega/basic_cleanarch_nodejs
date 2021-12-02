export default class CreateUserUseCaseOutput {
    id!: string;
    name!: string;
    email!: string;

    constructor(user: CreateUserUseCaseOutput) {
        Object.assign(this, user);
    }
}