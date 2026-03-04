import { EntityRepository, Repository } from "typeorm";
import { Aplicacao } from "../entities/aplicacao";

@EntityRepository(Aplicacao)
class AplicationRepository extends Repository<Aplicacao> {}
export { AplicationRepository };
