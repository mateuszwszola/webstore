import {list} from "@keystone-next/keystone/schema";
import {relationship, text} from "@keystone-next/fields";

export const Tag = list({
    ui: {
        isHidden: true,
    },
    fields: {
        name: text(),
        products: relationship({
            ref: 'Product.tags',
            many: true,
        }),
    },
})