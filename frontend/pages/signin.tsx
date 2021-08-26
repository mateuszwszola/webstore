import {NextPage} from "next";
import Head from "next/head";
import * as React from "react";
import SignIn from "../components/SignIn";
import {useUser} from "../components/User";
import {useRouter} from "next/router";


const SignInPage: NextPage = () => {
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
                <title>Sign In | Web Store</title>
            </Head>

            <main className="px-2">
                <h2 className="text-center text-3xl mt-8 font-extrabold">Sign in</h2>
                <div className="max-w-md w-full mx-auto">
                    <SignIn/>
                </div>
            </main>
        </>
    )
}

export default SignInPage;