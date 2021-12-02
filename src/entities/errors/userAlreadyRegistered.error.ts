import BaseError from "./baseError.error";

export default class UserAlreadyRegistered extends BaseError {
    constructor() {
        super("CA-001", "UserAlreadyRegistered", "User Already Registered")
    }
}