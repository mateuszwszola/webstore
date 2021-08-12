import type {NextPage} from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Web Store</title>
                <meta name="description" content="ECommerce Store"/>
            </Head>

            <main className="py-20 px-0 flex-1 flex flex-col justify-center items-center">
                <h1 className="m-0 leading-normal text-6xl text-center">
                    Welcome to Web Store
                </h1>

                <p className="text-center leading-normal text-2xl">
                    ECommerce Store
                </p>

                <div className="flex items-center justify-center flex-wrap w-full max-w-screen-md mt-12">
                    <a href="#"
                       className="m-4 p-6 text-left no-underline border border-solid border-gray-300 rounded transition ease-in w-5/12 hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500">
                        <h2>Product #1</h2>
                        <p>Product #1 Description</p>
                    </a>

                    <a href="#"
                       className="m-4 p-6 text-left no-underline border border-solid border-gray-300 rounded transition ease-in w-5/12 hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500">
                        <h2>Product #2</h2>
                        <p>Product #2 Description</p>
                    </a>

                    <a
                        href="#"
                        className="m-4 p-6 text-left no-underline border border-solid border-gray-300 rounded transition ease-in w-5/12 hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500">
                        <h2>Product #3</h2>
                        <p>Product #3 Description</p>
                    </a>

                    <a
                        href="#"
                        className="m-4 p-6 text-left no-underline border border-solid border-gray-300 rounded transition ease-in w-5/12 hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500">
                        <h2>Product #4</h2>
                        <p>
                            Product #4 Description
                        </p>
                    </a>
                </div>
            </main>

            <footer className="text-center py-4">
                Powered by Web Store
            </footer>
        </>
    )
}

export default Home
