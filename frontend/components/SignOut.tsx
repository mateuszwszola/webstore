import {ReactNode} from "react";
import * as React from "react";
import {gql, useMutation} from "@apollo/client";
import {CURRENT_USER_QUERY} from "./User";

const SIGN_OUT_MUTATION = gql`
    mutation SIGN_OUT_MUTATION {
        endSession
    }
`

type Props = {
    children: ReactNode | ReactNode[];
}

function SignOut({children}: Props) {
    const [signOut, {loading}] = useMutation(SIGN_OUT_MUTATION, {
        refetchQueries: [{query: CURRENT_USER_QUERY}]
    })

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        await signOut();
    }

    return (
        <form action="#" method="POST" onSubmit={handleSubmit}>
            <button disabled={loading} type="submit">{children}</button>
        </form>
    )
}

export default SignOut;