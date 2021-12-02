import "reflect-metadata";
import express, { Application, Request, Response } from "express";
import Container from "typedi";
import CreateUserController from "../controller/createUserController/createUser.controller";
import Bootstrap from "./bootstrap";
import { IUserRepositoryToken } from "../useCases/interfaces/repositories/IUserRepository";
import { ICreateUserUseCaseToken } from "../useCases/createUser/ICreateUseCase";


const app: Application = express();
const port = 3000;
Bootstrap.run()
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.get(
    "/",
    async (req: Request, res: Response): Promise<Response> => {
        const controller =  Container.get(CreateUserController)
        try {
            const data = await  controller.execute({
                name:"Barros",
                password: "123",
                email:"barros2@teste.com"
            });
            return res.send(data);
        } catch (err) {
            return res.send(err).status(400)
        }

        
    }
);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}