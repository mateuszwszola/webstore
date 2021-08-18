import {gql, useQuery} from "@apollo/client";
import SingleProduct from "./SingleProduct";

export type Photo = {
    altText: string
    photo: {
        id: string
        publicUrl: string
    }
}

export type Product = {
    id: string
    name: string
    description: string
    price: number
    photo: Photo
}

export const ALL_PRODUCTS_QUERY = gql`
    query ALL_PRODUCTS_QUERY {
        allProducts {
            id
            name
            description
            price
            photo {
                altText
                photo {
                    id
                    publicUrl
                }
            }
        }
    }
`

type ProductsData = {
    allProducts: Product[]
}

function ProductsList() {
    const {data, loading, error} = useQuery<ProductsData>(ALL_PRODUCTS_QUERY);

    if (error) return <p>Error</p>
    if (loading || !data) return <p>Loading...</p>

    const {allProducts} = data;

    return (
        <section className="w-full">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                {allProducts.map((product) => (
                    <SingleProduct key={product.id} product={product}/>
                ))}
            </div>
        </section>
    )
}

export default ProductsList;