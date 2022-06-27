

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.user.deleteMany();
    console.log('Seeding...');
    await prisma.user.create({
       data: {
           email: 'user@test.com',
           password: '$2b$06$oKYzcW/aCNpXix74yh4iauxOfYghPp7XM.lhm1K/TjUE5.lOwGtda'
       }
    })
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
