import { db } from '..';

type PratoRequestProps = {
	nome: string;
	tipo_id: number;
};

type PratoResponseProps = {
	id: number;
	nome: string;
	tipo_id: number;
};

export default class PratosRepository {
	async criaPrato(prato: PratoRequestProps): Promise<PratoResponseProps> {
		const pratoCriado = await db.prato.create({
			data: {
				nome: prato.nome,
				tipo_id: prato.tipo_id,
			},
		});

		return pratoCriado;
	}

	async editaPrato(id: number, prato: PratoRequestProps): Promise<PratoResponseProps> {
		const pratoEditado = await db.prato.update({
			where: { id: id },
			data: {
				nome: prato.nome,
				tipo_id: prato.tipo_id,
			},
		});

		return pratoEditado;
	}

	async buscaPratoPorId(id: number): Promise<PratoResponseProps> {
		const prato = await db.prato.findFirst({
			where: { id: id },
		});

		return prato;
	}

	async buscaPratos(): Promise<PratoResponseProps[]> {
		const pratos = await db.prato.findMany();

		return pratos;
	}

	async excluiPrato(id: number): Promise<void> {
		await db.prato.delete({
			where: { id: id },
		});
	}
}
