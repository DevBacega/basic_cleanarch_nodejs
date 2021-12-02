
export default class CreateUserControllerInput {
    name!: string;
    password!: string;
    email!: string;

    constructor(payload: Partial<CreateUserControllerInput>) {
        Object.assign(this, payload);
    };
}