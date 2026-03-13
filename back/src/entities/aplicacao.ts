import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import v4 from "uuid";
import { Formulario } from "./Formulario";

@Entity("aplicacao")
class Aplicacao {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  regiao: string;
  @Column()
  gravidadeInfeccao: string;
  @Column()
  numeroDePontos: number;
  @Column()
  volumePorPonto: number;
  @Column()
  volumeTotal: number;
  @Column()
  unidades: number;
  @Column()
  paralisia: string;
  @ManyToOne(() => Formulario, (formulario) => formulario.aplicacoes)
  @JoinColumn({ name: "formularioId" })
  formulario: Formulario;
}
export { Aplicacao };
