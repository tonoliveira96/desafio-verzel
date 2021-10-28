import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
} from "typeorm";

import Cars from './Cars'

@Entity("users")
export default class Users {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

}
