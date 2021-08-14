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

            <main className="py-20 px-0 flex-1 flex flex-col justify-center items-center">
                <h1 className="m-0 leading-normal text-6xl text-center">
                    Welcome to Web Store
                </h1>

                <p className="text-center leading-normal text-2xl">
                    ECommerce Store
                </p>

                <ProductsList />
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
