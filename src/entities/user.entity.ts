export default class User {
    id?: string;
    name!: string;
    password!: string;
    email!: string;

    constructor(payload: Partial<User>) {
        Object.assign(this, payload)
        this.validate()
    }

    validate(): void {
        if (this.name.length < 3) {
            throw new Error("Name must been more than 3 characters")
        }

        if (this.password.length < 3) {
            throw new Error("Password must been more than 3 characters")
        }
    }
}