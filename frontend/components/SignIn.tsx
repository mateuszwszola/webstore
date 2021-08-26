import Alert from "@reach/alert";
import * as React from "react";
import {gql, useMutation} from "@apollo/client";
import {CURRENT_USER_QUERY} from "./User";
import {useRouter} from "next/router";

const SIGNIN_MUTATION = gql`
    mutation SIGNIN_MUTATION($email: String!, $password: String!) {
        authenticateUserWithPassword(email: $email, password: $password) {
            ... on UserAuthenticationWithPasswordSuccess {
                sessionToken
            }
            ... on UserAuthenticationWithPasswordFailure {
                code
                message
            }
        }
    }
`

type FormValues = {
    email: string;
    password: string;
}

function SignIn() {
    const formRef = React.useRef<HTMLFormElement>(null);
    const [formError, setFormError] = React.useState<null | string>(null);
    const [signin, {loading, error}] = useMutation(SIGNIN_MUTATION, {
        refetchQueries: [{query: CURRENT_USER_QUERY}]
    });
    const router = useRouter();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        // Get form values
        const formData = new FormData(formRef.current);
        const values = Object.fromEntries(formData.entries()) as FormValues;

        try {
            const res = await signin({
                variables: {
                    email: values.email,
                    password: values.password
                }
            });
            const isError = res?.data?.authenticateUserWithPassword.__typename === 'UserAuthenticationWithPasswordFailure';
            if (isError) {
                setFormError('Invalid e-mail and password combination');
            } else {
                formRef.current.reset();
                await router.push('/');
            }
        } catch (err) {
            console.error(err);
        }

    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} action="#" method="POST" className="mt-8">
            {(formError || error) && (
                <Alert>
                    <p className="text-red-500 text-center">{formError || error?.message || 'Something went wrong...'}</p>
                </Alert>
            )}
            <fieldset disabled={loading} className="space-y-6">
                <div>
                    <label htmlFor="email"
                           className="text-xs uppercase text-gray-700 font-semibold">E-mail</label>
                    <input
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="email"
                    />
                </div>
                <div>
                    <label htmlFor="password"
                           className="text-xs uppercase text-gray-700 font-semibold">Password</label>
                    <input
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        type="password"
                        id="password"
                        name="password"
                        required
                        autoComplete="none"
                    />
                </div>
                <div>
                    <button type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"/>
            </svg>
          </span>
                        {loading ? 'Loading...' : 'Sign in'}
                    </button>
                </div>
            </fieldset>
        </form>
    )
}

export default SignIn;