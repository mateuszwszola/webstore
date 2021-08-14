import {gql, useQuery} from "@apollo/client";

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

type Product = {
    id: string
    name: string
}

function ProductsList() {
    const {data, loading, error} = useQuery<{ allProducts: Product[] }>(ALL_PRODUCTS_QUERY);

    if (error) return <p>Error</p>
    if (loading || !data) return <p>Loading...</p>

    const {allProducts} = data;

    return (
        <section>
            <ul>
                {allProducts.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </section>
    )
}

export default ProductsList;