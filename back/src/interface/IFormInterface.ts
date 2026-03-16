import { IAplicacaoInterface } from "./IAplicacaoInterface";

interface IFormInterface {
  id?: string;
  nome: string;
  email: string;
  especialidade: string;
  classe: string;
  conselhonum: string;
  telclinica: string;
  celular: string;
  contatoposterior: string;
  iniciais: string;
  birthdate: Date;
  sex: string;
  pregnant: string;
  medicamento: string;
  doencasassociadas: string;
  outrosprocedimentos: string;
  lote: string;
  distribuidor: string;
  entrega: Date;
  condicaoEntrega: string;
  condicaoConsultorio: string;
  volumeConstituicao: string;
  dataHoraDiluicao: Date;
  dataHoraAplicacao: Date;
  diluenteUtilizado: string;
  validadeDiluente: Date;
  foiUsadoAntes: string;
  queixa: string;
  indicacao: string[];
  administracao: string[];

  assepsia: string;
  anestesia: string;
  aplicacoes: IAplicacaoInterface;
}
export { IFormInterface };
