import type {GetStaticPaths, GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
import {useRouter} from "next/router";
import {addApolloState, initializeApollo} from "../../lib/apolloClient";
import {gql, useQuery} from "@apollo/client";
import {ALL_PRODUCTS_QUERY} from "../../components/Products";
import type {Product} from "../../components/Products";
import {ParsedUrlQuery} from "querystring";

const PRODUCT_QUERY = gql`
    query PRODUCT_QUERY($id: ID!) {
        Product(where: { id: $id }) {
            id
            name
            description
            photo {
                id
                altText
                photo {
                    id
                    publicUrl
                }
            }
            status
            price
        }
    }
`

const ProductPage: NextPage = () => {
    const {query: {id}} = useRouter();
    const {data, loading, error} = useQuery(PRODUCT_QUERY, {variables: {id}});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return (
        <>
            <Head>
                <title>{data.Product?.name} | Web Store</title>
                <meta name="description" content="Product description"/>
            </Head>

            <main className="py-20 px-2 w-full max-w-screen-xl mx-auto flex-1 flex flex-col">
                <h2 className="mb-2 text-3xl font-semibold text-left">
                    Product {id}
                </h2>

                <div className="mt-4">
                    <h2>{data.Product?.name}</h2>
                </div>

            </main>

            <footer className="text-center py-4">
                Powered by Web Store
            </footer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const apolloClient = initializeApollo();

    const {data: {allProducts}} = await apolloClient.query({
        query: ALL_PRODUCTS_QUERY,
    });

    const productsIds = allProducts.map((product: Product) => ({
        params: {id: product.id}
    }));

    return {
        paths: productsIds,
        fallback: true,
    }
}

type ContextParams = ParsedUrlQuery & {
    id: string
}

export const getStaticProps: GetStaticProps = async (context) => {
    const apolloClient = initializeApollo();
    const {id} = context.params as ContextParams;

    await apolloClient.query({
        query: PRODUCT_QUERY,
        variables: {id}
    });

    return addApolloState(apolloClient, {
        props: {},
        revalidate: 1,
    })
}


export default ProductPage
