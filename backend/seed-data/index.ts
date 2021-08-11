import {products} from "./data";
import type {KeystoneContext} from '@keystone-next/types'

export async function insertSeedData(ctx: KeystoneContext) {
    try {
        console.log(`🌱 Inserting Seed Data: ${products.length} Products`);

        for (let product of products) {
            console.log(`  🛍️ Adding Product: ${product.name}`);

            await ctx.prisma.product.create({
                data: {
                    name: product.name,
                    description: product.description,
                    status: product.status,
                    price: product.price,
                    photo: {
                        connect: {id: product.photo.id}
                    }
                }
            });
        }
        console.log(`✅ Seed Data Inserted: ${products.length} Products`);
        console.log(`👋 Please start the process with \`yarn dev\` or \`npm run dev\``);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}