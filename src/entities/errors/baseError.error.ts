export default class BaseError extends Error {
    private readonly code: string
    private readonly shortMessage: string
    
    constructor(code: string, shortMessage: string, message: string) {
        super(message)
        this.code = code
        this.shortMessage = shortMessage
    }
}