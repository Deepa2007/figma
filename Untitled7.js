import prisma from '@/lib/prisma';

export default async function handler(req,res) {
	if(req.method ==='GET'){
		const items = await prisma.item.findMany();
		res.status(200).json(items);
	}

}
