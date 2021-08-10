import {list} from "@keystone-next/keystone/schema";
import {relationship, text} from "@keystone-next/fields";
import 'dotenv/config';
import {cloudinaryImage} from "@keystone-next/cloudinary";

export const cloudinary = {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME as string,
    apiKey: process.env.CLOUDINARY_API_KEY as string,
    apiSecret: process.env.CLOUDINARY_API_SECRET as string,
    folder: process.env.CLOUDINARY_FOLDER as string,
}

export const ProductImage = list({
    fields: {
        photo: cloudinaryImage({
            cloudinary,
        }),
        altText: text(),
        product: relationship({ref: 'Product.photo'})
    }
})