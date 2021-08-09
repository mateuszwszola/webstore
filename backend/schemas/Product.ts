import {list} from "@keystone-next/keystone/schema";
import {integer, relationship, select, text} from "@keystone-next/fields";

export const Product = list({
    fields: {
        name: text({isRequired: true}),
        description: text({
            ui: {
                displayMode: 'textarea'
            }
        }),
        photo: relationship({
            ref: 'ProductImage.product',
        }),
        status: select({
            options: [
                {label: 'Draft', value: 'DRAFT'},
                {label: 'Available', value: 'AVAILABLE'},
                {label: 'Unavailable', value: 'UNAVAILABLE'},
            ],
            defaultValue: 'DRAFT',
            ui: {
                displayMode: 'segmented-control',
            },
        }),
        price: integer(),
        tags: relationship({
            ref: 'Tag.products',
            ui: {
                displayMode: 'cards',
                cardFields: ['name'],
                inlineEdit: {fields: ['name']},
                linkToItem: true,
                inlineConnect: true,
                inlineCreate: {fields: ['name']},
            },
            many: true,
        }),
    },
})