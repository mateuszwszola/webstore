import {createSchema} from '@keystone-next/keystone/schema';
import {User} from "./schemas/User";
import {ProductImage} from "./schemas/ProductImage";
import {Product} from "./schemas/Product";
import {Tag} from "./schemas/Tag";

export const lists = createSchema({
    User,
    ProductImage,
    Product,
    Tag
});
