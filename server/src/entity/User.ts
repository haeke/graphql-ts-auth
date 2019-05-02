import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
// extending BaseEntity allows us to run functions like findOne, and or create etc..
@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  email: string;

  @Column("text")
  password: string;
}
