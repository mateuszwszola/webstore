import type {Product} from "./Products";
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    product: Product
}

function SingleProduct({product}: Props) {
    return (
        <Link href={`/product/${product.id}`}>
            <a className="group">
                <div className="w-full relative rounded-lg overflow-hidden" style={{minHeight: '400px'}}>
                    <Image
                        className="group-hover:opacity-75"
                        src={product.photo?.photo?.publicUrl}
                        alt={product.photo?.altText}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${product.price / 100}</p>
            </a>
        </Link>
    )
}

export default SingleProduct