import {NextPage} from "next";
import Head from "next/head";
import * as React from "react";
import SignUp from "../components/SignUp";
import {useUser} from "../components/User";
import {useRouter} from "next/router";


const SignUpPage: NextPage = () => {
    const {isAuthenticated, loading} = useUser();
    const router = useRouter();

    React.useEffect(() => {
        (async () => {
            if (isAuthenticated) {
                await router.replace('/account');
            }
        })();
    }, [isAuthenticated, router]);

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <Head>
                <title>Create account | Web Store</title>
            </Head>

            <main className="px-2">
                <h2 className="text-center text-3xl mt-8 font-extrabold">Create account</h2>
                <div className="max-w-md w-full mx-auto">
                    <SignUp />
                </div>
            </main>
        </>
    )
}

export default SignUpPage;