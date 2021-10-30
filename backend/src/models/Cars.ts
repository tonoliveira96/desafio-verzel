import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
} from "typeorm";

import Image from "./Images";


@Entity("cars")
export default class Car {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @Column()
    model: string;

    @Column()
    price: number;

    @OneToMany(() => Image, (image) => image.car, {
        cascade: ["insert", "update"],
    })
    @JoinColumn({ name: "car_id" })
    images: Image[];
    
}
