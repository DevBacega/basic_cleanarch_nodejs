import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "usertable"})
export class UserModel {
    @PrimaryGeneratedColumn('uuid', {name: "user_id"})
    id!: string;

    @Column()
    name!: string;

    @Column()
    password!: string;

    @Column()
    email!: string;
}