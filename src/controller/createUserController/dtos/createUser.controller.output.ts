

export default class CreateUserControllerOutput {
    id!: string;
    name!: string;
    email!: string;

    constructor(user: CreateUserControllerOutput) {
        Object.assign(this, user);
    }
}