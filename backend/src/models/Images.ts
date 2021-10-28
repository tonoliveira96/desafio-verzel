import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Cars from "./Cars";

@Entity("images")
export default class Image {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Cars, (car) => car.images)
  @JoinColumn({ name: "car_id" })
  car: Cars;
}
