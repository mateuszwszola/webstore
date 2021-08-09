import {list} from "@keystone-next/keystone/schema";
import {image, relationship, text} from "@keystone-next/fields";

export const ProductImage = list({
    fields: {
        photoUrl: image(),
        altText: text(),
        product: relationship({ref: 'Product.photo'})
    }
})