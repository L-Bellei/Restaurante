import { db } from '..';

type Ingrediente = {
	nome: string;
};

type IngredienteRequestProps = {
	ingredientes: Ingrediente[];
	prato_id: number;
};

type IngredienteResponseProps = {
	id: number;
	ingredientes: Ingrediente[];
	prato_id: number;
};

export default class IngredientesRepository {
	async criaIngrediente(ingredientes: IngredienteRequestProps): Promise<IngredienteResponseProps> {
		d;
	}
}
