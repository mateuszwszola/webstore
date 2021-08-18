import type {NextPage} from 'next'
import Head from 'next/head'
import {addApolloState, initializeApollo} from "../lib/apolloClient";
import ProductsList, {ALL_PRODUCTS_QUERY} from "../components/Products";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Welcome | Web Store</title>
                <meta name="description" content="ECommerce Store"/>
            </Head>

            <main className="py-20 px-2 w-full max-w-screen-xl mx-auto flex-1 flex flex-col">
                <h2 className="mb-2 text-3xl font-semibold text-left">
                    All Products
                </h2>

                <ProductsList/>
            </main>

            <footer className="text-center py-4">
                Powered by Web Store
            </footer>
        </>
    )
}

export async function getStaticProps() {
    const apolloClient = initializeApollo();

    await apolloClient.query({
        query: ALL_PRODUCTS_QUERY,
    });

    return addApolloState(apolloClient, {
        props: {},
        revalidate: 1,
    })
}

export default Home
