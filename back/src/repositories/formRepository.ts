import { EntityRepository, Repository } from "typeorm";
import { Formulario } from "../entities/Formulario";

@EntityRepository(Formulario)
class FormRepository extends Repository<Formulario> {}
export { FormRepository };
