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
}
