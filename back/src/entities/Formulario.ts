import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Aplicacao } from "./aplicacao";
@Entity("formulario")
class Formulario {
  @PrimaryGeneratedColumn("uuid", { name: "id_formulario" })
  id: string;
  @Column()
  nome: string;
  @Column()
  email: string;
  @Column()
  especialidade: string;
  @Column()
  classe: string;
  @Column()
  conselhonum: string;
  @Column()
  telclinica: string;
  @Column()
  celular: string;
  @Column()
  contatoposterior: string;
  @Column()
  iniciais: string;
  @Column()
  birthdate: Date;
  @Column()
  sex: string;
  @Column()
  pregnant: string;
  @Column()
  medicamento: string;
  @Column()
  doencasassociadas: string;
  @Column()
  outrosprocedimentos: string;
  @Column()
  lote: string;
  @Column()
  distribuidor: string;
  @Column()
  entrega: Date;
  @Column()
  condicaoEntrega: string;
  @Column()
  condicaoConsultorio: string;
  @Column()
  volumeConstituicao: string;
  @Column()
  dataHoraDiluicao: Date;
  @Column()
  dataHoraAplicacao: Date;
  @Column()
  diluenteUtilizado: string;
  @Column()
  validadeDiluente: Date;
  @Column()
  foiUsadoAntes: string;
  @Column()
  queixa: string;
  @Column("simple-array")
  indicacao: string[];
  @Column("simple-array")
  administracao: string[];
  @Column()
  assepsia: string;
  @Column()
  anestesia: string;
  @OneToMany(() => Aplicacao, (aplicacao) => aplicacao.formulario, {
    cascade: true,
  })
  aplicacoes: Aplicacao;
}
export { Formulario };
