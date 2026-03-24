import { Column, PrimaryGeneratedColumn } from "typeorm";

class User {
  @PrimaryGeneratedColumn("uuid", { name: "id_user" })
  id: string = "uuid";
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
}
export { User };
