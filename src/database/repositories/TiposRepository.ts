import { db } from '..';

type TipoRequestProps = {
	tipo: string;
};

type TipoResponseProps = {
	id: number;
	tipo: string;
};

export default class TiposRepository {
	async criaTipo({ tipo }: TipoRequestProps): Promise<TipoResponseProps> {
		const tipoCriado = await db.tipo.create({
			data: {
				tipo: tipo,
			},
		});

		return tipoCriado;
	}

	async editaTipo(id: number, { tipo }: TipoRequestProps): Promise<TipoResponseProps> {
		const tipoEditado = await db.tipo.update({
			where: {
				id: id,
			},
			data: {
				tipo: tipo,
			},
		});

		return tipoEditado;
	}
	async buscaTipoPorId(id: number): Promise<TipoResponseProps> {
		const tipo = await db.tipo.findFirst({
			where: { id: id },
		});

		return tipo;
	}

	async buscaTipos(): Promise<TipoResponseProps[]> {
		const tipos = await db.tipo.findMany();

		return tipos;
	}

	async excluiTipo(id: number): Promise<void> {
		await db.tipo.delete({
			where: { id: id },
		});
	}
}
