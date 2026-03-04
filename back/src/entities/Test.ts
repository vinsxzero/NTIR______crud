import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tes")
class Test {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name!: string;
}
export { Test };
